import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";
import { subjects, type Subject, type Chapter } from "../data/subjects";
import SubjectIcon from "./SubjectIcon";

interface SearchResult {
  type: "subject" | "chapter";
  subject: Subject;
  chapter?: Chapter;
  highlight: string;
}

function highlight(text: string, query: string): string {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(new RegExp(`(${escaped})`, "gi"), "|||$1|||");
}

function HighlightedText({ text, query }: { text: string; query: string }) {
  const parts = highlight(text, query).split("|||");
  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className="bg-sky-400/30 text-sky-300 rounded px-0.5">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

interface Props {
  onNavigate: (subjectId: string, chapterId?: string) => void;
}

export default function SearchBar({ onNavigate }: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();

  const runSearch = useCallback((q: string) => {
    if (!q.trim()) { setResults([]); return; }
    const lower = q.toLowerCase();
    const out: SearchResult[] = [];

    for (const s of subjects) {
      if (s.name.toLowerCase().includes(lower) || s.description.toLowerCase().includes(lower)) {
        out.push({ type: "subject", subject: s, highlight: s.name });
      }
      for (const c of s.chapters) {
        if (c.title.toLowerCase().includes(lower) || c.description.toLowerCase().includes(lower)) {
          out.push({ type: "chapter", subject: s, chapter: c, highlight: c.title });
        }
      }
    }
    setResults(out.slice(0, 8));
  }, []);

  useEffect(() => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => runSearch(query), 150);
    return () => clearTimeout(debounceRef.current);
  }, [query, runSearch]);

  const choose = (r: SearchResult) => {
    onNavigate(r.subject.id, r.chapter?.id);
    setQuery("");
    setResults([]);
    setOpen(false);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (!results.length) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIndex(i => Math.min(i + 1, results.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setActiveIndex(i => Math.max(i - 1, -1)); }
    if (e.key === "Enter" && activeIndex >= 0) choose(results[activeIndex]);
    if (e.key === "Escape") { setOpen(false); inputRef.current?.blur(); }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true); setActiveIndex(-1); }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          onKeyDown={onKey}
          placeholder="Search subjects, chapters..."
          className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md
                     text-white placeholder-slate-400 text-sm focus:outline-none focus:border-sky-500/60
                     focus:bg-white/8 focus:shadow-[0_0_20px_rgba(14,165,233,0.25)] transition-all duration-300"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setResults([]); }}
            className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {open && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl overflow-hidden z-50"
          >
            {results.map((r, i) => (
              <motion.button
                key={`${r.subject.id}-${r.chapter?.id ?? "subj"}`}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => choose(r)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-150 group
                  ${activeIndex === i ? "bg-sky-500/15" : "hover:bg-white/5"}`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${r.subject.gradient} shrink-0`}>
                  <SubjectIcon name={r.subject.icon} className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white truncate">
                    <HighlightedText text={r.type === "chapter" ? r.chapter!.title : r.subject.name} query={query} />
                  </div>
                  <div className="text-xs text-slate-400 truncate">
                    {r.type === "chapter" ? r.subject.name : r.subject.description}
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-150 ${activeIndex === i ? "translate-x-1 text-sky-400" : ""}`} />
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

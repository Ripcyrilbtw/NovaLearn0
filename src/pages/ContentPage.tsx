import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, FileText, Play, GripVertical, Clock, ExternalLink } from "lucide-react";
import type { Subject, Chapter } from "../data/subjects";
import SubjectIcon from "../components/SubjectIcon";

interface Props {
  subject: Subject;
  initialChapterId: string;
  onBack: () => void;
}

const SIDEBAR_WIDTH = 260;

export default function ContentPage({ subject, initialChapterId, onBack }: Props) {
  const [activeId, setActiveId] = useState(initialChapterId);
  const [activeTab, setActiveTab] = useState<"pdf" | "video">("pdf");
  const [dividerX, setDividerX] = useState(55); // percent
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const chapter = subject.chapters.find(c => c.id === activeId) ?? subject.chapters[0];
  const chapterIndex = subject.chapters.findIndex(c => c.id === activeId);

  const onMouseDown = useCallback(() => { dragging.current = true; }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!dragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((e.clientX - rect.left - SIDEBAR_WIDTH) / (rect.width - SIDEBAR_WIDTH)) * 100;
    setDividerX(Math.max(25, Math.min(75, pct)));
  }, []);

  const onMouseUp = useCallback(() => { dragging.current = false; }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  const prev = () => { if (chapterIndex > 0) setActiveId(subject.chapters[chapterIndex - 1].id); };
  const next = () => { if (chapterIndex < subject.chapters.length - 1) setActiveId(subject.chapters[chapterIndex + 1].id); };

  return (
    <div className="h-screen flex flex-col pt-16 bg-slate-950 overflow-hidden" ref={containerRef}>

      {/* Top bar */}
      <div className="h-12 flex items-center gap-3 px-4 border-b border-white/5 bg-slate-900/80 backdrop-blur-md shrink-0 z-20">
        <button onClick={onBack} className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors group mr-1">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span className="hidden sm:inline">{subject.name}</span>
        </button>
        <div className="h-4 w-px bg-white/10" />
        <div className={`w-5 h-5 rounded-md flex items-center justify-center bg-gradient-to-br ${subject.gradient}`}>
          <SubjectIcon name={subject.icon} className="w-3 h-3 text-white" />
        </div>
        <span className="text-sm text-white font-medium truncate max-w-xs">{chapter.title}</span>
        <div className="ml-auto flex items-center gap-2">
          <button
            disabled={chapterIndex === 0}
            onClick={prev}
            className="w-7 h-7 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs text-slate-500 hidden sm:inline">{chapterIndex + 1} / {subject.chapters.length}</span>
          <button
            disabled={chapterIndex === subject.chapters.length - 1}
            onClick={next}
            className="w-7 h-7 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <div
          className="hidden md:flex flex-col border-r border-white/5 bg-slate-900/60 backdrop-blur-md overflow-y-auto shrink-0"
          style={{ width: SIDEBAR_WIDTH }}
        >
          <div className="p-3 border-b border-white/5">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-medium">Chapters</span>
          </div>
          <div className="flex-1 p-2 space-y-0.5">
            {subject.chapters.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={`w-full text-left rounded-xl px-3 py-2.5 transition-all duration-150 group flex items-center gap-2.5
                  ${activeId === c.id ? "bg-sky-500/15 border border-sky-500/25" : "hover:bg-white/4 border border-transparent"}`}
              >
                <span className={`text-xs font-mono shrink-0 w-5 ${activeId === c.id ? "text-sky-400" : "text-slate-600"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className={`text-xs font-medium leading-snug ${activeId === c.id ? "text-white" : "text-slate-400 group-hover:text-slate-200"}`}>
                    {c.title}
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Clock className="w-2.5 h-2.5 text-slate-600" />
                    <span className="text-[10px] text-slate-600">{c.duration}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Content area with resizable panels */}
        <div className="flex flex-1 overflow-hidden relative">

          {/* PDF Panel */}
          <div
            className="flex flex-col overflow-hidden"
            style={{ width: `${dividerX}%` }}
          >
            <div className="flex items-center gap-2 px-4 h-10 border-b border-white/5 bg-slate-900/40 shrink-0">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-xs text-slate-400 font-medium">PDF Notes</span>
              <a
                href={chapter.pdf}
                target="_blank"
                rel="noreferrer"
                className="ml-auto text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
              >
                <ExternalLink className="w-3 h-3" /> Open
              </a>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={chapter.id + "-pdf"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex-1 bg-slate-950"
              >
                <iframe
                  src={chapter.pdf}
                  title="PDF Viewer"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Drag handle */}
          <div
            onMouseDown={onMouseDown}
            className="w-3 cursor-col-resize flex items-center justify-center shrink-0 group bg-slate-950 hover:bg-sky-500/10 transition-colors"
          >
            <GripVertical className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 transition-colors" />
          </div>

          {/* Video Panel */}
          <div className="flex flex-col overflow-hidden flex-1">
            <div className="flex items-center gap-2 px-4 h-10 border-b border-white/5 bg-slate-900/40 shrink-0">
              <Play className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-xs text-slate-400 font-medium">Video Lesson</span>
              <div className="flex items-center gap-1 ml-auto">
                <Clock className="w-3 h-3 text-slate-500" />
                <span className="text-xs text-slate-500">{chapter.duration}</span>
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={chapter.id + "-video"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex-1 bg-black flex flex-col"
              >
                <div className="flex-1 relative">
                  <iframe
                    src={chapter.video}
                    title="Video Lesson"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                {/* Chapter info below video */}
                <div className="p-4 border-t border-white/5 bg-slate-900/60 backdrop-blur-md">
                  <h3 className="text-sm font-semibold text-white mb-1">{chapter.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{chapter.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile tab switcher */}
      <div className="md:hidden flex items-center border-t border-white/5 bg-slate-900/90">
        <button
          onClick={() => setActiveTab("pdf")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors
            ${activeTab === "pdf" ? "text-sky-400 border-t-2 border-sky-400" : "text-slate-400"}`}
        >
          <FileText className="w-4 h-4" /> Notes
        </button>
        <button
          onClick={() => setActiveTab("video")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors
            ${activeTab === "video" ? "text-sky-400 border-t-2 border-sky-400" : "text-slate-400"}`}
        >
          <Play className="w-4 h-4" /> Video
        </button>
      </div>
    </div>
  );
}

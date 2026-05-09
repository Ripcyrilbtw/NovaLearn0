import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SubjectCard from "../components/SubjectCard";
import SearchBar from "../components/SearchBar";
import { subjects } from "../data/subjects";

interface Props {
  onSelectSubject: (id: string) => void;
  onNavigate: (subjectId: string) => void;
}

export default function HomePage({ onSelectSubject }: Props) {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-medium mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Next-Gen Learning Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] mb-5 tracking-tight"
          >
            Master Every
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Subject
              </span>
              {/* underline glow */}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-sky-500/0 via-sky-400/60 to-sky-500/0" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Interactive notes, video lessons and chapter-by-chapter guides —
            all in one beautifully designed platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SearchBar />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {[
            { label: "Subjects", value: "12" },
            { label: "Chapters", value: "65+" },
            { label: "Video Lessons", value: "65+" },
            { label: "PDF Notes", value: "65+" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex items-center gap-3 mb-8"
        >
          <h2 className="text-xl font-semibold text-white">All Subjects</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {subjects.map((subject, i) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              index={i}
              onClick={() => onSelectSubject(subject.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

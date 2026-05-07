import { motion } from "framer-motion";
import { ChevronLeft, Clock, FileText, Play } from "lucide-react";
import type { Subject } from "../data/subjects";
import SubjectIcon from "../components/SubjectIcon";

interface Props {
  subject: Subject;
  onBack: () => void;
  onSelectChapter: (chapterId: string) => void;
}

export default function SubjectPage({ subject, onBack, onSelectChapter }: Props) {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">

        {/* Back */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors mb-8 group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          All Subjects
        </motion.button>

        {/* Subject header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-start gap-5 mb-12"
        >
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${subject.gradient} shrink-0`}
            style={{ boxShadow: `0 0 30px ${subject.glowColor}` }}
          >
            <SubjectIcon name={subject.icon} className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{subject.name}</h1>
            <p className="text-slate-400">{subject.description}</p>
            <div className="flex items-center gap-4 mt-3">
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                {subject.chapters.length} chapters
              </span>
            </div>
          </div>
        </motion.div>

        {/* Chapter list */}
        <div className="space-y-3">
          {subject.chapters.map((chapter, i) => (
            <motion.button
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => onSelectChapter(chapter.id)}
              className="w-full text-left group rounded-2xl border border-white/8 bg-white/3 hover:bg-white/6 hover:border-white/15
                         backdrop-blur-sm p-5 transition-all duration-200 relative overflow-hidden"
            >
              {/* Hover left accent */}
              <div className={`absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b ${subject.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-sm font-bold text-slate-400 shrink-0 group-hover:border-sky-500/30 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors mb-0.5 leading-tight">
                    {chapter.title}
                  </h3>
                  <p className="text-xs text-slate-500 truncate">{chapter.description}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="hidden sm:flex items-center gap-1 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    {chapter.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <FileText className="w-3.5 h-3.5 text-slate-400" />
                    </span>
                    <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <Play className="w-3.5 h-3.5 text-slate-400" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

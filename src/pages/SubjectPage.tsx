import { motion } from "framer-motion";
import { ChevronLeft, Clock, ExternalLink } from "lucide-react";
import type { Subject } from "../data/subjects";
import SubjectIcon from "../components/SubjectIcon";

interface Props {
  subject: Subject;
  onBack: () => void;
}

export default function SubjectPage({ subject, onBack }: Props) {
  const CONTENT_URL = "https://amazing-souffle-111a7d.netlify.app/";
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

        {/* Open Learning Content Button */}
        <motion.a
          href={CONTENT_URL}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="w-full max-w-2xl mx-auto block"
        >
          <div className="group rounded-2xl border border-sky-500/30 bg-gradient-to-r from-sky-500/10 to-cyan-500/10 hover:border-sky-500/60 hover:from-sky-500/20 hover:to-cyan-500/20 backdrop-blur-sm p-8 transition-all duration-300 text-center relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/0 via-sky-400/5 to-sky-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative">
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                Start Learning {subject.name}
              </h2>
              <p className="text-slate-400 mb-4 text-sm">
                Access all {subject.chapters.length} chapters with comprehensive notes and video lessons
              </p>
              <div className="flex items-center justify-center gap-2 text-sky-400 group-hover:text-sky-300 transition-colors">
                <span className="font-semibold">Open Learning Platform</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.a>

        {/* Chapter Overview */}
        <div className="mt-12">
          <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-widest">Chapter Overview</h3>
          <div className="grid gap-2">
            {subject.chapters.map((chapter, i) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/2 hover:bg-white/5 transition-colors"
              >
                <span className="text-xs font-mono text-sky-400 font-bold w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">{chapter.title}</p>
                  <p className="text-xs text-slate-500 truncate">{chapter.description}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-500 shrink-0">
                  <Clock className="w-3 h-3" />
                  {chapter.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

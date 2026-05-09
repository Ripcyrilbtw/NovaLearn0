import { motion } from "framer-motion";
import { GraduationCap, Home } from "lucide-react";

interface Props {
  onHome: () => void;
  showHome?: boolean;
}

export default function Header({ onHome, showHome }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 h-16 flex items-center px-6 border-b border-white/5"
      style={{ background: "rgba(8,12,24,0.85)", backdropFilter: "blur(24px)" }}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <button onClick={onHome} className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-[0_0_16px_rgba(14,165,233,0.5)]">
            <GraduationCap className="w-4.5 h-4.5 text-white" />
          </div>
          <span className="text-base font-bold text-white tracking-tight">
            Nova<span className="text-sky-400">Learn</span>
          </span>
        </button>

        <div className="flex items-center gap-4">
          {showHome && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onHome}
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
            >
              <Home className="w-4 h-4" />
              Home
            </motion.button>
          )}
          <div className="h-4 w-px bg-white/10" />
          <a
            href="https://amazing-souffle-111a7d.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-slate-400 hover:text-sky-400 transition-colors"
          >
            Made by Rohit V
          </a>
        </div>
      </div>
    </motion.header>
  );
}

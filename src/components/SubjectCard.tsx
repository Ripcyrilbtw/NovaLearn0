import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Subject } from "../data/subjects";
import SubjectIcon from "./SubjectIcon";

interface Props {
  subject: Subject;
  index: number;
  onClick: () => void;
}

export default function SubjectCard({ subject, index, onClick }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springConfig = { stiffness: 260, damping: 22 };
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-10, 10]), springConfig);
  const glowX = useTransform(rawX, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(rawY, [-0.5, 0.5], ["0%", "100%"]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current!.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.23, 1, 0.32, 1] }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onClick}
        className="relative cursor-pointer rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm overflow-hidden group"
      >
        {/* Dynamic glow spot */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) => `radial-gradient(circle at ${x} ${y}, ${subject.glowColor} 0%, transparent 60%)`
            ),
          }}
        />

        {/* Top gradient strip */}
        <div className={`h-1 w-full bg-gradient-to-r ${subject.gradient}`} />

        <div className="p-5 relative" style={{ transform: "translateZ(20px)" }}>
          {/* Icon */}
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${subject.gradient} mb-4 shadow-lg`}
               style={{ boxShadow: `0 0 20px ${subject.glowColor}` }}>
            <SubjectIcon name={subject.icon} className="w-6 h-6 text-white" />
          </div>

          <h3 className="text-base font-semibold text-white mb-1 leading-tight">{subject.name}</h3>
          <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">{subject.description}</p>

          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500">{subject.chapters.length} chapters</span>
            <span className="flex items-center gap-1 text-xs font-medium text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

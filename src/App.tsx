import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ParticleBackground from "./components/ParticleBackground";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SubjectPage from "./pages/SubjectPage";
import ContentPage from "./pages/ContentPage";
import { subjects } from "./data/subjects";

type View =
  | { type: "home" }
  | { type: "subject"; subjectId: string }
  | { type: "content"; subjectId: string; chapterId: string };

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

export default function App() {
  const [view, setView] = useState<View>({ type: "home" });

  const getSubject = (id: string) => subjects.find(s => s.id === id)!;

  const navigate = useCallback((subjectId: string, chapterId?: string) => {
    if (chapterId) {
      setView({ type: "content", subjectId, chapterId });
    } else {
      setView({ type: "subject", subjectId });
    }
  }, []);

  const isContent = view.type === "content";

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {!isContent && <ParticleBackground />}

      {/* Gradient orbs */}
      {!isContent && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-sky-600/10 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-500/8 blur-[120px]" />
        </div>
      )}

      <Header
        onHome={() => setView({ type: "home" })}
        showHome={view.type !== "home"}
      />

      <AnimatePresence mode="wait">
        {view.type === "home" && (
          <motion.div key="home" {...pageVariants}>
            <HomePage
              onSelectSubject={id => setView({ type: "subject", subjectId: id })}
              onNavigate={navigate}
            />
          </motion.div>
        )}

        {view.type === "subject" && (
          <motion.div key={`subject-${view.subjectId}`} {...pageVariants}>
            <SubjectPage
              subject={getSubject(view.subjectId)}
              onBack={() => setView({ type: "home" })}
              onSelectChapter={chapterId =>
                setView({ type: "content", subjectId: view.subjectId, chapterId })
              }
            />
          </motion.div>
        )}

        {view.type === "content" && (
          <motion.div
            key={`content-${view.subjectId}-${view.chapterId}`}
            {...pageVariants}
            className="h-screen overflow-hidden"
          >
            <ContentPage
              subject={getSubject(view.subjectId)}
              initialChapterId={view.chapterId}
              onBack={() => setView({ type: "subject", subjectId: view.subjectId })}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

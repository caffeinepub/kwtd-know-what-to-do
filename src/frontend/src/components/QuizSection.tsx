import type { Translations } from "@/i18n/translations";
import { Zap } from "lucide-react";
import { motion } from "motion/react";

interface QuizSectionProps {
  t: Translations;
  onStartQuiz: () => void;
}

export function QuizSection({ t, onStartQuiz }: QuizSectionProps) {
  return (
    <section id="zasoby" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.497_0.196_264.4)] to-[oklch(0.43_0.22_264)] rounded-3xl p-10 sm:p-14 text-center shadow-card"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-3">
                {t.quizSectionTitle}
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto">
                {t.quizSectionDesc}
              </p>
            </div>
            <button
              type="button"
              onClick={onStartQuiz}
              className="px-10 py-4 rounded-full bg-brand-amber text-white font-bold text-base hover:bg-brand-amber-hover active:scale-95 transition-all shadow-lg"
              data-ocid="quiz.open_modal_button"
            >
              {t.quizStart}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import type { Translations } from "@/i18n/translations";
import { CheckCircle2, XCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { WishlistForm } from "./WishlistForm";

interface QuizModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  t: Translations;
}

const CORRECT_ANSWERS = [1, 2, 1, 2, 1];

function getQuestions(t: Translations) {
  return [
    { text: t.q1Text, options: [t.q1A, t.q1B, t.q1C, t.q1D] },
    { text: t.q2Text, options: [t.q2A, t.q2B, t.q2C, t.q2D] },
    { text: t.q3Text, options: [t.q3A, t.q3B, t.q3C, t.q3D] },
    { text: t.q4Text, options: [t.q4A, t.q4B, t.q4C, t.q4D] },
    { text: t.q5Text, options: [t.q5A, t.q5B, t.q5C, t.q5D] },
  ];
}

function getLevel(
  score: number,
  t: Translations,
): { label: string; color: string; emoji: string } {
  if (score <= 1)
    return {
      label: t.quizLevelBeginner,
      color: "text-red-500",
      emoji: "\uD83C\uDF31",
    };
  if (score === 2)
    return {
      label: t.quizLevelIntermediate,
      color: "text-amber-500",
      emoji: "\uD83D\uDCCB",
    };
  if (score <= 4)
    return {
      label: t.quizLevelReady,
      color: "text-blue-500",
      emoji: "\uD83D\uDEE1\uFE0F",
    };
  return { label: t.quizLevelExpert, color: "text-green-500", emoji: "\u2B50" };
}

const OPTION_LABELS = ["A", "B", "C", "D"];

export function QuizModal({ open, onOpenChange, t }: QuizModalProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([
    null,
    null,
    null,
    null,
    null,
  ]);
  const [selected, setSelected] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [direction, setDirection] = useState(1);

  const questions = getQuestions(t);
  const questionIndex = step - 1;
  const progress = step === 0 ? 0 : (step / (questions.length + 1)) * 100;
  const score = answers.filter((a, i) => a === CORRECT_ANSWERS[i]).length;

  const handleClose = (v: boolean) => {
    if (!v) {
      setTimeout(() => {
        setStep(0);
        setAnswers([null, null, null, null, null]);
        setSelected(null);
        setShowAnswer(false);
      }, 300);
    }
    onOpenChange(v);
  };

  const handleStart = () => {
    setDirection(1);
    setStep(1);
    setSelected(null);
    setShowAnswer(false);
  };

  const handleSelect = (optIndex: number) => {
    if (showAnswer) return;
    setSelected(optIndex);
    setShowAnswer(true);
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    setDirection(1);
    if (step < questions.length) {
      setStep(step + 1);
      setSelected(null);
      setShowAnswer(false);
    } else {
      setStep(questions.length + 1);
    }
  };

  const handleBack = () => {
    if (step <= 1) return;
    setDirection(-1);
    setStep(step - 1);
    setSelected(answers[step - 2]);
    setShowAnswer(answers[step - 2] !== null);
  };

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: -dir * 40 }),
  };

  const level = getLevel(score, t);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="sm:max-w-xl rounded-2xl p-0 overflow-hidden"
        data-ocid="quiz.dialog"
      >
        {step > 0 && step <= questions.length && (
          <div className="px-0">
            <Progress value={progress} className="h-1 rounded-none" />
          </div>
        )}

        <div className="p-6 sm:p-8">
          <AnimatePresence mode="wait" custom={direction}>
            {step === 0 && (
              <motion.div
                key="start"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="text-center flex flex-col items-center gap-5"
                data-ocid="quiz.panel"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-blue flex items-center justify-center text-3xl">
                  &#x1F6E1;&#xFE0F;
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-display text-foreground mb-2">
                    {t.quizSectionTitle}
                  </h2>
                  <p className="text-muted-foreground">{t.quizSectionDesc}</p>
                </div>
                <button
                  type="button"
                  onClick={handleStart}
                  className="px-8 py-3.5 rounded-full bg-brand-blue text-white font-bold text-base hover:bg-brand-blue-hover active:scale-95 transition-all"
                  data-ocid="quiz.primary_button"
                >
                  {t.quizStart}
                </button>
              </motion.div>
            )}

            {step >= 1 && step <= questions.length && (
              <motion.div
                key={`q-${step}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex flex-col gap-5"
                data-ocid="quiz.panel"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    {t.quizQuestion} {step} {t.quizOf} {questions.length}
                  </span>
                  <span className="text-sm font-bold text-brand-blue">
                    {Math.round(progress)}%
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-foreground leading-snug">
                  {questions[questionIndex].text}
                </h3>

                <div className="flex flex-col gap-3">
                  {questions[questionIndex].options.map((opt, oi) => {
                    const isCorrect = oi === CORRECT_ANSWERS[questionIndex];
                    const isSelected = selected === oi;
                    let optClass =
                      "w-full text-left px-4 py-3.5 rounded-xl border-2 text-sm font-medium transition-all flex items-center gap-3 ";
                    if (showAnswer) {
                      if (isCorrect)
                        optClass +=
                          "border-green-500 bg-green-50 text-green-700";
                      else if (isSelected)
                        optClass += "border-red-400 bg-red-50 text-red-600";
                      else
                        optClass +=
                          "border-border bg-white text-muted-foreground opacity-60";
                    } else {
                      optClass +=
                        "border-border bg-white text-foreground hover:border-brand-blue hover:bg-blue-50 cursor-pointer";
                    }
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => handleSelect(oi)}
                        className={optClass}
                        disabled={showAnswer}
                        data-ocid={`quiz.item.${oi + 1}`}
                      >
                        <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center shrink-0 text-xs font-bold">
                          {OPTION_LABELS[oi]}
                        </span>
                        <span>{opt}</span>
                        {showAnswer && isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-green-500 ml-auto" />
                        )}
                        {showAnswer && isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4 text-red-400 ml-auto" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={step === 1}
                    className="px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition"
                    data-ocid="quiz.secondary_button"
                  >
                    {t.quizBack}
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={selected === null}
                    className="px-6 py-2.5 rounded-full bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blue-hover disabled:opacity-40 disabled:cursor-not-allowed transition"
                    data-ocid="quiz.primary_button"
                  >
                    {step === questions.length ? t.quizFinish : t.quizNext}
                  </button>
                </div>
              </motion.div>
            )}

            {step === questions.length + 1 && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-6 text-center"
                data-ocid="quiz.success_state"
              >
                <div className="text-5xl">{level.emoji}</div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {t.quizResult}
                  </p>
                  <p className="text-5xl font-extrabold font-display text-foreground">
                    {score}/{questions.length}
                  </p>
                  <p
                    className={`text-xl font-bold font-display mt-2 ${level.color}`}
                  >
                    {level.label}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t.quizScore}
                  </p>
                </div>

                <div className="w-full border-t border-border pt-6">
                  <p className="text-sm font-medium text-foreground mb-4">
                    {t.quizEmailPrompt}
                  </p>
                  <WishlistForm
                    t={{
                      ...t,
                      comingSoonEmailPlaceholder: t.quizEmailPlaceholder,
                      comingSoonSubmit: t.quizEmailSubmit,
                      comingSoonSuccess: t.quizEmailSuccess,
                      comingSoonSuccessDesc: t.quizEmailSuccessDesc,
                    }}
                    variant="compact"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}

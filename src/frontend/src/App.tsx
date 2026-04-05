import { ComingSoonModal } from "@/components/ComingSoonModal";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { Navbar } from "@/components/Navbar";
import { ProblemSection } from "@/components/ProblemSection";
import { QuizModal } from "@/components/QuizModal";
import { QuizSection } from "@/components/QuizSection";
import { Toaster } from "@/components/ui/sonner";
import { useMetaTags } from "@/hooks/useMetaTags";
import { detectLanguage, translations } from "@/i18n/translations";
import type { LanguageCode } from "@/i18n/translations";
import { useEffect, useState } from "react";

export default function App() {
  const [lang, setLang] = useState<LanguageCode>(() => detectLanguage());
  const [quizOpen, setQuizOpen] = useState(false);
  const [comingSoonOpen, setComingSoonOpen] = useState(false);

  const t = translations[lang];

  useMetaTags(lang);

  // Update html lang on change
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Toaster />

      <Navbar
        t={t}
        currentLang={lang}
        onLangChange={(l) => setLang(l)}
        onSignIn={() => setComingSoonOpen(true)}
        onSignUp={() => setComingSoonOpen(true)}
      />

      <main className="flex-1">
        <HeroSection t={t} onGetStarted={() => setQuizOpen(true)} />
        <ProblemSection t={t} />
        <HowItWorksSection t={t} />
        <QuizSection t={t} onStartQuiz={() => setQuizOpen(true)} />
        <FaqSection t={t} />
      </main>

      <Footer t={t} />

      <QuizModal open={quizOpen} onOpenChange={setQuizOpen} t={t} />
      <ComingSoonModal
        open={comingSoonOpen}
        onOpenChange={setComingSoonOpen}
        t={t}
      />
    </div>
  );
}

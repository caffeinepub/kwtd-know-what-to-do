import { ComingSoonModal } from "@/components/ComingSoonModal";
import { CookieBanner } from "@/components/CookieBanner";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { Navbar } from "@/components/Navbar";
import { PolicyModal } from "@/components/PolicyModal";
import { ProblemSection } from "@/components/ProblemSection";
import { QuizModal } from "@/components/QuizModal";
import { QuizSection } from "@/components/QuizSection";
import { TeamSection } from "@/components/TeamSection";
import { Toaster } from "@/components/ui/sonner";
import { gdprRodoPolicy, privacyPolicy, termsOfUse } from "@/data/policies";
import { useMetaTags } from "@/hooks/useMetaTags";
import { detectLanguage, translations } from "@/i18n/translations";
import type { LanguageCode } from "@/i18n/translations";
import { useEffect, useState } from "react";

export default function App() {
  const [lang, setLang] = useState<LanguageCode>(() => detectLanguage());
  const [quizOpen, setQuizOpen] = useState(false);
  const [comingSoonOpen, setComingSoonOpen] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);
  const [policyDoc, setPolicyDoc] = useState<{
    title: string;
    content: string;
  } | null>(null);

  const t = translations[lang];

  useMetaTags(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const openPolicy = (doc: { title: string; content: string }) => {
    setPolicyDoc(doc);
    setPolicyOpen(true);
  };

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
        <TeamSection t={t} />
        <FaqSection t={t} />
      </main>

      <Footer
        t={t}
        onOpenTerms={() => openPolicy(termsOfUse)}
        onOpenPrivacy={() => openPolicy(privacyPolicy)}
        onOpenGdpr={() => openPolicy(gdprRodoPolicy)}
      />

      <QuizModal open={quizOpen} onOpenChange={setQuizOpen} t={t} />
      <ComingSoonModal
        open={comingSoonOpen}
        onOpenChange={setComingSoonOpen}
        t={t}
      />
      {policyDoc && (
        <PolicyModal
          open={policyOpen}
          onOpenChange={setPolicyOpen}
          title={policyDoc.title}
          content={policyDoc.content}
        />
      )}

      <CookieBanner t={t} />
    </div>
  );
}

import type { Translations } from "@/i18n/translations";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const COOKIE_KEY = "kwtd_cookie_consent";

interface CookieBannerProps {
  t: Translations;
}

export function CookieBanner({ t }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cookie-banner"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
          aria-label="Cookie consent banner"
        >
          <div className="max-w-4xl mx-auto bg-[#0f1b2d] text-white rounded-2xl shadow-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white/80 leading-relaxed">
                {t.cookieBannerText}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handleDecline}
                className="px-5 py-2 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:border-white/40 hover:text-white transition-colors"
              >
                {t.cookieDecline}
              </button>
              <button
                type="button"
                onClick={handleAccept}
                className="px-5 py-2 rounded-full bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
              >
                {t.cookieAccept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

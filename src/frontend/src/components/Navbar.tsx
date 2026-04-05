import type { LanguageCode, Translations } from "@/i18n/translations";
import { translations } from "@/i18n/translations";
import { Globe, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface NavbarProps {
  t: Translations;
  currentLang: LanguageCode;
  onLangChange: (lang: LanguageCode) => void;
  onSignIn: () => void;
  onSignUp: () => void;
}

export function Navbar({
  t,
  currentLang,
  onLangChange,
  onSignIn,
  onSignUp,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.navAbout, href: "#o-nas" },
    { label: t.navHowItWorks, href: "#jak-to-dziala" },
    { label: t.navResources, href: "#zasoby" },
    { label: t.navFaq, href: "#faq" },
  ];

  const langList = Object.values(translations);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-border"
          : "bg-white"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 shrink-0"
            data-ocid="nav.link"
          >
            <img
              src="/assets/generated/kwtd-logo-v2-transparent.dim_280x70.png"
              alt="KWTD Logo"
              className="h-9 w-auto"
            />
          </a>

          {/* Desktop nav links */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors"
                data-ocid="nav.toggle"
                aria-expanded={langOpen}
                aria-label="Select language"
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="uppercase">{currentLang}</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-44 bg-white border border-border rounded-xl shadow-card overflow-hidden z-50 max-h-80 overflow-y-auto"
                    data-ocid="nav.dropdown_menu"
                  >
                    {langList.map((lang) => (
                      <button
                        type="button"
                        key={lang.langCode}
                        onClick={() => {
                          onLangChange(lang.langCode);
                          setLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors flex items-center justify-between ${
                          lang.langCode === currentLang
                            ? "text-brand-blue font-semibold"
                            : "text-foreground"
                        }`}
                      >
                        <span>{lang.langName}</span>
                        <span className="uppercase text-xs text-muted-foreground">
                          {lang.langCode}
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              {langOpen && (
                // biome-ignore lint/a11y/useKeyWithClickEvents: backdrop dismiss
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangOpen(false)}
                />
              )}
            </div>

            {/* Auth buttons - desktop */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={onSignIn}
                className="px-4 py-1.5 rounded-full border border-brand-blue text-brand-blue text-sm font-semibold hover:bg-blue-50 transition-colors"
                data-ocid="nav.sign_in.button"
              >
                {t.navSignIn}
              </button>
              <button
                type="button"
                onClick={onSignUp}
                className="px-4 py-1.5 rounded-full bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blue-hover transition-colors"
                data-ocid="nav.sign_up.button"
              >
                {t.navSignUp}
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="lg:hidden ml-1 p-2 rounded-lg hover:bg-muted transition"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border py-4 overflow-hidden"
            >
              <nav className="flex flex-col gap-1 mb-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-2 py-2.5 text-sm font-medium text-foreground hover:text-brand-blue transition-colors"
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    onSignIn();
                    setMenuOpen(false);
                  }}
                  className="flex-1 py-2.5 rounded-full border border-brand-blue text-brand-blue text-sm font-semibold hover:bg-blue-50 transition"
                  data-ocid="nav.sign_in.button"
                >
                  {t.navSignIn}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onSignUp();
                    setMenuOpen(false);
                  }}
                  className="flex-1 py-2.5 rounded-full bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blue-hover transition"
                  data-ocid="nav.sign_up.button"
                >
                  {t.navSignUp}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

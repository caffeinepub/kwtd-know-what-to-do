import type { Translations } from "@/i18n/translations";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

interface FooterProps {
  t: Translations;
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
  onOpenGdpr: () => void;
}

export function Footer({
  t,
  onOpenTerms,
  onOpenPrivacy,
  onOpenGdpr,
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="flex items-center gap-2">
              <img
                src="/assets/generated/kwtd-logo-v2-transparent.dim_280x70.png"
                alt="KWTD"
                className="h-8 w-auto brightness-0 invert"
              />
            </span>
            <p className="text-white/60 text-sm leading-relaxed max-w-64">
              {t.footerTagline}
            </p>
            <p className="text-white/40 text-xs">
              <a
                href="mailto:contact@kwtd.eu"
                className="hover:text-white/70 transition-colors"
              >
                contact@kwtd.eu
              </a>
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="text-white/60 text-sm hover:text-white transition-colors text-left"
              >
                {t.footerPrivacy}
              </button>
              <button
                type="button"
                onClick={onOpenTerms}
                className="text-white/60 text-sm hover:text-white transition-colors text-left"
              >
                {t.footerTerms}
              </button>
              <button
                type="button"
                onClick={onOpenGdpr}
                className="text-white/60 text-sm hover:text-white transition-colors text-left"
              >
                {t.footerGdpr}
              </button>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <SiX className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <SiLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {year} KWTD &mdash; Know What To Do. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            STOWARZYSZENIE SPLET &bull; KRS 0001196062 &bull; NIP 7011278984
          </p>
        </div>
      </div>
    </footer>
  );
}

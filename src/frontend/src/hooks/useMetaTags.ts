import type { LanguageCode } from "@/i18n/translations";
import { useEffect } from "react";

const META_DESCRIPTIONS: Record<string, string> = {
  pl: "KWTD – Know What To Do. Sprawdź swoją gotowość na sytuacje kryzysowe. Platforma edukacyjna dla bezpieczeństwa Twojej rodziny.",
  en: "KWTD – Know What To Do. Check your emergency preparedness. Educational platform for your family's safety.",
  de: "KWTD – Know What To Do. Testen Sie Ihre Notfallbereitschaft. Bildungsplattform für die Sicherheit Ihrer Familie.",
  fr: "KWTD – Know What To Do. Testez votre préparation aux urgences. Plateforme éducative pour la sécurité de votre famille.",
  default:
    "KWTD – Know What To Do. Check your emergency preparedness. Educational platform for your family's safety.",
};

const META_TITLES: Record<string, string> = {
  pl: "KWTD – Czy wiesz, co robić w nagłej sytuacji?",
  en: "KWTD – Do you know what to do in an emergency?",
  de: "KWTD – Wissen Sie, was im Notfall zu tun ist?",
  fr: "KWTD – Savez-vous quoi faire en cas d'urgence?",
  default: "KWTD – Know What To Do",
};

const OG_LOCALES: Record<string, string> = {
  pl: "pl_PL",
  en: "en_US",
  de: "de_DE",
  fr: "fr_FR",
  es: "es_ES",
  ru: "ru_RU",
  uk: "uk_UA",
  default: "pl_PL",
};

export function useMetaTags(lang: LanguageCode) {
  useEffect(() => {
    const title = META_TITLES[lang] || META_TITLES.default;
    const description = META_DESCRIPTIONS[lang] || META_DESCRIPTIONS.default;
    const ogLocale = OG_LOCALES[lang] || OG_LOCALES.default;
    const ogImage = `${window.location.origin}/assets/generated/kwtd-hero.dim_800x600.png`;

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Title
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(
        `meta[${attr}="${name}"]`,
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta(
      "keywords",
      "gotowość kryzysowa, bezpieczeństwo, ewakuacja, pierwsza pomoc, plan awaryjny, KWTD",
    );
    setMeta("author", "KWTD");

    // Open Graph
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:type", "website", true);
    setMeta("og:locale", ogLocale, true);
    setMeta("og:site_name", "KWTD", true);
    setMeta("og:url", window.location.href, true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);
  }, [lang]);
}

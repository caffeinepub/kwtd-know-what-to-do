export type LanguageCode =
  | "pl"
  | "en"
  | "de"
  | "fr"
  | "es"
  | "it"
  | "nl"
  | "cs"
  | "sk"
  | "hu"
  | "ro"
  | "bg"
  | "hr"
  | "sr"
  | "sl"
  | "et"
  | "lv"
  | "lt"
  | "fi"
  | "sv"
  | "da"
  | "no"
  | "ru"
  | "uk";

export interface Translations {
  langCode: LanguageCode;
  langName: string;
  // Nav
  navAbout: string;
  navHowItWorks: string;
  navResources: string;
  navFaq: string;
  navSignIn: string;
  navSignUp: string;
  // Hero
  heroTitle1: string;
  heroTitle2: string;
  heroSubtitle: string;
  heroGetStarted: string;
  heroPeopleJoined: string;
  heroPeopleJoinedLabel: string;
  // Problem section
  problemTitle: string;
  problemSubtitle: string;
  problemCard1Title: string;
  problemCard1Desc: string;
  problemCard2Title: string;
  problemCard2Desc: string;
  problemCard3Title: string;
  problemCard3Desc: string;
  problemCard4Title: string;
  problemCard4Desc: string;
  problemCard5Title: string;
  problemCard5Desc: string;
  problemCard6Title: string;
  problemCard6Desc: string;
  problemCard7Title: string;
  problemCard7Desc: string;
  problemCard8Title: string;
  problemCard8Desc: string;
  problemCard9Title: string;
  problemCard9Desc: string;
  problemCard10Title: string;
  problemCard10Desc: string;
  problemCard11Title: string;
  problemCard11Desc: string;
  problemCard12Title: string;
  problemCard12Desc: string;
  problemCard13Title: string;
  problemCard13Desc: string;
  problemCard14Title: string;
  problemCard14Desc: string;
  problemCard15Title: string;
  problemCard15Desc: string;
  problemCard16Title: string;
  problemCard16Desc: string;
  // How it works
  howTitle: string;
  howStep1Title: string;
  howStep1Desc: string;
  howStep2Title: string;
  howStep2Desc: string;
  howStep3Title: string;
  howStep3Desc: string;
  // Quiz
  quizSectionTitle: string;
  quizSectionDesc: string;
  quizStart: string;
  quizQuestion: string;
  quizOf: string;
  quizNext: string;
  quizBack: string;
  quizFinish: string;
  quizResult: string;
  quizScore: string;
  quizLevelBeginner: string;
  quizLevelIntermediate: string;
  quizLevelReady: string;
  quizLevelExpert: string;
  quizEmailPrompt: string;
  quizEmailPlaceholder: string;
  quizEmailSubmit: string;
  quizEmailSuccess: string;
  quizEmailSuccessDesc: string;
  // Questions
  q1Text: string;
  q1A: string;
  q1B: string;
  q1C: string;
  q1D: string;
  q2Text: string;
  q2A: string;
  q2B: string;
  q2C: string;
  q2D: string;
  q3Text: string;
  q3A: string;
  q3B: string;
  q3C: string;
  q3D: string;
  q4Text: string;
  q4A: string;
  q4B: string;
  q4C: string;
  q4D: string;
  q5Text: string;
  q5A: string;
  q5B: string;
  q5C: string;
  q5D: string;
  // Coming soon modal
  comingSoonTitle: string;
  comingSoonSubtitle: string;
  comingSoonEmailPlaceholder: string;
  comingSoonSubmit: string;
  comingSoonSuccess: string;
  comingSoonSuccessDesc: string;
  // FAQ
  faqTitle: string;
  faq1Q: string;
  faq1A: string;
  faq2Q: string;
  faq2A: string;
  faq3Q: string;
  faq3A: string;
  faq4Q: string;
  faq4A: string;
  faq5Q: string;
  faq5A: string;
  // Footer
  footerTagline: string;
  footerPrivacy: string;
  footerTerms: string;
  footerContact: string;
  footerBuiltWith: string;
}

const pl: Translations = {
  langCode: "pl",
  langName: "Polski",
  navAbout: "O nas",
  navHowItWorks: "Jak to działa",
  navResources: "Zasoby",
  navFaq: "FAQ",
  navSignIn: "Zaloguj się",
  navSignUp: "Zarejestruj się",
  heroTitle1: "Czy wiesz, co robić",
  heroTitle2: "w nagłej sytuacji?",
  heroSubtitle:
    "KWTD to inteligentna platforma przygotowania na wypadek kryzysu. Sprawdź swoją gotowość, zbuduj plan awaryjny i chroń swoją rodzinę.",
  heroGetStarted: "Zacznij teraz",
  heroPeopleJoined: "847",
  heroPeopleJoinedLabel: "osób już się przygotowuje",
  problemTitle: "Gotowość ratuje życie",
  problemSubtitle:
    "Większość ludzi nie jest gotowa na nagłe sytuacje. KWTD zmienia to.",
  problemCard1Title: "Powódź",
  problemCard1Desc:
    "Wiedz, kiedy ewakuować się i jak zabezpieczyć dobytek przed powodzią.",
  problemCard2Title: "Pożar",
  problemCard2Desc:
    "Naucz się reagować błyskawicznie i bezpiecznie ewakuować się z budynku.",
  problemCard3Title: "Trzęsienie ziemi",
  problemCard3Desc:
    "Dowiedz się, jak chronić się podczas wstrząsów i co robić po nich.",
  problemCard4Title: "Burza / Huragan",
  problemCard4Desc:
    "Chroń się przed ekstremalnymi wiatrami i zabezpiecz swój dom.",
  problemCard5Title: "Skażenie chemiczne",
  problemCard5Desc:
    "Poznaj zasady bezpieczeństwa przy wycieku substancji niebezpiecznych.",
  problemCard6Title: "Przerwa w zasilaniu",
  problemCard6Desc:
    "Przygotuj się na długie awarie prądu i zadbaj o podstawowe potrzeby.",
  problemCard7Title: "Osunięcie ziemi",
  problemCard7Desc:
    "Rozpoznaj sygnały ostrzegawcze i bezpiecznie opuść zagrożony teren.",
  problemCard8Title: "Pandemia",
  problemCard8Desc:
    "Naucz się chronić siebie i bliskich w czasie epidemii lub pandemii.",
  problemCard9Title: "Zagrożenie radiacyjne",
  problemCard9Desc:
    "Poznaj zasady postępowania w razie skażenia radioaktywnego.",
  problemCard10Title: "Cyberatak",
  problemCard10Desc:
    "Chroń swoje dane i wiedz, jak działać przy awarii infrastruktury.",
  problemCard11Title: "Wybuch",
  problemCard11Desc: "Naucz się reagować na wybuchy i zabezpiecz otoczenie.",
  problemCard12Title: "Susza / Fala upałów",
  problemCard12Desc:
    "Przygotuj zapasy wody i chroń się przed ekstremalnymi temperaturami.",
  problemCard13Title: "Działania wojenne",
  problemCard13Desc:
    "Wiedz, jak postępować podczas konfliktu zbrojnego: trasy ewakuacji, schronienie, łączność.",
  problemCard14Title: "Ataki hybrydowe",
  problemCard14Desc:
    "Rozumiej dezinformację, sabotaż infrastruktury i skoordynowane zagrożenia cybernetyczno-fizyczne.",
  problemCard15Title: "Panika w tłumie",
  problemCard15Desc:
    "Bezpiecznie poruszaj się podczas paniki zbiorowej i masowej ewakuacji. Unikaj zgniecenia.",
  problemCard16Title: "Ekstremalne upały / mróz",
  problemCard16Desc:
    "Przeżyj fale upałów i silne mrozy: objawy hipertermii, hipotermii i pierwsza pomoc.",
  howTitle: "Jak to działa?",
  howStep1Title: "Rozwiąż quiz",
  howStep1Desc:
    "Odpowiedz na 5 krótkich pytań, aby sprawdzić swoją obecną gotowość na sytuacje kryzysowe.",
  howStep2Title: "Poznaj swój wynik",
  howStep2Desc:
    "Otrzymaj spersonalizowany wynik gotowości wraz z konkretnymi wskazówkami do poprawy.",
  howStep3Title: "Bądź gotowy",
  howStep3Desc:
    "Korzystaj z aplikacji KWTD, aby stale poprawiać swój poziom przygotowania.",
  quizSectionTitle: "Sprawdź swoją gotowość",
  quizSectionDesc:
    "5 pytań. 3 minuty. Dowiedz się, jak jesteś przygotowany na sytuacje kryzysowe.",
  quizStart: "Rozpocznij quiz",
  quizQuestion: "Pytanie",
  quizOf: "z",
  quizNext: "Następne",
  quizBack: "Wróć",
  quizFinish: "Zakończ",
  quizResult: "Twój wynik:",
  quizScore: "poprawnych odpowiedzi",
  quizLevelBeginner: "Początkujący",
  quizLevelIntermediate: "Średnio zaawansowany",
  quizLevelReady: "Gotowy",
  quizLevelExpert: "Ekspert",
  quizEmailPrompt:
    "Zostaw swój email, aby dowiedzieć się jako pierwszy o starcie KWTD!",
  quizEmailPlaceholder: "twoj@email.com",
  quizEmailSubmit: "Powiadom mnie",
  quizEmailSuccess: "Dziękujemy!",
  quizEmailSuccessDesc: "Zostaniesz powiadomiony o starcie aplikacji KWTD.",
  q1Text: "Co zrobisz jako pierwsze, gdy usłyszysz syrenę alarmową?",
  q1A: "Ignoruję i czekam na więcej informacji",
  q1B: "Udaję się do bezpiecznego miejsca i słucham radia",
  q1C: "Dzwonię do sąsiadów",
  q1D: "Wychodzę na zewnątrz zobaczyć co się dzieje",
  q2Text: "Ile litrów wody na osobę powinieneś mieć w zapasie na 72 godziny?",
  q2A: "1 litr",
  q2B: "3 litry",
  q2C: "9 litrów",
  q2D: "15 litrów",
  q3Text: "Co powinno znaleźć się w torbie ewakuacyjnej?",
  q3A: "Tylko dokumenty i pieniądze",
  q3B: "Dokumenty, woda, jedzenie, apteczka, latarka, telefon",
  q3C: "Ubrania i elektronika",
  q3D: "Jedzenie na tydzień",
  q4Text: "Jak długo zdrowy człowiek może przeżyć bez jedzenia?",
  q4A: "24 godziny",
  q4B: "3 dni",
  q4C: "3 tygodnie",
  q4D: "3 miesiące",
  q5Text:
    "Gdzie znajdziesz informacje o punktach ewakuacyjnych w Twoim mieście?",
  q5A: "Nie wiem, skąd to wziąć",
  q5B: "W lokalnym urzędzie lub na stronie urzędu miasta",
  q5C: "Na Facebooku",
  q5D: "W telewizji",
  comingSoonTitle: "Kończymy rozwój aplikacji",
  comingSoonSubtitle:
    "Bądź pierwszy! Zostaw swój email i dowiedz się o starcie KWTD.",
  comingSoonEmailPlaceholder: "twoj@email.com",
  comingSoonSubmit: "Chcę być pierwszy!",
  comingSoonSuccess: "Super!",
  comingSoonSuccessDesc:
    "Jesteś na liście! Powiadomimy Cię, gdy KWTD będzie gotowe.",
  faqTitle: "Często zadawane pytania",
  faq1Q: "Czym jest KWTD?",
  faq1A:
    "KWTD (Know What To Do) to inteligentna platforma edukacyjna pomagająca ludziom przygotować się na sytuacje kryzysowe: pożary, powodzie, trzęsienia ziemi i inne zagrożenia.",
  faq2Q: "Kiedy aplikacja będzie dostępna?",
  faq2A:
    "Planujemy premierę w 2025 roku. Zostaw swój email, aby jako pierwszy dowiedzieć się o starcie.",
  faq3Q: "Czy KWTD będzie bezpłatne?",
  faq3A:
    "Podstawowe funkcje będą dostępne bezpłatnie. Planujemy też wersję Premium z rozszerzonymi planami awaryjnymi.",
  faq4Q: "Na jakich platformach będzie dostępne?",
  faq4A:
    "KWTD będzie dostępne jako aplikacja webowa oraz mobilna (iOS i Android).",
  faq5Q: "Czy moje dane są bezpieczne?",
  faq5A:
    "Tak. Twoje dane są szyfrowane i przechowywane bezpiecznie. Nie sprzedajemy danych osobowych.",
  footerTagline: "Wiedza ratuje życie.",
  footerPrivacy: "Polityka prywatności",
  footerTerms: "Regulamin",
  footerContact: "Kontakt",
  footerBuiltWith: "",
};

const en: Translations = {
  langCode: "en",
  langName: "English",
  navAbout: "About",
  navHowItWorks: "How It Works",
  navResources: "Resources",
  navFaq: "FAQ",
  navSignIn: "Sign In",
  navSignUp: "Sign Up",
  heroTitle1: "Do you know what to do",
  heroTitle2: "in an emergency?",
  heroSubtitle:
    "KWTD is the smart emergency preparedness platform. Check your readiness, build an emergency plan, and protect your family.",
  heroGetStarted: "Get Started",
  heroPeopleJoined: "847",
  heroPeopleJoinedLabel: "people already preparing",
  problemTitle: "Preparedness saves lives",
  problemSubtitle:
    "Most people are not ready for emergencies. KWTD changes that.",
  problemCard1Title: "Flood",
  problemCard1Desc:
    "Know when to evacuate and how to protect your belongings from flooding.",
  problemCard2Title: "Fire",
  problemCard2Desc:
    "Learn to react instantly and safely evacuate from buildings.",
  problemCard3Title: "Earthquake",
  problemCard3Desc:
    "Discover how to protect yourself during tremors and what to do after.",
  problemCard4Title: "Storm / Hurricane",
  problemCard4Desc: "Protect yourself from extreme winds and secure your home.",
  problemCard5Title: "Chemical Hazard",
  problemCard5Desc:
    "Learn safety rules for hazardous material leaks and spills.",
  problemCard6Title: "Power Outage",
  problemCard6Desc:
    "Prepare for extended blackouts and cover basic needs without electricity.",
  problemCard7Title: "Landslide",
  problemCard7Desc:
    "Recognize warning signs and safely leave landslide-prone areas.",
  problemCard8Title: "Pandemic",
  problemCard8Desc:
    "Learn how to protect yourself and loved ones during an epidemic or pandemic.",
  problemCard9Title: "Radiation Threat",
  problemCard9Desc:
    "Know the procedures to follow in case of radioactive contamination.",
  problemCard10Title: "Cyberattack",
  problemCard10Desc:
    "Protect your data and know how to act when critical infrastructure fails.",
  problemCard11Title: "Explosion",
  problemCard11Desc:
    "Learn how to respond to blasts and secure your surroundings.",
  problemCard12Title: "Drought / Heat Wave",
  problemCard12Desc:
    "Store water supplies and protect yourself from extreme temperatures.",
  problemCard13Title: "Military Action",
  problemCard13Desc:
    "Know how to act during armed conflict: evacuation routes, shelter, and communication protocols.",
  problemCard14Title: "Hybrid Attacks",
  problemCard14Desc:
    "Understand disinformation, infrastructure sabotage, and coordinated cyber-physical threats.",
  problemCard15Title: "Crowd Panic",
  problemCard15Desc:
    "Stay safe in stampedes and mass evacuation: how to navigate crowds and avoid crush injuries.",
  problemCard16Title: "Extreme Heat / Cold",
  problemCard16Desc:
    "Survive heatwaves and severe frost: signs of hyperthermia, hypothermia, and first aid steps.",
  howTitle: "How it works",
  howStep1Title: "Take the quiz",
  howStep1Desc:
    "Answer 5 short questions to check your current readiness for emergency situations.",
  howStep2Title: "Get your score",
  howStep2Desc:
    "Receive a personalized readiness score with specific tips for improvement.",
  howStep3Title: "Be prepared",
  howStep3Desc:
    "Use the KWTD app to continuously improve your level of preparedness.",
  quizSectionTitle: "Check your readiness",
  quizSectionDesc:
    "5 questions. 3 minutes. Find out how prepared you are for emergency situations.",
  quizStart: "Start Quiz",
  quizQuestion: "Question",
  quizOf: "of",
  quizNext: "Next",
  quizBack: "Back",
  quizFinish: "Finish",
  quizResult: "Your score:",
  quizScore: "correct answers",
  quizLevelBeginner: "Beginner",
  quizLevelIntermediate: "Intermediate",
  quizLevelReady: "Ready",
  quizLevelExpert: "Expert",
  quizEmailPrompt:
    "Leave your email to be the first to know when KWTD launches!",
  quizEmailPlaceholder: "your@email.com",
  quizEmailSubmit: "Notify Me",
  quizEmailSuccess: "Thank you!",
  quizEmailSuccessDesc: "You'll be notified when KWTD launches.",
  q1Text: "What is the first thing you do when you hear an alarm siren?",
  q1A: "Ignore it and wait for more info",
  q1B: "Go to a safe place and listen to the radio",
  q1C: "Call the neighbors",
  q1D: "Go outside to see what's happening",
  q2Text: "How many liters of water per person should you have for 72 hours?",
  q2A: "1 liter",
  q2B: "3 liters",
  q2C: "9 liters",
  q2D: "15 liters",
  q3Text: "What should be in an emergency go-bag?",
  q3A: "Only documents and money",
  q3B: "Documents, water, food, first aid kit, flashlight, phone",
  q3C: "Clothes and electronics",
  q3D: "A week's worth of food",
  q4Text: "How long can a healthy person survive without food?",
  q4A: "24 hours",
  q4B: "3 days",
  q4C: "3 weeks",
  q4D: "3 months",
  q5Text: "Where do you find information about evacuation points in your city?",
  q5A: "I don't know where to find that",
  q5B: "At the local office or on the city's website",
  q5C: "On Facebook",
  q5D: "On TV",
  comingSoonTitle: "We're finishing development",
  comingSoonSubtitle:
    "Be first! Leave your email and find out about KWTD's launch.",
  comingSoonEmailPlaceholder: "your@email.com",
  comingSoonSubmit: "I want to be first!",
  comingSoonSuccess: "Awesome!",
  comingSoonSuccessDesc:
    "You're on the list! We'll notify you when KWTD is ready.",
  faqTitle: "Frequently Asked Questions",
  faq1Q: "What is KWTD?",
  faq1A:
    "KWTD (Know What To Do) is a smart educational platform helping people prepare for emergency situations: fires, floods, earthquakes, and other threats.",
  faq2Q: "When will the app be available?",
  faq2A:
    "We're planning to launch in 2025. Leave your email to be the first to know.",
  faq3Q: "Will KWTD be free?",
  faq3A:
    "Basic features will be free. We also plan a Premium version with extended emergency plans.",
  faq4Q: "What platforms will it be available on?",
  faq4A:
    "KWTD will be available as a web app and mobile app (iOS and Android).",
  faq5Q: "Is my data safe?",
  faq5A:
    "Yes. Your data is encrypted and stored securely. We do not sell personal data.",
  footerTagline: "Knowledge saves lives.",
  footerPrivacy: "Privacy Policy",
  footerTerms: "Terms of Service",
  footerContact: "Contact",
  footerBuiltWith: "",
};

const de: Translations = {
  ...en,
  langCode: "de",
  langName: "Deutsch",
  navAbout: "Über uns",
  navHowItWorks: "So funktioniert's",
  navResources: "Ressourcen",
  navFaq: "FAQ",
  navSignIn: "Anmelden",
  navSignUp: "Registrieren",
  heroTitle1: "Wissen Sie, was zu tun ist",
  heroTitle2: "in einem Notfall?",
  heroSubtitle:
    "KWTD ist die intelligente Plattform für Notfallvorsorge. Überprüfen Sie Ihre Bereitschaft und schützen Sie Ihre Familie.",
  heroGetStarted: "Jetzt starten",
  heroPeopleJoinedLabel: "Personen bereiten sich vor",
  problemTitle: "Vorbereitung rettet Leben",
  problemSubtitle: "Die meisten Menschen sind nicht auf Notfälle vorbereitet.",
  problemCard4Title: "Sturm / Hurrikan",
  problemCard4Desc:
    "Schützen Sie sich vor extremen Winden und sichern Sie Ihr Haus.",
  problemCard5Title: "Chemische Gefahr",
  problemCard5Desc: "Sicherheitsregeln bei Gefahrstoffaustritten kennen.",
  problemCard6Title: "Stromausfall",
  problemCard6Desc: "Auf längere Stromausfälle vorbereitet sein.",
  problemCard7Title: "Erdrutsch",
  problemCard7Desc: "Warnsignale erkennen und Gefahrenzonen sicher verlassen.",
  problemCard8Title: "Pandemie",
  problemCard8Desc: "Sich und andere bei Epidemien schützen.",
  problemCard9Title: "Strahlengefahr",
  problemCard9Desc: "Verhalten bei radioaktiver Kontamination kennen.",
  problemCard10Title: "Cyberangriff",
  problemCard10Desc: "Daten schützen und bei Infrastrukturausfall handeln.",
  problemCard11Title: "Explosion",
  problemCard11Desc: "Auf Explosionen reagieren und die Umgebung sichern.",
  problemCard12Title: "Dürre / Hitzewelle",
  problemCard12Desc:
    "Wasservorräte anlegen und sich vor extremer Hitze schützen.",
  problemCard13Title: "Militärische Aktionen",
  problemCard13Desc:
    "Wissen, wie man in bewaffneten Konflikten handelt: Evakuierungsrouten, Schutzräume und Kommunikation.",
  problemCard14Title: "Hybridangriffe",
  problemCard14Desc:
    "Desinformation, Infrastruktursabotage und koordinierte Cyber-physische Bedrohungen verstehen.",
  problemCard15Title: "Massenpanik",
  problemCard15Desc:
    "Sicherheit bei Massenpanik und Evakuierung: Wie man sich in Menschenmassen bewegt.",
  problemCard16Title: "Extreme Hitze / Kälte",
  problemCard16Desc:
    "Hitzewellen und starke Fröste überleben: Anzeichen von Hyperthermie, Hypothermie und Erste Hilfe.",
  howTitle: "So funktioniert's",
  quizSectionTitle: "Testen Sie Ihre Bereitschaft",
  quizSectionDesc:
    "5 Fragen. 3 Minuten. Finden Sie heraus, wie vorbereitet Sie sind.",
  quizStart: "Quiz starten",
  comingSoonTitle: "Wir beenden die Entwicklung",
  comingSoonSubtitle: "Seien Sie der Erste! Hinterlassen Sie Ihre E-Mail.",
  comingSoonSubmit: "Ich möchte der Erste sein!",
  comingSoonEmailPlaceholder: "ihre@email.com",
  faqTitle: "Häufig gestellte Fragen",
  footerTagline: "Wissen rettet Leben.",
  footerPrivacy: "Datenschutz",
  footerTerms: "AGB",
};

const fr: Translations = {
  ...en,
  langCode: "fr",
  langName: "Français",
  navAbout: "À propos",
  navHowItWorks: "Comment ça marche",
  navResources: "Ressources",
  navFaq: "FAQ",
  navSignIn: "Connexion",
  navSignUp: "S'inscrire",
  heroTitle1: "Savez-vous quoi faire",
  heroTitle2: "en cas d'urgence?",
  heroSubtitle:
    "KWTD est la plateforme intelligente de préparation aux urgences. Vérifiez votre état de préparation et protégez votre famille.",
  heroGetStarted: "Commencer",
  heroPeopleJoinedLabel: "personnes déjà préparées",
  problemTitle: "La préparation sauve des vies",
  problemSubtitle: "La plupart des gens ne sont pas prêts pour les urgences.",
  problemCard4Title: "Tempête / Ouragan",
  problemCard4Desc:
    "Protégez-vous des vents extrêmes et sécurisez votre domicile.",
  problemCard5Title: "Danger chimique",
  problemCard5Desc:
    "Connaître les règles de sécurité en cas de fuite de matières dangereuses.",
  problemCard6Title: "Panne de courant",
  problemCard6Desc:
    "Se préparer aux coupures prolongées et couvrir les besoins essentiels.",
  problemCard7Title: "Glissement de terrain",
  problemCard7Desc:
    "Reconnaître les signes avant-coureurs et quitter les zones à risque.",
  problemCard8Title: "Pandémie",
  problemCard8Desc: "Se protéger et protéger ses proches lors d'une épidémie.",
  problemCard9Title: "Menace radiologique",
  problemCard9Desc:
    "Connaître les procédures en cas de contamination radioactive.",
  problemCard10Title: "Cyberattaque",
  problemCard10Desc:
    "Protéger ses données face aux défaillances d'infrastructures.",
  problemCard11Title: "Explosion",
  problemCard11Desc: "Réagir aux explosions et sécuriser les alentours.",
  problemCard12Title: "Sécheresse / Canicule",
  problemCard12Desc:
    "Stocker de l'eau et se protéger des températures extrêmes.",
  problemCard13Title: "Actions militaires",
  problemCard13Desc:
    "Savoir comment agir lors d'un conflit armé: routes d'évacuation, abris et protocoles de communication.",
  problemCard14Title: "Attaques hybrides",
  problemCard14Desc:
    "Comprendre la désinformation, le sabotage des infrastructures et les menaces cyber-physiques coordonnées.",
  problemCard15Title: "Panique de masse",
  problemCard15Desc:
    "Rester en sécurité lors de bousculades et d'évacuations massives: comment naviguer dans les foules.",
  problemCard16Title: "Chaleur / froid extrême",
  problemCard16Desc:
    "Survivre aux vagues de chaleur et aux fortes gelées: signes d'hyperthermie, d'hypothermie et premiers secours.",
  howTitle: "Comment ça marche",
  quizSectionTitle: "Testez votre préparation",
  quizSectionDesc:
    "5 questions. 3 minutes. Découvrez à quel point vous êtes préparé.",
  quizStart: "Commencer le quiz",
  comingSoonTitle: "Nous terminons le développement",
  comingSoonSubtitle: "Soyez le premier! Laissez votre email.",
  comingSoonSubmit: "Je veux être le premier!",
  comingSoonEmailPlaceholder: "votre@email.com",
  faqTitle: "Questions fréquentes",
  footerTagline: "La connaissance sauve des vies.",
  footerPrivacy: "Politique de confidentialité",
  footerTerms: "Conditions d'utilisation",
};

const es: Translations = {
  ...en,
  langCode: "es",
  langName: "Español",
  navAbout: "Sobre nosotros",
  navHowItWorks: "Cómo funciona",
  navResources: "Recursos",
  navFaq: "FAQ",
  navSignIn: "Iniciar sesión",
  navSignUp: "Registrarse",
  heroTitle1: "¿Sabes qué hacer",
  heroTitle2: "en una emergencia?",
  heroSubtitle:
    "KWTD es la plataforma inteligente de preparación para emergencias. Comprueba tu preparación y protege a tu familia.",
  heroGetStarted: "Empezar",
  heroPeopleJoinedLabel: "personas ya preparándose",
  problemTitle: "La preparación salva vidas",
  problemSubtitle: "La mayoría de la gente no está lista para emergencias.",
  problemCard4Title: "Tormenta / Huracán",
  problemCard4Desc: "Protégete de vientos extremos y asegura tu hogar.",
  problemCard5Title: "Peligro químico",
  problemCard5Desc:
    "Aprende las reglas de seguridad ante fugas de sustancias peligrosas.",
  problemCard6Title: "Corte de electricidad",
  problemCard6Desc:
    "Prepárate para apagones prolongados y cubre necesidades básicas.",
  problemCard7Title: "Deslizamiento de tierra",
  problemCard7Desc:
    "Reconoce señales de advertencia y abandona zonas de riesgo.",
  problemCard8Title: "Pandemia",
  problemCard8Desc:
    "Protégete a ti y a tus seres queridos durante una epidemia.",
  problemCard9Title: "Amenaza radiológica",
  problemCard9Desc: "Conoce los procedimientos ante contaminación radiactiva.",
  problemCard10Title: "Ciberataque",
  problemCard10Desc:
    "Protege tus datos ante fallos de infraestructura crítica.",
  problemCard11Title: "Explosión",
  problemCard11Desc:
    "Aprende a reaccionar ante explosiones y asegura el entorno.",
  problemCard12Title: "Sequía / Ola de calor",
  problemCard12Desc: "Almacena agua y protégete de temperaturas extremas.",
  problemCard13Title: "Acciones militares",
  problemCard13Desc:
    "Saber cómo actuar durante un conflicto armado: rutas de evacuación, refugios y protocolos de comunicación.",
  problemCard14Title: "Ataques híbridos",
  problemCard14Desc:
    "Comprender la desinformación, el sabotaje de infraestructuras y las amenazas ciberfísicas coordinadas.",
  problemCard15Title: "Pánico masivo",
  problemCard15Desc:
    "Mantenerse seguro en estampidas y evacuaciones masivas: cómo navegar entre multitudes.",
  problemCard16Title: "Calor / frío extremo",
  problemCard16Desc:
    "Sobrevivir olas de calor y heladas intensas: signos de hipertermia, hipotermia y primeros auxilios.",
  howTitle: "Cómo funciona",
  quizSectionTitle: "Comprueba tu preparación",
  quizSectionDesc: "5 preguntas. 3 minutos. Descubre qué tan preparado estás.",
  quizStart: "Iniciar quiz",
  comingSoonTitle: "Estamos terminando el desarrollo",
  comingSoonSubtitle: "¡Sé el primero! Deja tu email.",
  comingSoonSubmit: "¡Quiero ser el primero!",
  comingSoonEmailPlaceholder: "tu@email.com",
  faqTitle: "Preguntas frecuentes",
  footerTagline: "El conocimiento salva vidas.",
  footerPrivacy: "Política de privacidad",
  footerTerms: "Términos de servicio",
};

const ru: Translations = {
  ...en,
  langCode: "ru",
  langName: "Русский",
  navAbout: "О нас",
  navHowItWorks: "Как это работает",
  navResources: "Ресурсы",
  navFaq: "FAQ",
  navSignIn: "Войти",
  navSignUp: "Зарегистрироваться",
  heroTitle1: "Знаете ли вы, что делать",
  heroTitle2: "в чрезвычайной ситуации?",
  heroSubtitle:
    "KWTD — умная платформа готовности к ЧС. Проверьте свою готовность, создайте план и защитите свою семью.",
  heroGetStarted: "Начать",
  heroPeopleJoinedLabel: "человек уже готовится",
  problemTitle: "Готовность спасает жизни",
  problemSubtitle: "Большинство людей не готово к экстренным ситуациям.",
  problemCard1Title: "Наводнение",
  problemCard1Desc: "Знайте, когда эвакуироваться и как защитить имущество.",
  problemCard2Title: "Пожар",
  problemCard2Desc:
    "Научитесь мгновенно реагировать и безопасно эвакуироваться.",
  problemCard3Title: "Землетрясение",
  problemCard3Desc:
    "Узнайте, как защититься во время толчков и что делать после.",
  problemCard4Title: "Шторм / Ураган",
  problemCard4Desc: "Защититесь от экстремальных ветров и укрепите жильё.",
  problemCard5Title: "Химическая угроза",
  problemCard5Desc: "Изучите правила безопасности при утечке опасных веществ.",
  problemCard6Title: "Отключение электричества",
  problemCard6Desc: "Подготовьтесь к длительным перебоям электроснабжения.",
  problemCard7Title: "Оползень",
  problemCard7Desc:
    "Распознайте предупреждающие признаки и покиньте опасную зону.",
  problemCard8Title: "Пандемия",
  problemCard8Desc: "Защитите себя и близких во время эпидемии или пандемии.",
  problemCard9Title: "Радиационная угроза",
  problemCard9Desc: "Знайте порядок действий при радиоактивном заражении.",
  problemCard10Title: "Кибератака",
  problemCard10Desc:
    "Защитите данные и знайте, как действовать при сбое инфраструктуры.",
  problemCard11Title: "Взрыв",
  problemCard11Desc: "Научитесь реагировать на взрывы и обезопасить окружение.",
  problemCard12Title: "Засуха / Жара",
  problemCard12Desc: "Запасите воду и защититесь от экстремальной жары.",
  problemCard13Title: "Военные действия",
  problemCard13Desc:
    "Знайте, как действовать во время вооружённого конфликта: маршруты эвакуации, укрытия и связь.",
  problemCard14Title: "Гибридные атаки",
  problemCard14Desc:
    "Понимайте дезинформацию, саботаж инфраструктуры и скоординированные киберфизические угрозы.",
  problemCard15Title: "Паника в толпе",
  problemCard15Desc:
    "Безопасность при давке и массовой эвакуации: как двигаться в толпе и избежать травм.",
  problemCard16Title: "Экстремальная жара / холод",
  problemCard16Desc:
    "Пережить волны жары и сильные морозы: признаки гипертермии, гипотермии и первая помощь.",
  howTitle: "Как это работает",
  howStep1Title: "Пройди квиз",
  howStep1Desc: "Ответь на 5 коротких вопросов и проверь свою готовность.",
  howStep2Title: "Узнай свой результат",
  howStep2Desc: "Получи персональный балл готовности с конкретными советами.",
  howStep3Title: "Будь готов",
  howStep3Desc:
    "Используй приложение KWTD для постоянного улучшения готовности.",
  quizSectionTitle: "Проверь свою готовность",
  quizSectionDesc: "5 вопросов. 3 минуты. Узнай, насколько ты готов к ЧС.",
  quizStart: "Начать квиз",
  quizQuestion: "Вопрос",
  quizOf: "из",
  quizNext: "Далее",
  quizBack: "Назад",
  quizFinish: "Завершить",
  quizResult: "Ваш результат:",
  quizScore: "правильных ответов",
  quizLevelBeginner: "Начинающий",
  quizLevelIntermediate: "Средний уровень",
  quizLevelReady: "Готов",
  quizLevelExpert: "Эксперт",
  quizEmailPrompt: "Оставь email, чтобы первым узнать о запуске KWTD!",
  quizEmailPlaceholder: "ваш@email.com",
  quizEmailSubmit: "Уведомить меня",
  quizEmailSuccess: "Спасибо!",
  quizEmailSuccessDesc: "Вы узнаете о запуске KWTD первым.",
  q1Text: "Что сделаешь первым, когда услышишь сирену тревоги?",
  q1A: "Проигнорирую и буду ждать",
  q1B: "Укроюсь в безопасном месте и включу радио",
  q1C: "Позвоню соседям",
  q1D: "Выйду на улицу посмотреть",
  q2Text: "Сколько литров воды на человека нужно запасти на 72 часа?",
  q2A: "1 литр",
  q2B: "3 литра",
  q2C: "9 литров",
  q2D: "15 литров",
  q3Text: "Что должно быть в эвакуационной сумке?",
  q3A: "Только документы и деньги",
  q3B: "Документы, вода, еда, аптечка, фонарик, телефон",
  q3C: "Одежда и электроника",
  q3D: "Еда на неделю",
  q4Text: "Сколько может прожить здоровый человек без еды?",
  q4A: "24 часа",
  q4B: "3 дня",
  q4C: "3 недели",
  q4D: "3 месяца",
  q5Text: "Где найти информацию о пунктах эвакуации?",
  q5A: "Не знаю, где искать",
  q5B: "В местных органах власти или на сайте города",
  q5C: "В социальных сетях",
  q5D: "По телевизору",
  comingSoonTitle: "Мы завершаем разработку",
  comingSoonSubtitle: "Будь первым! Оставь email и узнай о запуске KWTD.",
  comingSoonEmailPlaceholder: "ваш@email.com",
  comingSoonSubmit: "Хочу быть первым!",
  comingSoonSuccess: "Отлично!",
  comingSoonSuccessDesc:
    "Ты в списке! Мы уведомим тебя, когда KWTD будет готово.",
  faqTitle: "Часто задаваемые вопросы",
  faq1Q: "Что такое KWTD?",
  faq1A:
    "KWTD (Know What To Do) — умная образовательная платформа для подготовки к ЧС.",
  faq2Q: "Когда будет доступно приложение?",
  faq2A: "Планируем запуск в 2025 году. Оставьте email, чтобы узнать первым.",
  faq3Q: "KWTD будет бесплатным?",
  faq3A: "Базовые функции будут бесплатными. Планируем Premium версию.",
  faq4Q: "На каких платформах будет доступно?",
  faq4A:
    "KWTD будет доступен как веб-приложение и мобильное приложение (iOS и Android).",
  faq5Q: "Мои данные в безопасности?",
  faq5A:
    "Да. Ваши данные зашифрованы и хранятся безопасно. Мы не продаём персональные данные.",
  footerTagline: "Знания спасают жизни.",
  footerPrivacy: "Политика конфиденциальности",
  footerTerms: "Условия использования",
  footerContact: "Контакт",
  footerBuiltWith: "",
};

const uk: Translations = {
  ...en,
  langCode: "uk",
  langName: "Українська",
  navAbout: "Про нас",
  navHowItWorks: "Як це працює",
  navResources: "Ресурси",
  navFaq: "FAQ",
  navSignIn: "Увійти",
  navSignUp: "Зареєструватися",
  heroTitle1: "Чи знаєте ви, що робити",
  heroTitle2: "у надзвичайній ситуації?",
  heroSubtitle:
    "KWTD — розумна платформа готовності до НС. Перевірте свою готовність, створіть план і захистіть свою родину.",
  heroGetStarted: "Розпочати",
  heroPeopleJoinedLabel: "людей вже готується",
  problemTitle: "Готовність рятує життя",
  problemSubtitle: "Більшість людей не готова до надзвичайних ситуацій.",
  problemCard1Title: "Повінь",
  problemCard1Desc: "Знайте, коли евакуюватися і як захистити своє майно.",
  problemCard2Title: "Пожежа",
  problemCard2Desc: "Навчіться миттєво реагувати та безпечно евакуюватися.",
  problemCard3Title: "Землетрус",
  problemCard3Desc:
    "Дізнайтеся, як захиститися під час поштовхів і що робити після.",
  problemCard4Title: "Шторм / Ураган",
  problemCard4Desc:
    "Захистіться від екстремальних вітрів і зміцніть своє житло.",
  problemCard5Title: "Хімічна загроза",
  problemCard5Desc: "Вивчіть правила безпеки при витоку небезпечних речовин.",
  problemCard6Title: "Відключення електрики",
  problemCard6Desc: "Підготуйтеся до тривалих перебоїв у електропостачанні.",
  problemCard7Title: "Зсув",
  problemCard7Desc:
    "Розпізнайте попереджувальні ознаки та покиньте небезпечну зону.",
  problemCard8Title: "Пандемія",
  problemCard8Desc: "Захистіть себе і близьких під час епідемії чи пандемії.",
  problemCard9Title: "Радіаційна загроза",
  problemCard9Desc: "Знайте порядок дій при радіоактивному забрудненні.",
  problemCard10Title: "Кібератака",
  problemCard10Desc:
    "Захистіть дані і знайте, як діяти при збої інфраструктури.",
  problemCard11Title: "Вибух",
  problemCard11Desc: "Навчіться реагувати на вибухи та убезпечити оточення.",
  problemCard12Title: "Посуха / Спека",
  problemCard12Desc: "Запасіть воду та захистіться від екстремальної спеки.",
  problemCard13Title: "Військові дії",
  problemCard13Desc:
    "Знайте, як діяти під час збройного конфлікту: маршрути евакуації, укриття та зв'язок.",
  problemCard14Title: "Гібридні атаки",
  problemCard14Desc:
    "Розумійте дезінформацію, саботаж інфраструктури та скоординовані кіберфізичні загрози.",
  problemCard15Title: "Паніка в натовпі",
  problemCard15Desc:
    "Безпека під час тиснини та масової евакуації: як рухатися в натовпі та уникнути травм.",
  problemCard16Title: "Екстремальна спека / холод",
  problemCard16Desc:
    "Пережити хвилі спеки та сильні морози: ознаки гіпертермії, гіпотермії та перша допомога.",
  howTitle: "Як це працює",
  howStep1Title: "Пройди квіз",
  howStep1Desc:
    "Дай відповідь на 5 коротких запитань і перевір свою готовність.",
  howStep2Title: "Дізнайся свій результат",
  howStep2Desc: "Отримай персональний бал готовності з конкретними порадами.",
  howStep3Title: "Будь готовий",
  howStep3Desc:
    "Використовуй застосунок KWTD для постійного покращення готовності.",
  quizSectionTitle: "Перевір свою готовність",
  quizSectionDesc:
    "5 запитань. 3 хвилини. Дізнайся, наскільки ти готовий до НС.",
  quizStart: "Розпочати квіз",
  quizQuestion: "Запитання",
  quizOf: "з",
  quizNext: "Далі",
  quizBack: "Назад",
  quizFinish: "Завершити",
  quizResult: "Ваш результат:",
  quizScore: "правильних відповідей",
  quizLevelBeginner: "Початківець",
  quizLevelIntermediate: "Середній рівень",
  quizLevelReady: "Готовий",
  quizLevelExpert: "Експерт",
  quizEmailPrompt: "Залиш email, щоб першим дізнатися про запуск KWTD!",
  quizEmailPlaceholder: "твій@email.com",
  quizEmailSubmit: "Сповістити мене",
  quizEmailSuccess: "Дякуємо!",
  quizEmailSuccessDesc: "Ти дізнаєшся про запуск KWTD першим.",
  q1Text: "Що зробиш першим, коли почуєш сирену тривоги?",
  q1A: "Проігнорую і почекаю",
  q1B: "Піду в безпечне місце та слухатиму радіо",
  q1C: "Подзвоню сусідам",
  q1D: "Вийду на вулицю подивитися",
  q2Text: "Скільки літрів води на людину треба мати в запасі на 72 години?",
  q2A: "1 літр",
  q2B: "3 літри",
  q2C: "9 літрів",
  q2D: "15 літрів",
  q3Text: "Що має бути в евакуаційній сумці?",
  q3A: "Тільки документи та гроші",
  q3B: "Документи, вода, їжа, аптечка, ліхтарик, телефон",
  q3C: "Одяг та електроніка",
  q3D: "Їжа на тиждень",
  q4Text: "Скільки може прожити здорова людина без їжі?",
  q4A: "24 години",
  q4B: "3 дні",
  q4C: "3 тижні",
  q4D: "3 місяці",
  q5Text: "Де знайти інформацію про пункти евакуації?",
  q5A: "Не знаю, де шукати",
  q5B: "У місцевих органах влади або на сайті міста",
  q5C: "У соціальних мережах",
  q5D: "По телебаченню",
  comingSoonTitle: "Ми завершуємо розробку",
  comingSoonSubtitle: "Будь першим! Залиш email і дізнайся про запуск KWTD.",
  comingSoonEmailPlaceholder: "твій@email.com",
  comingSoonSubmit: "Хочу бути першим!",
  comingSoonSuccess: "Чудово!",
  comingSoonSuccessDesc:
    "Ти в списку! Ми сповістимо тебе, коли KWTD буде готовий.",
  faqTitle: "Часті запитання",
  faq1Q: "Що таке KWTD?",
  faq1A:
    "KWTD (Know What To Do) — розумна освітня платформа для підготовки до НС.",
  faq2Q: "Коли буде доступний застосунок?",
  faq2A: "Плануємо запуск у 2025 році. Залиш email, щоб дізнатися першим.",
  faq3Q: "KWTD буде безкоштовним?",
  faq3A: "Базові функції будуть безкоштовними. Плануємо Premium версію.",
  faq4Q: "На яких платформах буде доступно?",
  faq4A:
    "KWTD буде доступний як веб-застосунок і мобільний застосунок (iOS і Android).",
  faq5Q: "Мої дані в безпеці?",
  faq5A:
    "Так. Ваші дані зашифровані та зберігаються безпечно. Ми не продаємо персональні дані.",
  footerTagline: "Знання рятують життя.",
  footerPrivacy: "Політика конфіденційності",
  footerTerms: "Умови використання",
  footerContact: "Контакт",
  footerBuiltWith: "",
};

const it: Translations = {
  langCode: "it",
  langName: "Italiano",
  navAbout: "Chi siamo",
  navHowItWorks: "Come funziona",
  navResources: "Risorse",
  navFaq: "FAQ",
  navSignIn: "Accedi",
  navSignUp: "Registrati",
  heroTitle1: "Sai cosa fare",
  heroTitle2: "in un'emergenza?",
  heroSubtitle:
    "KWTD è la piattaforma intelligente per la preparazione alle emergenze. Verifica la tua prontezza e proteggi la tua famiglia.",
  heroGetStarted: "Inizia ora",
  heroPeopleJoined: "847",
  heroPeopleJoinedLabel: "persone già preparate",
  problemTitle: "La preparazione salva vite",
  problemSubtitle:
    "La maggior parte delle persone non è pronta per le emergenze. KWTD cambia questo.",
  problemCard1Title: "Alluvione",
  problemCard1Desc:
    "Sapere quando evacuare e come proteggere i propri beni dall'alluvione.",
  problemCard2Title: "Incendio",
  problemCard2Desc:
    "Imparare a reagire immediatamente ed evacuare in sicurezza dagli edifici.",
  problemCard3Title: "Terremoto",
  problemCard3Desc:
    "Scoprire come proteggersi durante le scosse e cosa fare dopo.",
  problemCard4Title: "Tempesta / Uragano",
  problemCard4Desc:
    "Proteggersi dai venti estremi e mettere in sicurezza la propria casa.",
  problemCard5Title: "Pericolo chimico",
  problemCard5Desc:
    "Conoscere le norme di sicurezza per perdite di materiali pericolosi.",
  problemCard6Title: "Blackout",
  problemCard6Desc:
    "Prepararsi a blackout prolungati e soddisfare i bisogni di base.",
  problemCard7Title: "Frana",
  problemCard7Desc:
    "Riconoscere i segnali di allerta e lasciare in sicurezza le zone a rischio.",
  problemCard8Title: "Pandemia",
  problemCard8Desc:
    "Imparare a proteggere sé stessi e i propri cari durante un'epidemia.",
  problemCard9Title: "Minaccia radiologica",
  problemCard9Desc:
    "Conoscere le procedure in caso di contaminazione radioattiva.",
  problemCard10Title: "Cyberattacco",
  problemCard10Desc:
    "Proteggere i dati e sapere come agire in caso di guasto delle infrastrutture.",
  problemCard11Title: "Esplosione",
  problemCard11Desc:
    "Imparare a rispondere alle esplosioni e mettere in sicurezza l'area.",
  problemCard12Title: "Siccità / Ondata di calore",
  problemCard12Desc: "Stoccare acqua e proteggersi dalle temperature estreme.",
  problemCard13Title: "Azioni militari",
  problemCard13Desc:
    "Sapere come agire durante un conflitto armato: percorsi di evacuazione, rifugio e comunicazioni.",
  problemCard14Title: "Attacchi ibridi",
  problemCard14Desc:
    "Comprendere la disinformazione, il sabotaggio delle infrastrutture e le minacce cyber-fisiche coordinate.",
  problemCard15Title: "Panico di massa",
  problemCard15Desc:
    "Rimanere al sicuro durante fughe di massa ed evacuazioni: come navigare le folle.",
  problemCard16Title: "Caldo / freddo estremo",
  problemCard16Desc:
    "Sopravvivere a ondate di calore e gelo severo: segni di ipertermia, ipotermia e pronto soccorso.",
  howTitle: "Come funziona",
  howStep1Title: "Fai il quiz",
  howStep1Desc:
    "Rispondi a 5 brevi domande per verificare la tua attuale prontezza alle emergenze.",
  howStep2Title: "Ottieni il tuo punteggio",
  howStep2Desc:
    "Ricevi un punteggio personalizzato con suggerimenti specifici per migliorare.",
  howStep3Title: "Sii preparato",
  howStep3Desc:
    "Usa l'app KWTD per migliorare continuamente il tuo livello di preparazione.",
  quizSectionTitle: "Verifica la tua prontezza",
  quizSectionDesc: "5 domande. 3 minuti. Scopri quanto sei preparato.",
  quizStart: "Inizia il quiz",
  quizQuestion: "Domanda",
  quizOf: "di",
  quizNext: "Avanti",
  quizBack: "Indietro",
  quizFinish: "Fine",
  quizResult: "Il tuo punteggio:",
  quizScore: "risposte corrette",
  quizLevelBeginner: "Principiante",
  quizLevelIntermediate: "Intermedio",
  quizLevelReady: "Pronto",
  quizLevelExpert: "Esperto",
  quizEmailPrompt:
    "Lascia la tua email per sapere per primo del lancio di KWTD!",
  quizEmailPlaceholder: "tuo@email.com",
  quizEmailSubmit: "Avvisami",
  quizEmailSuccess: "Grazie!",
  quizEmailSuccessDesc: "Sarai avvisato quando KWTD sarà disponibile.",
  q1Text: "Cosa fai per prima cosa quando senti la sirena d'allarme?",
  q1A: "La ignoro e aspetto",
  q1B: "Vado in un posto sicuro e ascolto la radio",
  q1C: "Chiamo i vicini",
  q1D: "Esco per vedere cosa succede",
  q2Text: "Quanti litri di acqua per persona dovresti avere per 72 ore?",
  q2A: "1 litro",
  q2B: "3 litri",
  q2C: "9 litri",
  q2D: "15 litri",
  q3Text: "Cosa dovrebbe contenere una borsa da evacuazione?",
  q3A: "Solo documenti e denaro",
  q3B: "Documenti, acqua, cibo, kit di pronto soccorso, torcia, telefono",
  q3C: "Vestiti ed elettronica",
  q3D: "Cibo per una settimana",
  q4Text: "Quanto può sopravvivere una persona sana senza cibo?",
  q4A: "24 ore",
  q4B: "3 giorni",
  q4C: "3 settimane",
  q4D: "3 mesi",
  q5Text: "Dove trovi informazioni sui punti di evacuazione nella tua città?",
  q5A: "Non so dove trovarlo",
  q5B: "All'ufficio locale o sul sito del comune",
  q5C: "Su Facebook",
  q5D: "In TV",
  comingSoonTitle: "Stiamo terminando lo sviluppo",
  comingSoonSubtitle:
    "Sii il primo! Lascia la tua email e scopri il lancio di KWTD.",
  comingSoonEmailPlaceholder: "tuo@email.com",
  comingSoonSubmit: "Voglio essere il primo!",
  comingSoonSuccess: "Ottimo!",
  comingSoonSuccessDesc:
    "Sei nella lista! Ti avviseremo quando KWTD sarà pronto.",
  faqTitle: "Domande frequenti",
  faq1Q: "Cos'è KWTD?",
  faq1A:
    "KWTD (Know What To Do) è una piattaforma educativa intelligente per prepararsi alle emergenze.",
  faq2Q: "Quando sarà disponibile l'app?",
  faq2A:
    "Prevediamo il lancio nel 2025. Lascia la tua email per sapere per primo.",
  faq3Q: "KWTD sarà gratuito?",
  faq3A:
    "Le funzionalità di base saranno gratuite. Pianifichiamo anche una versione Premium.",
  faq4Q: "Su quali piattaforme sarà disponibile?",
  faq4A: "KWTD sarà disponibile come app web e app mobile (iOS e Android).",
  faq5Q: "I miei dati sono al sicuro?",
  faq5A:
    "Sì. I tuoi dati sono crittografati e archiviati in modo sicuro. Non vendiamo dati personali.",
  footerTagline: "La conoscenza salva vite.",
  footerPrivacy: "Privacy Policy",
  footerTerms: "Termini di servizio",
  footerContact: "Contatto",
  footerBuiltWith: "",
};

const nl: Translations = {
  langCode: "nl",
  langName: "Nederlands",
  navAbout: "Over ons",
  navHowItWorks: "Hoe het werkt",
  navResources: "Bronnen",
  navFaq: "FAQ",
  navSignIn: "Inloggen",
  navSignUp: "Registreren",
  heroTitle1: "Weet u wat u moet doen",
  heroTitle2: "in een noodsituatie?",
  heroSubtitle:
    "KWTD is het slimme platform voor noodvoorbereiding. Controleer uw paraatheid en bescherm uw gezin.",
  heroGetStarted: "Begin nu",
  heroPeopleJoined: "847",
  heroPeopleJoinedLabel: "mensen bereiden zich al voor",
  problemTitle: "Voorbereiding redt levens",
  problemSubtitle:
    "De meeste mensen zijn niet voorbereid op noodsituaties. KWTD verandert dat.",
  problemCard1Title: "Overstroming",
  problemCard1Desc:
    "Weet wanneer u moet evacueren en hoe u eigendommen beschermt.",
  problemCard2Title: "Brand",
  problemCard2Desc: "Leer snel reageren en veilig evacueren uit gebouwen.",
  problemCard3Title: "Aardbeving",
  problemCard3Desc:
    "Ontdek hoe u zichzelf beschermt tijdens schokken en wat u daarna doet.",
  problemCard4Title: "Storm / Orkaan",
  problemCard4Desc: "Bescherm uzelf tegen extreme winden en beveilig uw huis.",
  problemCard5Title: "Chemisch gevaar",
  problemCard5Desc:
    "Leer veiligheidsregels bij lekken van gevaarlijke stoffen.",
  problemCard6Title: "Stroomstoring",
  problemCard6Desc:
    "Bereid u voor op langdurige stroomstoringen en dek basisbehoeften.",
  problemCard7Title: "Aardverschuiving",
  problemCard7Desc:
    "Herken waarschuwingssignalen en verlaat risicogebieden veilig.",
  problemCard8Title: "Pandemie",
  problemCard8Desc:
    "Leer uzelf en uw naasten te beschermen tijdens een epidemie.",
  problemCard9Title: "Stralingsgevaar",
  problemCard9Desc: "Ken de procedures bij radioactieve besmetting.",
  problemCard10Title: "Cyberaanval",
  problemCard10Desc:
    "Bescherm uw gegevens en weet hoe te handelen bij infrastructuuruitval.",
  problemCard11Title: "Explosie",
  problemCard11Desc: "Leer reageren op explosies en beveilig de omgeving.",
  problemCard12Title: "Droogte / Hittegolf",
  problemCard12Desc:
    "Sla water op en bescherm uzelf tegen extreme temperaturen.",
  problemCard13Title: "Militaire acties",
  problemCard13Desc:
    "Weet hoe te handelen tijdens gewapende conflicten: evacuatieroutes, schuilplaatsen en communicatie.",
  problemCard14Title: "Hybride aanvallen",
  problemCard14Desc:
    "Begrijp desinformatie, saboteren van infrastructuur en gecoördineerde cyber-fysieke dreigingen.",
  problemCard15Title: "Massapaniek",
  problemCard15Desc:
    "Veilig blijven bij massapaniek en grote evacuaties: hoe door mensenmassa's te navigeren.",
  problemCard16Title: "Extreme hitte / kou",
  problemCard16Desc:
    "Overleven bij hittegolven en zware vorst: tekenen van hyperthermie, onderkoeling en eerste hulp.",
  howTitle: "Hoe het werkt",
  howStep1Title: "Doe de quiz",
  howStep1Desc:
    "Beantwoord 5 korte vragen om uw huidige paraatheid voor noodsituaties te controleren.",
  howStep2Title: "Krijg uw score",
  howStep2Desc:
    "Ontvang een gepersonaliseerde paraatheidscore met specifieke verbeteringstips.",
  howStep3Title: "Wees voorbereid",
  howStep3Desc: "Gebruik de KWTD-app om uw paraatheid continu te verbeteren.",
  quizSectionTitle: "Controleer uw paraatheid",
  quizSectionDesc: "5 vragen. 3 minuten. Ontdek hoe voorbereid u bent.",
  quizStart: "Start quiz",
  quizQuestion: "Vraag",
  quizOf: "van",
  quizNext: "Volgende",
  quizBack: "Terug",
  quizFinish: "Afronden",
  quizResult: "Uw score:",
  quizScore: "juiste antwoorden",
  quizLevelBeginner: "Beginner",
  quizLevelIntermediate: "Gemiddeld",
  quizLevelReady: "Klaar",
  quizLevelExpert: "Expert",
  quizEmailPrompt:
    "Laat uw e-mail achter om als eerste te horen over de lancering van KWTD!",
  quizEmailPlaceholder: "uw@email.com",
  quizEmailSubmit: "Meld mij aan",
  quizEmailSuccess: "Bedankt!",
  quizEmailSuccessDesc:
    "U wordt op de hoogte gesteld wanneer KWTD beschikbaar is.",
  q1Text: "Wat doet u als eerste wanneer u een alarmsirene hoort?",
  q1A: "Ik negeer het en wacht",
  q1B: "Ik ga naar een veilige plek en luister naar de radio",
  q1C: "Ik bel de buren",
  q1D: "Ik ga buiten kijken wat er aan de hand is",
  q2Text: "Hoeveel liter water per persoon heeft u nodig voor 72 uur?",
  q2A: "1 liter",
  q2B: "3 liter",
  q2C: "9 liter",
  q2D: "15 liter",
  q3Text: "Wat moet er in een noodpakket zitten?",
  q3A: "Alleen documenten en geld",
  q3B: "Documenten, water, voedsel, EHBO-kit, zaklamp, telefoon",
  q3C: "Kleding en elektronica",
  q3D: "Een week voedsel",
  q4Text: "Hoe lang kan een gezond persoon zonder voedsel overleven?",
  q4A: "24 uur",
  q4B: "3 dagen",
  q4C: "3 weken",
  q4D: "3 maanden",
  q5Text: "Waar vindt u informatie over evacuatiepunten in uw stad?",
  q5A: "Ik weet niet waar ik dat kan vinden",
  q5B: "Bij het gemeentehuis of op de gemeentelijke website",
  q5C: "Op Facebook",
  q5D: "Op TV",
  comingSoonTitle: "We ronden de ontwikkeling af",
  comingSoonSubtitle:
    "Wees de eerste! Laat uw e-mail achter en ontdek de lancering van KWTD.",
  comingSoonEmailPlaceholder: "uw@email.com",
  comingSoonSubmit: "Ik wil de eerste zijn!",
  comingSoonSuccess: "Geweldig!",
  comingSoonSuccessDesc:
    "U staat op de lijst! We laten u weten wanneer KWTD klaar is.",
  faqTitle: "Veelgestelde vragen",
  faq1Q: "Wat is KWTD?",
  faq1A:
    "KWTD (Know What To Do) is een slim educatief platform dat mensen helpt zich voor te bereiden op noodsituaties.",
  faq2Q: "Wanneer is de app beschikbaar?",
  faq2A:
    "We plannen de lancering in 2025. Laat uw e-mail achter om als eerste te horen.",
  faq3Q: "Is KWTD gratis?",
  faq3A: "Basisfuncties zijn gratis. We plannen ook een Premium-versie.",
  faq4Q: "Op welke platforms is het beschikbaar?",
  faq4A: "KWTD is beschikbaar als web-app en mobiele app (iOS en Android).",
  faq5Q: "Zijn mijn gegevens veilig?",
  faq5A:
    "Ja. Uw gegevens zijn versleuteld en veilig opgeslagen. We verkopen geen persoonlijke gegevens.",
  footerTagline: "Kennis redt levens.",
  footerPrivacy: "Privacybeleid",
  footerTerms: "Servicevoorwaarden",
  footerContact: "Contact",
  footerBuiltWith: "",
};

const cs: Translations = {
  langCode: "cs",
  langName: "Čeština",
  navAbout: "O nás",
  navHowItWorks: "Jak to funguje",
  navResources: "Zdroje",
  navFaq: "FAQ",
  navSignIn: "Přihlásit se",
  navSignUp: "Registrovat se",
  heroTitle1: "Víte, co dělat",
  heroTitle2: "v nouzové situaci?",
  heroSubtitle:
    "KWTD je inteligentní platforma pro nouzovou připravenost. Zkontrolujte svou připravenost a chraňte svou rodinu.",
  heroGetStarted: "Začít nyní",
  heroPeopleJoined: "847",
  heroPeopleJoinedLabel: "lidí se již připravuje",
  problemTitle: "Připravenost zachraňuje životy",
  problemSubtitle:
    "Většina lidí není připravena na nouzové situace. KWTD to mění.",
  problemCard1Title: "Povodeň",
  problemCard1Desc: "Vědět, kdy evakuovat a jak chránit majetek před povodní.",
  problemCard2Title: "Požár",
  problemCard2Desc: "Naučte se okamžitě reagovat a bezpečně evakuovat budovy.",
  problemCard3Title: "Zemětřesení",
  problemCard3Desc: "Zjistěte, jak se chránit během otřesů a co dělat potom.",
  problemCard4Title: "Bouře / Hurikán",
  problemCard4Desc: "Chraňte se před extrémními větry a zabezpečte svůj dům.",
  problemCard5Title: "Chemické nebezpečí",
  problemCard5Desc:
    "Naučte se bezpečnostní pravidla při únicích nebezpečných látek.",
  problemCard6Title: "Výpadek proudu",
  problemCard6Desc:
    "Připravte se na dlouhodobé výpadky elektřiny a pokryjte základní potřeby.",
  problemCard7Title: "Sesuv půdy",
  problemCard7Desc:
    "Rozpoznejte varovné signály a bezpečně opusťte ohrožené oblasti.",
  problemCard8Title: "Pandemie",
  problemCard8Desc:
    "Naučte se chránit sebe a blízké během epidemie nebo pandemie.",
  problemCard9Title: "Radiační hrozba",
  problemCard9Desc: "Znáte postupy při radioaktivní kontaminaci.",
  problemCard10Title: "Kyberútok",
  problemCard10Desc:
    "Chraňte svá data a vědět, jak jednat při výpadku infrastruktury.",
  problemCard11Title: "Exploze",
  problemCard11Desc: "Naučte se reagovat na výbuchy a zabezpečit okolí.",
  problemCard12Title: "Sucho / Vlna veder",
  problemCard12Desc:
    "Skladujte zásoby vody a chraňte se před extrémními teplotami.",
  problemCard13Title: "Válečné akce",
  problemCard13Desc:
    "Vědět, jak jednat za ozbrojeného konfliktu: evakuační trasy, úkryty a komunikace.",
  problemCard14Title: "Hybridní útoky",
  problemCard14Desc:
    "Pochopit dezinformace, sabotáže infrastruktury a koordinované kyber-fyzické hrozby.",
  problemCard15Title: "Masová panika",
  problemCard15Desc:
    "Bezpečnost při masové panice a evakuaci: jak se pohybovat v davu a vyhnout se zraněním.",
  problemCard16Title: "Extrémní horko / mráz",
  problemCard16Desc:
    "Přežít vlny veder a silné mrazy: příznaky hypertermie, hypotermie a první pomoc.",
  howTitle: "Jak to funguje",
  howStep1Title: "Vyplňte kvíz",
  howStep1Desc:
    "Odpovězte na 5 krátkých otázek a zkontrolujte svou připravenost.",
  howStep2Title: "Získejte skóre",
  howStep2Desc: "Obdržíte osobní skóre připravenosti s konkrétními tipy.",
  howStep3Title: "Buďte připraveni",
  howStep3Desc:
    "Používejte aplikaci KWTD pro neustálé zlepšování připravenosti.",
  quizSectionTitle: "Zkontrolujte svou připravenost",
  quizSectionDesc: "5 otázek. 3 minuty. Zjistěte, jak jste připraveni.",
  quizStart: "Spustit kvíz",
  quizQuestion: "Otázka",
  quizOf: "z",
  quizNext: "Další",
  quizBack: "Zpět",
  quizFinish: "Dokončit",
  quizResult: "Vaše skóre:",
  quizScore: "správných odpovědí",
  quizLevelBeginner: "Začátečník",
  quizLevelIntermediate: "Středně pokročilý",
  quizLevelReady: "Připraven",
  quizLevelExpert: "Expert",
  quizEmailPrompt:
    "Zanechte svůj e-mail a buďte první, kdo se dozví o spuštění KWTD!",
  quizEmailPlaceholder: "vas@email.cz",
  quizEmailSubmit: "Upozorněte mě",
  quizEmailSuccess: "Děkujeme!",
  quizEmailSuccessDesc: "Budete upozorněni, když se KWTD spustí.",
  q1Text: "Co uděláte jako první, když uslyšíte poplachovou sirénu?",
  q1A: "Ignoruji ji a čekám",
  q1B: "Jdu na bezpečné místo a poslouchám rádio",
  q1C: "Volám sousedům",
  q1D: "Jdu ven podívat se, co se děje",
  q2Text: "Kolik litrů vody na osobu byste měli mít na 72 hodin?",
  q2A: "1 litr",
  q2B: "3 litry",
  q2C: "9 litrů",
  q2D: "15 litrů",
  q3Text: "Co by mělo být v nouzovém batohu?",
  q3A: "Jen doklady a peníze",
  q3B: "Doklady, voda, jídlo, lékárnička, svítilna, telefon",
  q3C: "Oblečení a elektronika",
  q3D: "Zásoby jídla na týden",
  q4Text: "Jak dlouho může zdravý člověk přežít bez jídla?",
  q4A: "24 hodin",
  q4B: "3 dny",
  q4C: "3 týdny",
  q4D: "3 měsíce",
  q5Text: "Kde najdete informace o evakuačních místech ve vašem městě?",
  q5A: "Nevím, kde to hledat",
  q5B: "Na místním úřadě nebo na webu města",
  q5C: "Na Facebooku",
  q5D: "V televizi",
  comingSoonTitle: "Dokončujeme vývoj",
  comingSoonSubtitle:
    "Buďte první! Zanechte svůj e-mail a dozvíte se o spuštění KWTD.",
  comingSoonEmailPlaceholder: "vas@email.cz",
  comingSoonSubmit: "Chci být první!",
  comingSoonSuccess: "Výborně!",
  comingSoonSuccessDesc:
    "Jste na seznamu! Upozorníme vás, až bude KWTD připraven.",
  faqTitle: "Časté dotazy",
  faq1Q: "Co je KWTD?",
  faq1A:
    "KWTD (Know What To Do) je inteligentní vzdělávací platforma pro přípravu na nouzové situace.",
  faq2Q: "Kdy bude aplikace dostupná?",
  faq2A:
    "Plánujeme spuštění v roce 2025. Zanechte svůj e-mail, abyste se dozvěděli jako první.",
  faq3Q: "Bude KWTD zdarma?",
  faq3A: "Základní funkce budou zdarma. Plánujeme také verzi Premium.",
  faq4Q: "Na jakých platformách bude dostupná?",
  faq4A:
    "KWTD bude dostupné jako webová aplikace a mobilní aplikace (iOS a Android).",
  faq5Q: "Jsou moje data v bezpečí?",
  faq5A:
    "Ano. Vaše data jsou šifrována a bezpečně uložena. Osobní data neprodáváme.",
  footerTagline: "Znalosti zachraňují životy.",
  footerPrivacy: "Zásady ochrany osobních údajů",
  footerTerms: "Podmínky služby",
  footerContact: "Kontakt",
  footerBuiltWith: "",
};

const sk: Translations = {
  langCode: "sk",
  langName: "Slovenčina",
  navAbout: "O nás",
  navHowItWorks: "Ako to funguje",
  navResources: "Zdroje",
  navFaq: "FAQ",
  navSignIn: "Prihlásiť sa",
  navSignUp: "Registrovať sa",
  heroTitle1: "Viete, čo robiť",
  heroTitle2: "v núdzovej situácii?",
  heroSubtitle:
    "KWTD je inteligentná platforma pre núdzovú pripravenosť. Skontrolujte svoju pripravenosť a chráňte svoju rodinu.",
  heroGetStarted: "Začať teraz",
  heroPeopleJoined: "847",
  heroPeopleJoinedLabel: "ľudí sa už pripravuje",
  problemTitle: "Pripravenosť zachraňuje životy",
  problemSubtitle:
    "Väčšina ľudí nie je pripravená na núdzové situácie. KWTD to mení.",
  problemCard1Title: "Povodeň",
  problemCard1Desc:
    "Vedieť, kedy evakuovať a ako chrániť majetok pred povodňou.",
  problemCard2Title: "Požiar",
  problemCard2Desc: "Naučte sa okamžite reagovať a bezpečne evakuovať budovy.",
  problemCard3Title: "Zemetrasenie",
  problemCard3Desc: "Zistite, ako sa chrániť počas otrasov a čo robiť potom.",
  problemCard4Title: "Búrka / Hurikán",
  problemCard4Desc: "Chráňte sa pred extrémnym vetrom a zabezpečte svoj dom.",
  problemCard5Title: "Chemické nebezpečenstvo",
  problemCard5Desc:
    "Naučte sa bezpečnostné pravidlá pri úniku nebezpečných látok.",
  problemCard6Title: "Výpadok elektriny",
  problemCard6Desc:
    "Pripravte sa na dlhodobé výpadky elektriny a pokryjte základné potreby.",
  problemCard7Title: "Zosuv pôdy",
  problemCard7Desc:
    "Rozpoznajte varovné signály a bezpečne opustite ohrozené oblasti.",
  problemCard8Title: "Pandémia",
  problemCard8Desc:
    "Naučte sa chrániť seba a blízkych počas epidémie alebo pandémie.",
  problemCard9Title: "Radiačná hrozba",
  problemCard9Desc: "Poznajte postupy pri rádioaktívnej kontaminácii.",
  problemCard10Title: "Kyberútok",
  problemCard10Desc:
    "Chráňte svoje dáta a vedzte, ako konať pri výpadku infraštruktúry.",
  problemCard11Title: "Výbuch",
  problemCard11Desc: "Naučte sa reagovať na výbuchy a zabezpečiť okolie.",
  problemCard12Title: "Sucho / Vlna horúčav",
  problemCard12Desc:
    "Skladujte zásoby vody a chráňte sa pred extrémnymi teplotami.",
  problemCard13Title: "Vojenské akcie",
  problemCard13Desc:
    "Vedieť, ako konať počas ozbrojeného konfliktu: evakuačné trasy, úkryty a komunikácia.",
  problemCard14Title: "Hybridné útoky",
  problemCard14Desc:
    "Pochopiť dezinformácie, sabotáže infraštruktúry a koordinované kyberneticko-fyzické hrozby.",
  problemCard15Title: "Masová panika",
  problemCard15Desc:
    "Bezpečnosť pri masovej panike a evakuácii: pohyb v dave a predchádzanie zraneniam.",
  problemCard16Title: "Extrémne horúco / mráz",
  problemCard16Desc:
    "Prežiť vlny horúčav a silné mrazy: príznaky hypertermie, hypotermie a prvá pomoc.",
  howTitle: "Ako to funguje",
  howStep1Title: "Vyplňte kvíz",
  howStep1Desc:
    "Odpovedzte na 5 krátkych otázok a skontrolujte svoju pripravenosť.",
  howStep2Title: "Získajte skóre",
  howStep2Desc: "Získate osobné skóre pripravenosti s konkrétnymi tipmi.",
  howStep3Title: "Buďte pripravení",
  howStep3Desc:
    "Používajte aplikáciu KWTD na neustále zlepšovanie pripravenosti.",
  quizSectionTitle: "Skontrolujte svoju pripravenosť",
  quizSectionDesc: "5 otázok. 3 minúty. Zistite, ako ste pripravení.",
  quizStart: "Spustiť kvíz",
  quizQuestion: "Otázka",
  quizOf: "z",
  quizNext: "Ďalej",
  quizBack: "Späť",
  quizFinish: "Dokončiť",
  quizResult: "Vaše skóre:",
  quizScore: "správnych odpovedí",
  quizLevelBeginner: "Začiatočník",
  quizLevelIntermediate: "Stredne pokročilý",
  quizLevelReady: "Pripravený",
  quizLevelExpert: "Expert",
  quizEmailPrompt:
    "Zanechajte svoj e-mail a buďte prvý, kto sa dozvie o spustení KWTD!",
  quizEmailPlaceholder: "vas@email.sk",
  quizEmailSubmit: "Upozorniť ma",
  quizEmailSuccess: "Ďakujeme!",
  quizEmailSuccessDesc: "Budete upozornení, keď sa KWTD spustí.",
  q1Text: "Čo urobíte ako prvé, keď počujete poplachovú sirénu?",
  q1A: "Ignorujem ju a čakám",
  q1B: "Idem na bezpečné miesto a počúvam rádio",
  q1C: "Volám susedom",
  q1D: "Idem von pozrieť, čo sa deje",
  q2Text: "Koľko litrov vody na osobu by ste mali mať na 72 hodín?",
  q2A: "1 liter",
  q2B: "3 litre",
  q2C: "9 litrov",
  q2D: "15 litrov",
  q3Text: "Čo by malo byť v núdzovom batohu?",
  q3A: "Len doklady a peniaze",
  q3B: "Doklady, voda, jedlo, lekárnička, baterka, telefón",
  q3C: "Oblečenie a elektronika",
  q3D: "Zásoby jedla na týždeň",
  q4Text: "Ako dlho môže zdravý človek prežiť bez jedla?",
  q4A: "24 hodín",
  q4B: "3 dni",
  q4C: "3 týždne",
  q4D: "3 mesiace",
  q5Text: "Kde nájdete informácie o evakuačných miestach vo vašom meste?",
  q5A: "Neviem, kde to hľadať",
  q5B: "Na miestnom úrade alebo na webe mesta",
  q5C: "Na Facebooku",
  q5D: "V televízii",
  comingSoonTitle: "Dokončujeme vývoj",
  comingSoonSubtitle:
    "Buďte prvý! Zanechajte svoj e-mail a dozvíte sa o spustení KWTD.",
  comingSoonEmailPlaceholder: "vas@email.sk",
  comingSoonSubmit: "Chcem byť prvý!",
  comingSoonSuccess: "Výborne!",
  comingSoonSuccessDesc:
    "Ste na zozname! Upozorníme vás, keď bude KWTD pripravený.",
  faqTitle: "Časté otázky",
  faq1Q: "Čo je KWTD?",
  faq1A:
    "KWTD (Know What To Do) je inteligentná vzdelávacia platforma pre prípravu na núdzové situácie.",
  faq2Q: "Kedy bude aplikácia dostupná?",
  faq2A:
    "Plánujeme spustenie v roku 2025. Zanechajte svoj e-mail, aby ste sa dozvedeli ako prvý.",
  faq3Q: "Bude KWTD zadarmo?",
  faq3A: "Základné funkcie budú zadarmo. Plánujeme aj verziu Premium.",
  faq4Q: "Na akých platformách bude dostupná?",
  faq4A:
    "KWTD bude dostupné ako webová aplikácia a mobilná aplikácia (iOS a Android).",
  faq5Q: "Sú moje dáta v bezpečí?",
  faq5A:
    "Áno. Vaše dáta sú šifrované a bezpečne uložené. Osobné dáta nepredávame.",
  footerTagline: "Znalosti zachraňujú životy.",
  footerPrivacy: "Zásady ochrany osobných údajov",
  footerTerms: "Podmienky služby",
  footerContact: "Kontakt",
  footerBuiltWith: "",
};

const hu: Translations = {
  langCode: "hu",
  langName: "Magyar",
  navAbout: "Rólunk",
  navHowItWorks: "Hogyan működik",
  navResources: "Források",
  navFaq: "GYIK",
  navSignIn: "Bejelentkezés",
  navSignUp: "Regisztráció",
  heroTitle1: "Tudja, mit kell tennie",
  heroTitle2: "vészhelyzetben?",
  heroSubtitle:
    "A KWTD az intelligens vészhelyzeti felkészültségi platform. Ellenőrizze felkészültségét és védje meg családját.",
  heroGetStarted: "Kezdés",
  heroPeopleJoined: "847",
  heroPeopleJoinedLabel: "ember már felkészül",
  problemTitle: "A felkészültség életeket ment",
  problemSubtitle:
    "A legtöbb ember nincs felkészülve vészhelyzetekre. A KWTD ezen változtat.",
  problemCard1Title: "Árvíz",
  problemCard1Desc:
    "Tudja, mikor kell evakuálni és hogyan védje meg ingóságait az áradástól.",
  problemCard2Title: "Tűz",
  problemCard2Desc:
    "Tanulja meg azonnal reagálni és biztonságosan evakuálni az épületekből.",
  problemCard3Title: "Földrengés",
  problemCard3Desc:
    "Tudja meg, hogyan védekezzen a rengések alatt és mit tegyen utána.",
  problemCard4Title: "Vihar / Hurrikán",
  problemCard4Desc:
    "Védekezzen a szélsőséges szelek ellen és biztosítsa otthonát.",
  problemCard5Title: "Vegyi veszély",
  problemCard5Desc:
    "Ismerje a biztonsági szabályokat veszélyes anyagok kiszivárgása esetén.",
  problemCard6Title: "Áramkimaradás",
  problemCard6Desc:
    "Készüljön fel hosszabb áramkimaradásokra és fedezze az alapvető szükségleteket.",
  problemCard7Title: "Földcsuszamlás",
  problemCard7Desc:
    "Ismerje fel a figyelmeztető jeleket és biztonságosan hagyja el a veszélyes területet.",
  problemCard8Title: "Járvány",
  problemCard8Desc: "Tanulja meg megvédeni magát és szeretteit járvány idején.",
  problemCard9Title: "Sugárzási veszély",
  problemCard9Desc:
    "Ismerje a radioaktív szennyezés esetén követendő eljárásokat.",
  problemCard10Title: "Kibertámadás",
  problemCard10Desc:
    "Védje adatait és tudja, hogyan kell cselekedni az infrastruktúra meghibásodásakor.",
  problemCard11Title: "Robbanás",
  problemCard11Desc:
    "Tanulja meg, hogyan reagáljon robbanásokra és biztosítsa a környezetet.",
  problemCard12Title: "Aszály / Hőhullám",
  problemCard12Desc:
    "Tároljon vízkészleteket és védekezzen a szélsőséges hőmérséklet ellen.",
  problemCard13Title: "Katonai műveletek",
  problemCard13Desc:
    "Tudja, hogyan kell cselekedni fegyveres konfliktus esetén: evakuációs útvonalak, menedék, kommunikáció.",
  problemCard14Title: "Hibrid támadások",
  problemCard14Desc:
    "Megérteni a dezinformációt, az infrastruktúra szabotálását és a koordinált kibernetikai-fizikai fenyegetéseket.",
  problemCard15Title: "Tömegpánik",
  problemCard15Desc:
    "Biztonság tömegpánik és tömeges evakuáció esetén: navigálás tömegben és sérülések elkerülése.",
  problemCard16Title: "Extrém hőség / hideg",
  problemCard16Desc:
    "Hőhullámok és erős fagyok túlélése: hőguta, hipotermia jelei és elsősegélynyújtás.",
  howTitle: "Hogyan működik",
  howStep1Title: "Töltse ki a kvízt",
  howStep1Desc:
    "Válaszoljon 5 rövid kérdésre a jelenlegi felkészültség ellenőrzéséhez.",
  howStep2Title: "Kapja meg pontszámát",
  howStep2Desc:
    "Személyre szabott felkészültségi pontszámot kap konkrét tippekkel.",
  howStep3Title: "Legyen felkészült",
  howStep3Desc:
    "Használja a KWTD alkalmazást a felkészültség folyamatos javításához.",
  quizSectionTitle: "Ellenőrizze felkészültségét",
  quizSectionDesc: "5 kérdés. 3 perc. Derítse ki, mennyire van felkészülve.",
  quizStart: "Kvíz indítása",
  quizQuestion: "Kérdés",
  quizOf: "/",
  quizNext: "Következő",
  quizBack: "Vissza",
  quizFinish: "Befejezés",
  quizResult: "Az Ön pontszáma:",
  quizScore: "helyes válasz",
  quizLevelBeginner: "Kezdő",
  quizLevelIntermediate: "Középhaladó",
  quizLevelReady: "Felkészült",
  quizLevelExpert: "Szakértő",
  quizEmailPrompt:
    "Hagyja meg e-mail címét, hogy elsőként értesüljön a KWTD indulásáról!",
  quizEmailPlaceholder: "email@cim.hu",
  quizEmailSubmit: "Értesítsen",
  quizEmailSuccess: "Köszönjük!",
  quizEmailSuccessDesc: "Értesítjük, amikor a KWTD elindul.",
  q1Text: "Mit tesz először, amikor megszólal a riasztósziréna?",
  q1A: "Figyelmen kívül hagyom és várok",
  q1B: "Biztonságos helyre megyek és rádiót hallgatok",
  q1C: "Felhívom a szomszédokat",
  q1D: "Kimegyek megnézni mi történik",
  q2Text: "Hány liter vizet kellene személyenként tárolnia 72 órára?",
  q2A: "1 liter",
  q2B: "3 liter",
  q2C: "9 liter",
  q2D: "15 liter",
  q3Text: "Mi legyen a vészhelyzeti táskában?",
  q3A: "Csak iratok és pénz",
  q3B: "Iratok, víz, étel, elsősegély-készlet, zseblámpa, telefon",
  q3C: "Ruhák és elektronika",
  q3D: "Egyheti élelem",
  q4Text: "Meddig tud élni egy egészséges ember étel nélkül?",
  q4A: "24 óra",
  q4B: "3 nap",
  q4C: "3 hét",
  q4D: "3 hónap",
  q5Text: "Hol talál információt a városában lévő evakuációs pontokról?",
  q5A: "Nem tudom, hol keressem",
  q5B: "A helyi önkormányzatnál vagy a város weboldalán",
  q5C: "Facebookon",
  q5D: "Tévében",
  comingSoonTitle: "Befejezzük a fejlesztést",
  comingSoonSubtitle:
    "Legyen az első! Hagyja meg e-mail címét és értesüljön a KWTD indulásáról.",
  comingSoonEmailPlaceholder: "email@cim.hu",
  comingSoonSubmit: "Első akarok lenni!",
  comingSoonSuccess: "Nagyszerű!",
  comingSoonSuccessDesc:
    "Felkerült a listára! Értesítjük, amikor a KWTD készen áll.",
  faqTitle: "Gyakran ismételt kérdések",
  faq1Q: "Mi az a KWTD?",
  faq1A:
    "A KWTD (Know What To Do) egy intelligens oktatási platform vészhelyzetekre való felkészüléshez.",
  faq2Q: "Mikor lesz elérhető az alkalmazás?",
  faq2A:
    "2025-re tervezzük az indulást. Hagyja meg e-mail címét, hogy elsőként értesüljön.",
  faq3Q: "Ingyenes lesz a KWTD?",
  faq3A: "Az alapfunkciók ingyenesek lesznek. Prémium verziót is tervezünk.",
  faq4Q: "Milyen platformokon lesz elérhető?",
  faq4A:
    "A KWTD web alkalmazásként és mobil alkalmazásként (iOS és Android) lesz elérhető.",
  faq5Q: "Biztonságban vannak az adataim?",
  faq5A:
    "Igen. Adatai titkosítva és biztonságosan tárolva vannak. Személyes adatokat nem értékesítünk.",
  footerTagline: "A tudás életeket ment.",
  footerPrivacy: "Adatvédelmi irányelvek",
  footerTerms: "Szolgáltatási feltételek",
  footerContact: "Kapcsolat",
  footerBuiltWith: "",
};

const ro: Translations = {
  langCode: "ro",
  langName: "Română",
  navAbout: "Despre noi",
  navHowItWorks: "Cum funcționează",
  navResources: "Resurse",
  navFaq: "FAQ",
  navSignIn: "Autentificare",
  navSignUp: "Înregistrare",
  heroTitle1: "Știți ce să faceți",
  heroTitle2: "în caz de urgență?",
  heroSubtitle:
    "KWTD este platforma inteligentă de pregătire pentru urgențe. Verificați-vă gradul de pregătire și protejați-vă familia.",
  heroGetStarted: "Începeți acum",
  heroPeopleJoined: "847",
  heroPeopleJoinedLabel: "persoane se pregătesc deja",
  problemTitle: "Pregătirea salvează vieți",
  problemSubtitle:
    "Majoritatea oamenilor nu sunt pregătiți pentru urgențe. KWTD schimbă asta.",
  problemCard1Title: "Inundație",
  problemCard1Desc:
    "Știți când să evacuați și cum să vă protejați bunurile de inundații.",
  problemCard2Title: "Incendiu",
  problemCard2Desc:
    "Învățați să reacționați imediat și să evacuați clădirile în siguranță.",
  problemCard3Title: "Cutremur",
  problemCard3Desc:
    "Descoperiți cum să vă protejați în timpul cutremurelor și ce să faceți după.",
  problemCard4Title: "Furtună / Uragan",
  problemCard4Desc:
    "Protejați-vă de vânturile extreme și securizați-vă locuința.",
  problemCard5Title: "Pericol chimic",
  problemCard5Desc:
    "Cunoașteti regulile de siguranță pentru scurgeri de materiale periculoase.",
  problemCard6Title: "Pană de curent",
  problemCard6Desc:
    "Pregătiți-vă pentru pene de curent prelungite și acoperiți nevoile de bază.",
  problemCard7Title: "Alunecare de teren",
  problemCard7Desc:
    "Recunoașteți semnele de avertizare și părăsiți în siguranță zonele de risc.",
  problemCard8Title: "Pandemie",
  problemCard8Desc:
    "Învățați să vă protejați pe voi și pe cei dragi în timpul unei epidemii.",
  problemCard9Title: "Amenințare radiologică",
  problemCard9Desc: "Cunoașteți procedurile în caz de contaminare radioactivă.",
  problemCard10Title: "Atac cibernetic",
  problemCard10Desc:
    "Protejați-vă datele și știți cum să acționați când infrastructura eșuează.",
  problemCard11Title: "Explozie",
  problemCard11Desc:
    "Învățați să răspundeți la explozii și să securizați împrejurimile.",
  problemCard12Title: "Secetă / Val de căldură",
  problemCard12Desc: "Stocați apă și protejați-vă de temperaturi extreme.",
  problemCard13Title: "Acțiuni militare",
  problemCard13Desc:
    "Știți cum să acționați în conflicte armate: rute de evacuare, adăpost, protocoale de comunicare.",
  problemCard14Title: "Atacuri hibride",
  problemCard14Desc:
    "Înțelegeți dezinformarea, sabotajul infrastructurii și amenințările ciberfizice coordonate.",
  problemCard15Title: "Panică în masă",
  problemCard15Desc:
    "Rămâneți în siguranță în busculade și evacuări în masă: cum să navigați prin mulțimi.",
  problemCard16Title: "Căldură / frig extrem",
  problemCard16Desc:
    "Supraviețuiți valurilor de căldură și gerurilor severe: semne de hipertermie, hipotermie și prim ajutor.",
  howTitle: "Cum funcționează",
  howStep1Title: "Completați chestionarul",
  howStep1Desc:
    "Răspundeți la 5 întrebări scurte pentru a verifica gradul actual de pregătire.",
  howStep2Title: "Obțineți scorul",
  howStep2Desc:
    "Primiți un scor personalizat de pregătire cu sfaturi specifice.",
  howStep3Title: "Fiți pregătiți",
  howStep3Desc:
    "Folosiți aplicația KWTD pentru a îmbunătăți continuu nivelul de pregătire.",
  quizSectionTitle: "Verificați-vă gradul de pregătire",
  quizSectionDesc: "5 întrebări. 3 minute. Aflați cât de pregătiți sunteți.",
  quizStart: "Pornire chestionar",
  quizQuestion: "Întrebarea",
  quizOf: "din",
  quizNext: "Următorul",
  quizBack: "Înapoi",
  quizFinish: "Finalizare",
  quizResult: "Scorul dvs.:",
  quizScore: "răspunsuri corecte",
  quizLevelBeginner: "Începător",
  quizLevelIntermediate: "Intermediar",
  quizLevelReady: "Pregătit",
  quizLevelExpert: "Expert",
  quizEmailPrompt:
    "Lăsați e-mailul pentru a fi primul care află despre lansarea KWTD!",
  quizEmailPlaceholder: "email@dvs.ro",
  quizEmailSubmit: "Notificați-mă",
  quizEmailSuccess: "Mulțumim!",
  quizEmailSuccessDesc: "Veți fi notificat când KWTD se lansează.",
  q1Text: "Ce faceți primul lucru când auziți sirena de alarmă?",
  q1A: "O ignor și aștept",
  q1B: "Mă duc într-un loc sigur și ascult radioul",
  q1C: "Îi sun pe vecini",
  q1D: "Ies afară să văd ce se întâmplă",
  q2Text: "Câți litri de apă per persoană ar trebui să aveți pentru 72 de ore?",
  q2A: "1 litru",
  q2B: "3 litri",
  q2C: "9 litri",
  q2D: "15 litri",
  q3Text: "Ce ar trebui să fie în geanta de urgență?",
  q3A: "Doar documente și bani",
  q3B: "Documente, apă, mâncare, trusă de prim ajutor, lanternă, telefon",
  q3C: "Haine și electronice",
  q3D: "Mâncare pentru o săptămână",
  q4Text: "Cât timp poate supraviețui o persoană sănătoasă fără mâncare?",
  q4A: "24 de ore",
  q4B: "3 zile",
  q4C: "3 săptămâni",
  q4D: "3 luni",
  q5Text: "Unde găsiți informații despre punctele de evacuare din orașul dvs.?",
  q5A: "Nu știu unde să caut",
  q5B: "La biroul local sau pe site-ul orașului",
  q5C: "Pe Facebook",
  q5D: "La televizor",
  comingSoonTitle: "Finalizăm dezvoltarea",
  comingSoonSubtitle:
    "Fiți primul! Lăsați e-mailul și aflați despre lansarea KWTD.",
  comingSoonEmailPlaceholder: "email@dvs.ro",
  comingSoonSubmit: "Vreau să fiu primul!",
  comingSoonSuccess: "Minunat!",
  comingSoonSuccessDesc:
    "Sunteți pe listă! Vă vom notifica când KWTD este gata.",
  faqTitle: "Întrebări frecvente",
  faq1Q: "Ce este KWTD?",
  faq1A:
    "KWTD (Know What To Do) este o platformă educațională inteligentă pentru pregătirea situațiilor de urgență.",
  faq2Q: "Când va fi disponibilă aplicația?",
  faq2A:
    "Planificăm lansarea în 2025. Lăsați e-mailul pentru a fi primul care află.",
  faq3Q: "Va fi KWTD gratuit?",
  faq3A: "Funcțiile de bază vor fi gratuite. Planificăm și o versiune Premium.",
  faq4Q: "Pe ce platforme va fi disponibil?",
  faq4A:
    "KWTD va fi disponibil ca aplicație web și aplicație mobilă (iOS și Android).",
  faq5Q: "Datele mele sunt în siguranță?",
  faq5A:
    "Da. Datele dvs. sunt criptate și stocate în siguranță. Nu vindem date personale.",
  footerTagline: "Cunoașterea salvează vieți.",
  footerPrivacy: "Politica de confidențialitate",
  footerTerms: "Termeni și condiții",
  footerContact: "Contact",
  footerBuiltWith: "",
};

const bg: Translations = {
  langCode: "bg",
  langName: "Български",
  navAbout: "За нас",
  navHowItWorks: "Как работи",
  navResources: "Ресурси",
  navFaq: "FAQ",
  navSignIn: "Вход",
  navSignUp: "Регистрация",
  heroTitle1: "Знаете ли какво да правите",
  heroTitle2: "при извънредна ситуация?",
  heroSubtitle:
    "KWTD е интелигентната платформа за готовност при извънредни ситуации. Проверете готовността си и защитете семейството си.",
  heroGetStarted: "Започнете сега",
  heroPeopleJoined: "847",
  heroPeopleJoinedLabel: "души вече се подготвят",
  problemTitle: "Готовността спасява животи",
  problemSubtitle:
    "Повечето хора не са готови за извънредни ситуации. KWTD променя това.",
  problemCard1Title: "Наводнение",
  problemCard1Desc:
    "Знайте кога да евакуирате и как да защитите имуществото си.",
  problemCard2Title: "Пожар",
  problemCard2Desc:
    "Научете се да реагирате незабавно и да евакуирате сградите безопасно.",
  problemCard3Title: "Земетресение",
  problemCard3Desc:
    "Открийте как да се защитите по време на трусове и какво да правите след тях.",
  problemCard4Title: "Буря / Ураган",
  problemCard4Desc: "Защитете се от екстремни ветрове и обезопасете дома си.",
  problemCard5Title: "Химическа опасност",
  problemCard5Desc:
    "Познайте правилата за безопасност при разливи на опасни материали.",
  problemCard6Title: "Спиране на тока",
  problemCard6Desc: "Подгответе се за продължителни прекъсвания на тока.",
  problemCard7Title: "Свлачище",
  problemCard7Desc:
    "Разпознайте предупредителните знаци и напуснете опасните зони безопасно.",
  problemCard8Title: "Пандемия",
  problemCard8Desc:
    "Научете се да защитавате себе си и близките по време на епидемия.",
  problemCard9Title: "Радиационна заплаха",
  problemCard9Desc: "Познайте процедурите при радиоактивно замърсяване.",
  problemCard10Title: "Кибератака",
  problemCard10Desc:
    "Защитете данните си и знайте как да действате при срив на инфраструктурата.",
  problemCard11Title: "Експлозия",
  problemCard11Desc:
    "Научете се да реагирате на взривове и да обезопасите района.",
  problemCard12Title: "Суша / Топлинна вълна",
  problemCard12Desc:
    "Съхранявайте водни запаси и се защитете от екстремни температури.",
  problemCard13Title: "Военни действия",
  problemCard13Desc:
    "Знайте как да действате при въоръжен конфликт: евакуационни маршрути, убежища, комуникация.",
  problemCard14Title: "Хибридни атаки",
  problemCard14Desc:
    "Разбирайте дезинформацията, саботажа на инфраструктурата и координираните кибер-физически заплахи.",
  problemCard15Title: "Масова паника",
  problemCard15Desc:
    "Безопасност при масова паника и евакуация: как да се движите в тълпата.",
  problemCard16Title: "Екстремна жега / студ",
  problemCard16Desc:
    "Оцелейте при топлинни вълни и силни студове: признаци на хипертермия, хипотермия и първа помощ.",
  howTitle: "Как работи",
  howStep1Title: "Попълнете теста",
  howStep1Desc:
    "Отговорете на 5 кратки въпроса, за да проверите готовността си.",
  howStep2Title: "Получете резултата си",
  howStep2Desc:
    "Получете персонализиран резултат за готовност с конкретни съвети.",
  howStep3Title: "Бъдете готови",
  howStep3Desc:
    "Използвайте приложението KWTD за непрекъснато подобряване на готовността.",
  quizSectionTitle: "Проверете готовността си",
  quizSectionDesc: "5 въпроса. 3 минути. Разберете колко сте готови.",
  quizStart: "Стартирай теста",
  quizQuestion: "Въпрос",
  quizOf: "от",
  quizNext: "Напред",
  quizBack: "Назад",
  quizFinish: "Завърши",
  quizResult: "Вашият резултат:",
  quizScore: "верни отговора",
  quizLevelBeginner: "Начинаещ",
  quizLevelIntermediate: "Средно ниво",
  quizLevelReady: "Готов",
  quizLevelExpert: "Експерт",
  quizEmailPrompt:
    "Оставете имейла си, за да научите първи за стартирането на KWTD!",
  quizEmailPlaceholder: "вашия@имейл.com",
  quizEmailSubmit: "Уведомете ме",
  quizEmailSuccess: "Благодарим!",
  quizEmailSuccessDesc: "Ще бъдете уведомени, когато KWTD стартира.",
  q1Text: "Какво правите първо, когато чуете алармена сирена?",
  q1A: "Игнорирам я и чакам",
  q1B: "Отивам на безопасно място и слушам радио",
  q1C: "Звъня на съседите",
  q1D: "Излизам навън да видя какво се случва",
  q2Text: "Колко литра вода на човек трябва да имате за 72 часа?",
  q2A: "1 литър",
  q2B: "3 литра",
  q2C: "9 литра",
  q2D: "15 литра",
  q3Text: "Какво трябва да има в аварийната чанта?",
  q3A: "Само документи и пари",
  q3B: "Документи, вода, храна, аптечка, фенерче, телефон",
  q3C: "Дрехи и електроника",
  q3D: "Храна за седмица",
  q4Text: "Колко може да оцелее здрав човек без храна?",
  q4A: "24 часа",
  q4B: "3 дни",
  q4C: "3 седмици",
  q4D: "3 месеца",
  q5Text: "Къде намирате информация за евакуационните пунктове в града си?",
  q5A: "Не знам къде да търся",
  q5B: "В местния офис или на сайта на града",
  q5C: "Във Facebook",
  q5D: "По телевизията",
  comingSoonTitle: "Завършваме разработката",
  comingSoonSubtitle:
    "Бъдете първи! Оставете имейла си и научете за старта на KWTD.",
  comingSoonEmailPlaceholder: "вашия@имейл.com",
  comingSoonSubmit: "Искам да съм първи!",
  comingSoonSuccess: "Чудесно!",
  comingSoonSuccessDesc: "В списъка сте! Ще ви уведомим, когато KWTD е готов.",
  faqTitle: "Често задавани въпроси",
  faq1Q: "Какво е KWTD?",
  faq1A:
    "KWTD (Know What To Do) е интелигентна образователна платформа за подготовка при извънредни ситуации.",
  faq2Q: "Кога ще бъде достъпно приложението?",
  faq2A:
    "Планираме стартиране през 2025 г. Оставете имейла си, за да научите първи.",
  faq3Q: "KWTD безплатно ли е?",
  faq3A: "Основните функции ще бъдат безплатни. Планираме и Premium версия.",
  faq4Q: "На какви платформи ще бъде достъпно?",
  faq4A:
    "KWTD ще бъде достъпно като уеб приложение и мобилно приложение (iOS и Android).",
  faq5Q: "Данните ми в безопасност ли са?",
  faq5A:
    "Да. Вашите данни са криптирани и съхранени сигурно. Не продаваме лични данни.",
  footerTagline: "Знанието спасява животи.",
  footerPrivacy: "Политика за поверителност",
  footerTerms: "Условия за ползване",
  footerContact: "Контакт",
  footerBuiltWith: "",
};

const hr: Translations = {
  langCode: "hr",
  langName: "Hrvatski",
  navAbout: "O nama",
  navHowItWorks: "Kako funkcionira",
  navResources: "Resursi",
  navFaq: "FAQ",
  navSignIn: "Prijava",
  navSignUp: "Registracija",
  heroTitle1: "Znate li što trebate učiniti",
  heroTitle2: "u hitnoj situaciji?",
  heroSubtitle:
    "KWTD je inteligentna platforma za pripremu na hitne situacije. Provjerite svoju spremnost i zaštitite svoju obitelj.",
  heroGetStarted: "Počnite sada",
  heroPeopleJoined: "847",
  heroPeopleJoinedLabel: "ljudi se već priprema",
  problemTitle: "Pripremljenost spašava živote",
  problemSubtitle:
    "Većina ljudi nije pripremljena za hitne situacije. KWTD to mijenja.",
  problemCard1Title: "Poplava",
  problemCard1Desc:
    "Znajte kada evakuirati i kako zaštititi imovinu od poplava.",
  problemCard2Title: "Požar",
  problemCard2Desc: "Naučite reagirati odmah i sigurno evakuirati zgrade.",
  problemCard3Title: "Potres",
  problemCard3Desc:
    "Saznajte kako se zaštititi za vrijeme potresa i što učiniti nakon.",
  problemCard4Title: "Oluja / Uragan",
  problemCard4Desc: "Zaštitite se od jakih vjetrova i osigurajte dom.",
  problemCard5Title: "Kemijska opasnost",
  problemCard5Desc: "Naučite sigurnosna pravila za curenje opasnih tvari.",
  problemCard6Title: "Nestanak struje",
  problemCard6Desc: "Pripremite se za dugotrajna nestajanja struje.",
  problemCard7Title: "Klizište",
  problemCard7Desc:
    "Prepoznajte znakove upozorenja i sigurno napustite opasna područja.",
  problemCard8Title: "Pandemija",
  problemCard8Desc: "Naučite zaštititi sebe i voljene za vrijeme epidemije.",
  problemCard9Title: "Radijacijska prijetnja",
  problemCard9Desc: "Poznajte postupke u slučaju radioaktivne kontaminacije.",
  problemCard10Title: "Kibernapad",
  problemCard10Desc:
    "Zaštitite podatke i znajte kako djelovati pri kvaru infrastrukture.",
  problemCard11Title: "Eksplozija",
  problemCard11Desc:
    "Naučite kako reagirati na eksplozije i osigurati okolicu.",
  problemCard12Title: "Suša / Toplinski val",
  problemCard12Desc:
    "Pohranite zalihe vode i zaštitite se od ekstremnih temperatura.",
  problemCard13Title: "Vojne akcije",
  problemCard13Desc:
    "Znati kako djelovati u oružanom sukobu: rute evakuacije, sklonište i komunikacija.",
  problemCard14Title: "Hibridni napadi",
  problemCard14Desc:
    "Razumjeti dezinformacije, sabotaže infrastrukture i koordinirane kibernetičko-fizičke prijetnje.",
  problemCard15Title: "Masovna panika",
  problemCard15Desc:
    "Ostanite sigurni u stampedama i masovnim evakuacijama: kako se kretati kroz mase.",
  problemCard16Title: "Ekstremna vrućina / hladnoća",
  problemCard16Desc:
    "Preživite toplinske valove i jake mrazeve: znakovi hipertermije, hipotermije i prva pomoć.",
  howTitle: "Kako funkcionira",
  howStep1Title: "Ispunite kviz",
  howStep1Desc:
    "Odgovorite na 5 kratkih pitanja za provjeru trenutne spremnosti.",
  howStep2Title: "Dobijte rezultat",
  howStep2Desc:
    "Primite personalizirani rezultat spremnosti s konkretnim savjetima.",
  howStep3Title: "Budite pripremljeni",
  howStep3Desc:
    "Koristite aplikaciju KWTD za kontinuirano poboljšanje pripremljenosti.",
  quizSectionTitle: "Provjerite svoju spremnost",
  quizSectionDesc: "5 pitanja. 3 minute. Saznajte koliko ste pripremljeni.",
  quizStart: "Pokrenite kviz",
  quizQuestion: "Pitanje",
  quizOf: "od",
  quizNext: "Sljedeće",
  quizBack: "Natrag",
  quizFinish: "Završi",
  quizResult: "Vaš rezultat:",
  quizScore: "točnih odgovora",
  quizLevelBeginner: "Početnik",
  quizLevelIntermediate: "Srednja razina",
  quizLevelReady: "Spreman",
  quizLevelExpert: "Stručnjak",
  quizEmailPrompt:
    "Ostavite e-mail i budite prvi koji saznaje o pokretanju KWTD!",
  quizEmailPlaceholder: "vas@email.hr",
  quizEmailSubmit: "Obavijesti me",
  quizEmailSuccess: "Hvala!",
  quizEmailSuccessDesc: "Bit ćete obaviješteni kada KWTD bude pokrenut.",
  q1Text: "Što ćete napraviti prvo kada čujete sirenu za uzbunu?",
  q1A: "Ignoriram je i čekam",
  q1B: "Idem na sigurno mjesto i slušam radio",
  q1C: "Zovem susjede",
  q1D: "Izlazim van da vidim što se događa",
  q2Text: "Koliko litara vode po osobi trebate imati za 72 sata?",
  q2A: "1 litru",
  q2B: "3 litre",
  q2C: "9 litara",
  q2D: "15 litara",
  q3Text: "Što treba biti u torbi za hitne slučajeve?",
  q3A: "Samo dokumenti i novac",
  q3B: "Dokumenti, voda, hrana, pribor prve pomoći, svjetiljka, telefon",
  q3C: "Odjeća i elektronika",
  q3D: "Tjedne zalihe hrane",
  q4Text: "Koliko može preživjeti zdrava osoba bez hrane?",
  q4A: "24 sata",
  q4B: "3 dana",
  q4C: "3 tjedna",
  q4D: "3 mjeseca",
  q5Text: "Gdje nalazite informacije o evakuacijskim točkama u vašem gradu?",
  q5A: "Ne znam gdje to pronaći",
  q5B: "U lokalnom uredu ili na web stranici grada",
  q5C: "Na Facebooku",
  q5D: "Na TV-u",
  comingSoonTitle: "Dovršavamo razvoj",
  comingSoonSubtitle:
    "Budite prvi! Ostavite e-mail i saznajte o pokretanju KWTD.",
  comingSoonEmailPlaceholder: "vas@email.hr",
  comingSoonSubmit: "Želim biti prvi!",
  comingSoonSuccess: "Odlično!",
  comingSoonSuccessDesc:
    "Na popisu ste! Obavijestit ćemo vas kad KWTD bude spreman.",
  faqTitle: "Česta pitanja",
  faq1Q: "Što je KWTD?",
  faq1A:
    "KWTD (Know What To Do) je inteligentna obrazovna platforma za pripremu na hitne situacije.",
  faq2Q: "Kada će aplikacija biti dostupna?",
  faq2A: "Planiramo pokretanje 2025. Ostavite e-mail da saznate prvi.",
  faq3Q: "Hoće li KWTD biti besplatan?",
  faq3A: "Osnovne funkcije bit će besplatne. Planiramo i Premium verziju.",
  faq4Q: "Na kojim platformama će biti dostupan?",
  faq4A:
    "KWTD će biti dostupan kao web aplikacija i mobilna aplikacija (iOS i Android).",
  faq5Q: "Jesu li moji podaci sigurni?",
  faq5A:
    "Da. Vaši podaci su šifrirani i sigurno pohranjeni. Ne prodajemo osobne podatke.",
  footerTagline: "Znanje spašava živote.",
  footerPrivacy: "Politika privatnosti",
  footerTerms: "Uvjeti korištenja",
  footerContact: "Kontakt",
  footerBuiltWith: "",
};

const sr: Translations = {
  langCode: "sr",
  langName: "Srpski",
  navAbout: "O nama",
  navHowItWorks: "Kako funkcioniše",
  navResources: "Resursi",
  navFaq: "FAQ",
  navSignIn: "Prijava",
  navSignUp: "Registracija",
  heroTitle1: "Znate li šta treba da radite",
  heroTitle2: "u hitnoj situaciji?",
  heroSubtitle:
    "KWTD je inteligentna platforma za pripremu na hitne situacije. Proverite svoju spremu i zaštitite svoju porodicu.",
  heroGetStarted: "Počnite sada",
  heroPeopleJoined: "847",
  heroPeopleJoinedLabel: "ljudi se već priprema",
  problemTitle: "Pripremljenost spašava živote",
  problemSubtitle:
    "Većina ljudi nije pripremljena za hitne situacije. KWTD to menja.",
  problemCard1Title: "Poplava",
  problemCard1Desc:
    "Znajte kada evakuisati i kako zaštititi imovinu od poplava.",
  problemCard2Title: "Požar",
  problemCard2Desc: "Naučite da reagujete odmah i bezbedno evakuišete zgrade.",
  problemCard3Title: "Zemljotres",
  problemCard3Desc:
    "Saznajte kako da se zaštitite tokom potresa i šta da radite posle.",
  problemCard4Title: "Oluja / Uragan",
  problemCard4Desc: "Zaštitite se od jakih vetrova i osigurajte dom.",
  problemCard5Title: "Hemijska opasnost",
  problemCard5Desc: "Naučite bezbednosna pravila za curenje opasnih materija.",
  problemCard6Title: "Nestanak struje",
  problemCard6Desc: "Pripremite se za dugotrajna nestajanja struje.",
  problemCard7Title: "Klizište",
  problemCard7Desc:
    "Prepoznajte znake upozorenja i bezbedno napustite opasna područja.",
  problemCard8Title: "Pandemija",
  problemCard8Desc: "Naučite da zaštitite sebe i voljene tokom epidemije.",
  problemCard9Title: "Radijacijska pretnja",
  problemCard9Desc: "Poznajte procedure u slučaju radioaktivne kontaminacije.",
  problemCard10Title: "Sajber napad",
  problemCard10Desc:
    "Zaštitite podatke i znajte kako da delujete pri kvaru infrastrukture.",
  problemCard11Title: "Eksplozija",
  problemCard11Desc:
    "Naučite kako da reagujete na eksplozije i osigurate okolinu.",
  problemCard12Title: "Suša / Toplotni talas",
  problemCard12Desc:
    "Čuvajte zalihe vode i zaštitite se od ekstremnih temperatura.",
  problemCard13Title: "Vojne akcije",
  problemCard13Desc:
    "Znati kako delovati u oružanom sukobu: evakuacione rute, sklonište i komunikacija.",
  problemCard14Title: "Hibridni napadi",
  problemCard14Desc:
    "Razumeti dezinformacije, sabotaže infrastrukture i koordinirane kibernetičko-fizičke pretnje.",
  problemCard15Title: "Masovna panika",
  problemCard15Desc:
    "Ostanite bezbedni u stampedima i masovnim evakuacijama: kako se kretati kroz mase.",
  problemCard16Title: "Ekstremna vrućina / hladnoća",
  problemCard16Desc:
    "Preživite toplotne talase i jake mrazeve: znaci hipertermije, hipotermije i prva pomoć.",
  howTitle: "Kako funkcioniše",
  howStep1Title: "Popunite kviz",
  howStep1Desc: "Odgovorite na 5 kratkih pitanja za proveru trenutne spremi.",
  howStep2Title: "Dobijte rezultat",
  howStep2Desc:
    "Primite personalizovani rezultat spremi sa konkretnim savetima.",
  howStep3Title: "Budite pripremljeni",
  howStep3Desc:
    "Koristite aplikaciju KWTD za kontinuirano poboljšanje pripremljenosti.",
  quizSectionTitle: "Proverite svoju spremu",
  quizSectionDesc: "5 pitanja. 3 minuta. Saznajte koliko ste pripremljeni.",
  quizStart: "Pokrenite kviz",
  quizQuestion: "Pitanje",
  quizOf: "od",
  quizNext: "Sledeće",
  quizBack: "Nazad",
  quizFinish: "Završi",
  quizResult: "Vaš rezultat:",
  quizScore: "tačnih odgovora",
  quizLevelBeginner: "Početnik",
  quizLevelIntermediate: "Srednji nivo",
  quizLevelReady: "Spreman",
  quizLevelExpert: "Stručnjak",
  quizEmailPrompt:
    "Ostavite e-mail i budite prvi koji saznaje o pokretanju KWTD!",
  quizEmailPlaceholder: "vas@email.rs",
  quizEmailSubmit: "Obavesti me",
  quizEmailSuccess: "Hvala!",
  quizEmailSuccessDesc: "Bićete obavešteni kada KWTD bude pokrenut.",
  q1Text: "Šta ćete uraditi prvo kada čujete sirenu za uzbunu?",
  q1A: "Ignorišem je i čekam",
  q1B: "Idem na bezbedno mesto i slušam radio",
  q1C: "Zovem komšije",
  q1D: "Izlazim napolje da vidim šta se dešava",
  q2Text: "Koliko litara vode po osobi treba da imate za 72 sata?",
  q2A: "1 litar",
  q2B: "3 litra",
  q2C: "9 litara",
  q2D: "15 litara",
  q3Text: "Šta treba da bude u torbi za hitne slučajeve?",
  q3A: "Samo dokumenti i novac",
  q3B: "Dokumenti, voda, hrana, pribor prve pomoći, lampa, telefon",
  q3C: "Odeća i elektronika",
  q3D: "Nedeljne zalihe hrane",
  q4Text: "Koliko može preživeti zdrava osoba bez hrane?",
  q4A: "24 sata",
  q4B: "3 dana",
  q4C: "3 nedelje",
  q4D: "3 meseca",
  q5Text: "Gde nalazite informacije o evakuacionim tačkama u vašem gradu?",
  q5A: "Ne znam gde to da nađem",
  q5B: "U lokalnoj upravi ili na sajtu grada",
  q5C: "Na Facebooku",
  q5D: "Na TV-u",
  comingSoonTitle: "Završavamo razvoj",
  comingSoonSubtitle:
    "Budite prvi! Ostavite e-mail i saznajte o pokretanju KWTD.",
  comingSoonEmailPlaceholder: "vas@email.rs",
  comingSoonSubmit: "Hoću da budem prvi!",
  comingSoonSuccess: "Odlično!",
  comingSoonSuccessDesc:
    "Na listi ste! Obavestićemo vas kad KWTD bude spreman.",
  faqTitle: "Česta pitanja",
  faq1Q: "Šta je KWTD?",
  faq1A:
    "KWTD (Know What To Do) je inteligentna obrazovna platforma za pripremu na hitne situacije.",
  faq2Q: "Kada će aplikacija biti dostupna?",
  faq2A: "Planiramo pokretanje 2025. Ostavite e-mail da saznate prvi.",
  faq3Q: "Hoće li KWTD biti besplatan?",
  faq3A: "Osnovne funkcije biće besplatne. Planiramo i Premium verziju.",
  faq4Q: "Na kojim platformama će biti dostupan?",
  faq4A:
    "KWTD će biti dostupan kao veb aplikacija i mobilna aplikacija (iOS i Android).",
  faq5Q: "Da li su moji podaci bezbedni?",
  faq5A:
    "Da. Vaši podaci su šifrovani i bezbedno sačuvani. Ne prodajemo lične podatke.",
  footerTagline: "Znanje spašava živote.",
  footerPrivacy: "Politika privatnosti",
  footerTerms: "Uslovi korišćenja",
  footerContact: "Kontakt",
  footerBuiltWith: "",
};

const sl: Translations = {
  langCode: "sl",
  langName: "Slovenščina",
  navAbout: "O nas",
  navHowItWorks: "Kako deluje",
  navResources: "Viri",
  navFaq: "FAQ",
  navSignIn: "Prijava",
  navSignUp: "Registracija",
  heroTitle1: "Ali veste, kaj storiti",
  heroTitle2: "v nujni situaciji?",
  heroSubtitle:
    "KWTD je inteligentna platforma za pripravo na nujne situacije. Preverite svojo pripravljenost in zaščitite svojo družino.",
  heroGetStarted: "Začnite zdaj",
  heroPeopleJoined: "847",
  heroPeopleJoinedLabel: "ljudi se že pripravlja",
  problemTitle: "Pripravljenost rešuje življenja",
  problemSubtitle:
    "Večina ljudi ni pripravljena na nujne situacije. KWTD to spreminja.",
  problemCard1Title: "Poplava",
  problemCard1Desc:
    "Vedite, kdaj evakuirati in kako zaščititi premoženje pred poplavami.",
  problemCard2Title: "Požar",
  problemCard2Desc: "Naučite se takoj reagirati in varno evakuirati stavbe.",
  problemCard3Title: "Potres",
  problemCard3Desc:
    "Ugotovite, kako se zaščititi med potresi in kaj storiti po njih.",
  problemCard4Title: "Nevihta / Orkan",
  problemCard4Desc: "Zaščitite se pred ekstremnimi vetrovi in zavarujte dom.",
  problemCard5Title: "Kemijska nevarnost",
  problemCard5Desc: "Naučite se varnostnih pravil pri izlitju nevarnih snovi.",
  problemCard6Title: "Izpad elektrike",
  problemCard6Desc: "Pripravite se na dolgotrajne izpade elektrike.",
  problemCard7Title: "Zemeljski plaz",
  problemCard7Desc:
    "Prepoznajte opozorilne znake in varno zapustite ogrožena območja.",
  problemCard8Title: "Pandemija",
  problemCard8Desc: "Naučite se zaščititi sebe in bližnje med epidemijo.",
  problemCard9Title: "Radiacijska grožnja",
  problemCard9Desc: "Poznajte postopke ob radioaktivni kontaminaciji.",
  problemCard10Title: "Kibernapad",
  problemCard10Desc:
    "Zaščitite podatke in vedite, kako ravnati ob odpovedi infrastrukture.",
  problemCard11Title: "Eksplozija",
  problemCard11Desc: "Naučite se odzivati na eksplozije in zavarujte okolico.",
  problemCard12Title: "Suša / Toplotni val",
  problemCard12Desc:
    "Shranjujte zaloge vode in se zaščitite pred ekstremnimi temperaturami.",
  problemCard13Title: "Vojaške akcije",
  problemCard13Desc:
    "Vedeti, kako ravnati med oboroženimi spopadi: evakuacijske poti, zaklonišča in komunikacija.",
  problemCard14Title: "Hibridni napadi",
  problemCard14Desc:
    "Razumeti dezinformacije, sabotaže infrastrukture in koordinirane kibernetično-fizične grožnje.",
  problemCard15Title: "Množična panika",
  problemCard15Desc:
    "Ostanite varni v stampedih in množičnih evakuacijah: kako se gibati skozi množice.",
  problemCard16Title: "Ekstremna vročina / mraz",
  problemCard16Desc:
    "Preživite toplotne valove in hude mrazove: znaki hipertermije, hipotermije in prva pomoč.",
  howTitle: "Kako deluje",
  howStep1Title: "Rešite kviz",
  howStep1Desc:
    "Odgovorite na 5 kratkih vprašanj za preveritev pripravljenosti.",
  howStep2Title: "Prejmite rezultat",
  howStep2Desc:
    "Prejmite osebni rezultat pripravljenosti s konkretnimi nasveti.",
  howStep3Title: "Bodite pripravljeni",
  howStep3Desc:
    "Uporabljajte aplikacijo KWTD za stalno izboljševanje pripravljenosti.",
  quizSectionTitle: "Preverite svojo pripravljenost",
  quizSectionDesc: "5 vprašanj. 3 minute. Ugotovite, kako pripravljeni ste.",
  quizStart: "Začni kviz",
  quizQuestion: "Vprašanje",
  quizOf: "od",
  quizNext: "Naprej",
  quizBack: "Nazaj",
  quizFinish: "Končaj",
  quizResult: "Vaš rezultat:",
  quizScore: "pravilnih odgovorov",
  quizLevelBeginner: "Začetnik",
  quizLevelIntermediate: "Srednja raven",
  quizLevelReady: "Pripravljen",
  quizLevelExpert: "Strokovnjak",
  quizEmailPrompt: "Pustite e-naslov in bodite prvi, ki izve o zagonu KWTD!",
  quizEmailPlaceholder: "vas@email.si",
  quizEmailSubmit: "Obvestite me",
  quizEmailSuccess: "Hvala!",
  quizEmailSuccessDesc: "Obveščeni boste, ko bo KWTD zagnan.",
  q1Text: "Kaj storite najprej, ko slišite alarmno sireno?",
  q1A: "Ignoriram jo in čakam",
  q1B: "Grem na varno mesto in poslušam radio",
  q1C: "Pokličem sosede",
  q1D: "Grem ven pogledat, kaj se dogaja",
  q2Text: "Koliko litrov vode na osebo bi morali imeti za 72 ur?",
  q2A: "1 liter",
  q2B: "3 litre",
  q2C: "9 litrov",
  q2D: "15 litrov",
  q3Text: "Kaj mora biti v torbi za nujne primere?",
  q3A: "Samo dokumenti in denar",
  q3B: "Dokumenti, voda, hrana, komplet za prvo pomoč, svetilka, telefon",
  q3C: "Oblačila in elektronika",
  q3D: "Tedenski zalogi hrane",
  q4Text: "Kako dolgo lahko zdrava oseba preživi brez hrane?",
  q4A: "24 ur",
  q4B: "3 dni",
  q4C: "3 tedne",
  q4D: "3 mesece",
  q5Text: "Kje najdete informacije o evakuacijskih točkah v vašem mestu?",
  q5A: "Ne vem, kje to iskati",
  q5B: "Na lokalnem uradu ali na spletni strani mesta",
  q5C: "Na Facebooku",
  q5D: "Na televiziji",
  comingSoonTitle: "Zaključujemo razvoj",
  comingSoonSubtitle: "Bodite prvi! Pustite e-naslov in izvejte o zagonu KWTD.",
  comingSoonEmailPlaceholder: "vas@email.si",
  comingSoonSubmit: "Hočem biti prvi!",
  comingSoonSuccess: "Odlično!",
  comingSoonSuccessDesc:
    "Na seznamu ste! Obvestili vas bomo, ko bo KWTD pripravljen.",
  faqTitle: "Pogosta vprašanja",
  faq1Q: "Kaj je KWTD?",
  faq1A:
    "KWTD (Know What To Do) je inteligentna izobraževalna platforma za pripravo na nujne situacije.",
  faq2Q: "Kdaj bo aplikacija na voljo?",
  faq2A: "Načrtujemo zagon leta 2025. Pustite e-naslov, da izveste prvi.",
  faq3Q: "Bo KWTD brezplačen?",
  faq3A: "Osnovne funkcije bodo brezplačne. Načrtujemo tudi Premium različico.",
  faq4Q: "Na katerih platformah bo na voljo?",
  faq4A:
    "KWTD bo na voljo kot spletna aplikacija in mobilna aplikacija (iOS in Android).",
  faq5Q: "Ali so moji podatki varni?",
  faq5A:
    "Da. Vaši podatki so šifrirani in varno shranjeni. Osebnih podatkov ne prodajamo.",
  footerTagline: "Znanje rešuje življenja.",
  footerPrivacy: "Politika zasebnosti",
  footerTerms: "Pogoji storitve",
  footerContact: "Kontakt",
  footerBuiltWith: "",
};
const lt: Translations = {
  langCode: "lt",
  langName: "Lietuvių",
  navAbout: "Apie mus",
  navHowItWorks: "Kaip tai veikia",
  navResources: "Ištekliai",
  navFaq: "DUK",
  navSignIn: "Prisijungti",
  navSignUp: "Registruotis",
  heroTitle1: "Ar žinote, ką daryti",
  heroTitle2: "ekstremalios situacijos metu?",
  heroSubtitle:
    "KWTD – išmani ekstremaliųjų situacijų pasirengimo platforma. Patikrinkite savo pasirengimą ir apsaugokite šeimą.",
  heroGetStarted: "Pradėti",
  heroPeopleJoined: "847",
  heroPeopleJoinedLabel: "žmonių jau ruošiasi",
  problemTitle: "Pasirengimas gelbsti gyvybes",
  problemSubtitle:
    "Dauguma žmonių nėra pasirengę ekstremaliosioms situacijoms. KWTD tai keičia.",
  problemCard1Title: "Potvynis",
  problemCard1Desc:
    "Žinokite, kada evakuotis ir kaip apsaugoti turtą nuo potvynio.",
  problemCard2Title: "Gaisras",
  problemCard2Desc:
    "Išmokite reaguoti nedelsiant ir saugiai evakuotis iš pastatų.",
  problemCard3Title: "Žemės drebėjimas",
  problemCard3Desc:
    "Sužinokite, kaip apsisaugoti per drebėjimus ir ką daryti po jų.",
  problemCard4Title: "Audra / Uraganas",
  problemCard4Desc: "Apsisaugokite nuo stiprių vėjų ir apsaugokite namus.",
  problemCard5Title: "Cheminė grėsmė",
  problemCard5Desc:
    "Išmokite saugos taisykles pavojingų medžiagų nuotėkio atveju.",
  problemCard6Title: "Elektros tiekimo sutrikimas",
  problemCard6Desc: "Pasiruoškite ilgalaikiams elektros sutrikimams.",
  problemCard7Title: "Nuošliauža",
  problemCard7Desc:
    "Atpažinkite įspėjamuosius ženklus ir saugiai palikite pavojingas zonas.",
  problemCard8Title: "Pandemija",
  problemCard8Desc: "Išmokite apsaugoti save ir artimuosius epidemijos metu.",
  problemCard9Title: "Radiacinė grėsmė",
  problemCard9Desc: "Žinokite procedūras radioaktyvaus užteršimo atveju.",
  problemCard10Title: "Kibernetinė ataka",
  problemCard10Desc:
    "Apsaugokite duomenis ir žinokite, kaip veikti infrastruktūros gedimo metu.",
  problemCard11Title: "Sprogimas",
  problemCard11Desc: "Išmokite reaguoti į sprogimus ir apsaugoti aplinką.",
  problemCard12Title: "Sausra / Karščio banga",
  problemCard12Desc:
    "Kaupkite vandens atsargas ir apsisaugokite nuo ekstremalių temperatūrų.",
  problemCard13Title: "Kariniai veiksmai",
  problemCard13Desc:
    "Žinokite, kaip veikti ginkluoto konflikto metu: evakuacijos maršrutai, prieglaudos ir ryšys.",
  problemCard14Title: "Hibridiniai išpuoliai",
  problemCard14Desc:
    "Supraskite dezinformaciją, infrastruktūros sabotažą ir koordinuotas kibernetines-fizines grėsmes.",
  problemCard15Title: "Masinis panikos",
  problemCard15Desc:
    "Saugumas masinio panikos ir evakuacijos metu: kaip judėti minioje ir išvengti traumų.",
  problemCard16Title: "Ekstremalus karštis / šaltis",
  problemCard16Desc:
    "Išgyventi karščio bangas ir stiprius šalčius: hipertermijos, hipotermijos požymiai ir pirmoji pagalba.",
  howTitle: "Kaip tai veikia",
  howStep1Title: "Atlikite viktorina",
  howStep1Desc: "Atsakykite į 5 trumpus klausimus ir patikrinkite pasirengimą.",
  howStep2Title: "Gaukite rezultatą",
  howStep2Desc: "Gaukite asmeninį pasirengimo balą su konkrečiais patarimais.",
  howStep3Title: "Būkite pasirengę",
  howStep3Desc: "Naudokite KWTD programą nuolatiniam pasirengimo gerinimui.",
  quizSectionTitle: "Patikrinkite savo pasirengimą",
  quizSectionDesc: "5 klausimai. 3 minutės. Sužinokite, kaip esate pasirengę.",
  quizStart: "Pradėti viktoriną",
  quizQuestion: "Klausimas",
  quizOf: "iš",
  quizNext: "Kitas",
  quizBack: "Atgal",
  quizFinish: "Baigti",
  quizResult: "Jūsų rezultatas:",
  quizScore: "teisingų atsakymų",
  quizLevelBeginner: "Pradedantysis",
  quizLevelIntermediate: "Vidutinis",
  quizLevelReady: "Pasirengęs",
  quizLevelExpert: "Ekspertas",
  quizEmailPrompt:
    "Palikite el. paštą ir būkite pirmieji, sužinoję apie KWTD paleidimą!",
  quizEmailPlaceholder: "jusu@epastas.lt",
  quizEmailSubmit: "Pranešk man",
  quizEmailSuccess: "Ačiū!",
  quizEmailSuccessDesc: "Būsite informuoti, kai KWTD bus paleistas.",
  q1Text: "Ką darote pirmiausia išgirdę pavojaus sireeną?",
  q1A: "Ignoruoju ir laukiu",
  q1B: "Einu į saugią vietą ir klausau radijo",
  q1C: "Skambinu kaimynams",
  q1D: "Išeinu lauk pasižiūrėti kas vyksta",
  q2Text: "Kiek litrų vandens vienam asmeniui reikia 72 valandoms?",
  q2A: "1 litras",
  q2B: "3 litrai",
  q2C: "9 litrai",
  q2D: "15 litrų",
  q3Text: "Kas turėtų būti avarinėje kuprinėje?",
  q3A: "Tik dokumentai ir pinigai",
  q3B: "Dokumentai, vanduo, maistas, pirmosios pagalbos rinkinys, žibintuvėlis, telefonas",
  q3C: "Drabužiai ir elektronika",
  q3D: "Savaitės maisto atsargos",
  q4Text: "Kiek laiko sveikas žmogus gali išgyventi be maisto?",
  q4A: "24 valandas",
  q4B: "3 dienas",
  q4C: "3 savaites",
  q4D: "3 mėnesius",
  q5Text: "Kur rasti informacijos apie evakuacijos punktus jūsų mieste?",
  q5A: "Nežinau kur ieškoti",
  q5B: "Vietos savivaldybėje arba miesto svetainėje",
  q5C: "Facebook",
  q5D: "Televizijoje",
  comingSoonTitle: "Baigiame kūrimą",
  comingSoonSubtitle:
    "Būkite pirmieji! Palikite el. paštą ir sužinokite apie KWTD paleidimą.",
  comingSoonEmailPlaceholder: "jusu@epastas.lt",
  comingSoonSubmit: "Noriu būti pirmas!",
  comingSoonSuccess: "Puiku!",
  comingSoonSuccessDesc: "Esate sąraše! Informuosime, kai KWTD bus paruoštas.",
  faqTitle: "Dažniausiai užduodami klausimai",
  faq1Q: "Kas yra KWTD?",
  faq1A:
    "KWTD (Know What To Do) – išmani edukacinė platforma pasirengimui ekstremaliosioms situacijoms.",
  faq2Q: "Kada bus prieinama programa?",
  faq2A:
    "Planuojame paleisti 2025 m. Palikite el. paštą, kad sužinotumėte pirmieji.",
  faq3Q: "Ar KWTD bus nemokamas?",
  faq3A: "Pagrindinės funkcijos bus nemokamos. Planuojame ir Premium versiją.",
  faq4Q: "Kokiose platformose bus prieinamas?",
  faq4A:
    "KWTD bus prieinamas kaip žiniatinklio programa ir mobilioji programa (iOS ir Android).",
  faq5Q: "Ar mano duomenys saugūs?",
  faq5A:
    "Taip. Jūsų duomenys yra užšifruoti ir saugomi. Asmeninių duomenų neparduodame.",
  footerTagline: "Žinios gelbsti gyvybes.",
  footerPrivacy: "Privatumo politika",
  footerTerms: "Paslaugų teikimo sąlygos",
  footerContact: "Kontaktai",
  footerBuiltWith: "",
};

const lv: Translations = {
  langCode: "lv",
  langName: "Latviešu",
  navAbout: "Par mums",
  navHowItWorks: "Kā tas darbojas",
  navResources: "Resursi",
  navFaq: "BUJ",
  navSignIn: "Pieteikties",
  navSignUp: "Reģistrēties",
  heroTitle1: "Vai zināt, kas jādara",
  heroTitle2: "ārkārtas situācijā?",
  heroSubtitle:
    "KWTD ir inteliģenta ārkārtas situāciju gatavības platforma. Pārbaudiet savu gatavību un aizsargājiet savu ģimeni.",
  heroGetStarted: "Sākt tagad",
  heroPeopleJoined: "847",
  heroPeopleJoinedLabel: "cilvēki jau gatavojas",
  problemTitle: "Gatavība glābj dzīvības",
  problemSubtitle:
    "Lielākā daļa cilvēku nav gatavi ārkārtas situācijām. KWTD to maina.",
  problemCard1Title: "Plūdi",
  problemCard1Desc:
    "Ziniet, kad evakuēties un kā aizsargāt īpašumu no plūdiem.",
  problemCard2Title: "Ugunsgrēks",
  problemCard2Desc:
    "Iemācieties nekavējoties reaģēt un droši evakuēties no ēkām.",
  problemCard3Title: "Zemestrīce",
  problemCard3Desc:
    "Uzziniet, kā aizsargāties trīces laikā un ko darīt pēc tam.",
  problemCard4Title: "Vētra / Viesuļvētra",
  problemCard4Desc: "Aizsargājieties no stipriem vējiem un nodrošiniet māju.",
  problemCard5Title: "Ķīmiskais apdraudējums",
  problemCard5Desc:
    "Iemācieties drošības noteikumus bīstamu vielu noplūdes gadījumā.",
  problemCard6Title: "Elektrības padeves pārtraukums",
  problemCard6Desc: "Sagatavojieties ilgstošiem elektrības pārtraukumiem.",
  problemCard7Title: "Zemes nogruvums",
  problemCard7Desc:
    "Atpazīstiet brīdinājuma pazīmes un droši atstājiet apdraudētās zonas.",
  problemCard8Title: "Pandēmija",
  problemCard8Desc: "Iemācieties aizsargāt sevi un tuvos epidēmijas laikā.",
  problemCard9Title: "Radiācijas apdraudējums",
  problemCard9Desc: "Ziniet procedūras radioaktīvās piesārņošanas gadījumā.",
  problemCard10Title: "Kiberuzbrukums",
  problemCard10Desc:
    "Aizsargājiet datus un ziniet, kā rīkoties infrastruktūras atteices laikā.",
  problemCard11Title: "Sprādziens",
  problemCard11Desc:
    "Iemācieties reaģēt uz sprādzieniem un nodrošināt apkārtni.",
  problemCard12Title: "Sausums / Karstuma vilnis",
  problemCard12Desc:
    "Uzkrājiet ūdens rezerves un aizsargājieties no ekstrēmām temperatūrām.",
  problemCard13Title: "Militārās darbības",
  problemCard13Desc:
    "Ziniet, kā rīkoties bruņota konflikta laikā: evakuācijas maršruti, patvertnes un sakari.",
  problemCard14Title: "Hibrīduzbrukumi",
  problemCard14Desc:
    "Saprotiet dezinformāciju, infrastruktūras sabotāžu un koordinētos kiberuzbrukumus.",
  problemCard15Title: "Masveida panika",
  problemCard15Desc:
    "Drošība masveida panikā un evakuācijā: kā pārvietoties pūļos un izvairīties no traumām.",
  problemCard16Title: "Ekstrēms karstums / aukstums",
  problemCard16Desc:
    "Izdzīvot karstuma viļņos un stipros sals: hipertermijas, hipotermijas pazīmes un pirmā palīdzība.",
  howTitle: "Kā tas darbojas",
  howStep1Title: "Atbildiet uz viktorīnu",
  howStep1Desc: "Atbildiet uz 5 īsiem jautājumiem, lai pārbaudītu gatavību.",
  howStep2Title: "Iegūstiet rezultātu",
  howStep2Desc:
    "Saņemiet personalizētu gatavības punktu skaitu ar konkrētiem padomiem.",
  howStep3Title: "Esiet gatavi",
  howStep3Desc:
    "Izmantojiet KWTD lietotni, lai nepārtraukti uzlabotu gatavību.",
  quizSectionTitle: "Pārbaudiet savu gatavību",
  quizSectionDesc: "5 jautājumi. 3 minūtes. Uzziniet, cik esat gatavi.",
  quizStart: "Sākt viktorīnu",
  quizQuestion: "Jautājums",
  quizOf: "no",
  quizNext: "Tālāk",
  quizBack: "Atpakaļ",
  quizFinish: "Pabeigt",
  quizResult: "Jūsu rezultāts:",
  quizScore: "pareizo atbilžu",
  quizLevelBeginner: "Iesācējs",
  quizLevelIntermediate: "Vidējs līmenis",
  quizLevelReady: "Gatavs",
  quizLevelExpert: "Eksperts",
  quizEmailPrompt:
    "Atstājiet e-pastu un esiet pirmie, kas uzzina par KWTD palaišanu!",
  quizEmailPlaceholder: "jusu@epasts.lv",
  quizEmailSubmit: "Paziņot man",
  quizEmailSuccess: "Paldies!",
  quizEmailSuccessDesc: "Jūs tiksiet informēti, kad KWTD tiks palaists.",
  q1Text: "Ko jūs darāt vispirms, dzirdot trauksmes sirēnu?",
  q1A: "Ignorēju to un gaidu",
  q1B: "Dodos uz drošu vietu un klausos radio",
  q1C: "Zvanu kaimiņiem",
  q1D: "Eju ārā paskatīties, kas notiek",
  q2Text: "Cik litru ūdens uz cilvēku jums vajadzētu būt 72 stundām?",
  q2A: "1 litrs",
  q2B: "3 litri",
  q2C: "9 litri",
  q2D: "15 litru",
  q3Text: "Kas jābūt ārkārtas situāciju somā?",
  q3A: "Tikai dokumenti un nauda",
  q3B: "Dokumenti, ūdens, pārtika, pirmās palīdzības komplekts, lukturītis, tālrunis",
  q3C: "Apģērbs un elektronika",
  q3D: "Nedēļas pārtikas krājumi",
  q4Text: "Cik ilgi vesels cilvēks var izdzīvot bez pārtikas?",
  q4A: "24 stundas",
  q4B: "3 dienas",
  q4C: "3 nedēļas",
  q4D: "3 mēnešus",
  q5Text: "Kur atrast informāciju par evakuācijas punktiem jūsu pilsētā?",
  q5A: "Nezinu, kur to meklēt",
  q5B: "Pašvaldībā vai pilsētas tīmekļa vietnē",
  q5C: "Facebook",
  q5D: "Televīzijā",
  comingSoonTitle: "Pabeidzam izstrādi",
  comingSoonSubtitle:
    "Esiet pirmie! Atstājiet e-pastu un uzziniet par KWTD palaišanu.",
  comingSoonEmailPlaceholder: "jusu@epasts.lv",
  comingSoonSubmit: "Gribu būt pirmais!",
  comingSoonSuccess: "Lieliski!",
  comingSoonSuccessDesc: "Jūs esat sarakstā! Informēsim, kad KWTD būs gatavs.",
  faqTitle: "Biežāk uzdotie jautājumi",
  faq1Q: "Kas ir KWTD?",
  faq1A:
    "KWTD (Know What To Do) ir inteliģenta izglītojoša platforma ārkārtas situāciju sagatavošanai.",
  faq2Q: "Kad lietotne būs pieejama?",
  faq2A:
    "Plānojam palaišanu 2025. gadā. Atstājiet e-pastu, lai uzzinātu pirmie.",
  faq3Q: "Vai KWTD būs bezmaksas?",
  faq3A: "Pamatfunkcijas būs bezmaksas. Plānojam arī Premium versiju.",
  faq4Q: "Kādās platformās tas būs pieejams?",
  faq4A:
    "KWTD būs pieejams kā tīmekļa lietotne un mobilā lietotne (iOS un Android).",
  faq5Q: "Vai mani dati ir drošībā?",
  faq5A:
    "Jā. Jūsu dati ir šifrēti un droši glabāti. Mēs nepārdodam personas datus.",
  footerTagline: "Zināšanas glābj dzīvības.",
  footerPrivacy: "Privātuma politika",
  footerTerms: "Pakalpojumu noteikumi",
  footerContact: "Kontakti",
  footerBuiltWith: "",
};

const et: Translations = {
  langCode: "et",
  langName: "Eesti",
  navAbout: "Meist",
  navHowItWorks: "Kuidas see töötab",
  navResources: "Ressursid",
  navFaq: "KKK",
  navSignIn: "Logi sisse",
  navSignUp: "Registreeru",
  heroTitle1: "Kas teate, mida teha",
  heroTitle2: "hädaolukorras?",
  heroSubtitle:
    "KWTD on nutikas hädaolukordadeks valmisoleku platvorm. Kontrollige oma valmisolekut ja kaitske oma perekonda.",
  heroGetStarted: "Alusta kohe",
  heroPeopleJoined: "847",
  heroPeopleJoinedLabel: "inimest valmistub juba",
  problemTitle: "Valmisolek päästab elusid",
  problemSubtitle:
    "Enamik inimesi pole hädaolukordadeks valmis. KWTD muudab seda.",
  problemCard1Title: "Üleujutus",
  problemCard1Desc:
    "Teadke, millal evakueeruda ja kuidas kaitsta vara üleujutuse eest.",
  problemCard2Title: "Tulekahju",
  problemCard2Desc:
    "Õppige kohe reageerima ja hoonetest turvaliselt evakueeruma.",
  problemCard3Title: "Maavärin",
  problemCard3Desc:
    "Avastage, kuidas end värinade ajal kaitsta ja mida pärast teha.",
  problemCard4Title: "Torm / Orkaan",
  problemCard4Desc: "Kaitske end äärmuslike tuulte eest ja kindlustage kodu.",
  problemCard5Title: "Keemiline oht",
  problemCard5Desc: "Õppige ohtlike ainete lekkimise korral ohutuseeskirju.",
  problemCard6Title: "Elektrikatkestus",
  problemCard6Desc: "Valmistuge pikaajalisteks elektrikatkestusteks.",
  problemCard7Title: "Maalihe",
  problemCard7Desc:
    "Tunnake ära hoiatusmärgid ja lahkuge ohtlikest aladest turvaliselt.",
  problemCard8Title: "Pandeemia",
  problemCard8Desc: "Õppige end ja lähedasi epideemia ajal kaitsma.",
  problemCard9Title: "Kiirgusähvardus",
  problemCard9Desc:
    "Teadke radioaktiivse saastumise korral järgitavaid protseduure.",
  problemCard10Title: "Küberrünnak",
  problemCard10Desc:
    "Kaitske andmeid ja teadke, kuidas toimida infrastruktuuri rikke korral.",
  problemCard11Title: "Plahvatus",
  problemCard11Desc: "Õppige plahvatustele reageerima ja ümbrust kindlustama.",
  problemCard12Title: "Põud / Kuumalaine",
  problemCard12Desc:
    "Koguge veevaru ja kaitske end äärmuslike temperatuuride eest.",
  problemCard13Title: "Sõjalised tegevused",
  problemCard13Desc:
    "Teadke, kuidas tegutseda relvakonflikti korral: evakuatsioonimarsruudid, varjendid ja side.",
  problemCard14Title: "Hübriidrünnakud",
  problemCard14Desc:
    "Mõistke desinformatsiooni, taristu sabotaaži ja koordineeritud küberfüüsilisi ohte.",
  problemCard15Title: "Massipanika",
  problemCard15Desc:
    "Turvalisus massipaanikas ja massevakuatsioonis: kuidas rahvamassis liikuda.",
  problemCard16Title: "Ekstreemne kuumus / külm",
  problemCard16Desc:
    "Üle elada kuumalained ja tugevad külmad: hüpertermia, hüpotermia tunnused ja esmaabi.",
  howTitle: "Kuidas see töötab",
  howStep1Title: "Täitke viktoriin",
  howStep1Desc: "Vastake 5 lühikesele küsimusele, et kontrollida valmisolekut.",
  howStep2Title: "Saage oma tulemus",
  howStep2Desc: "Saate isikliku valmisolekuskoori konkreetsete näpunäidetega.",
  howStep3Title: "Olge valmis",
  howStep3Desc: "Kasutage KWTD rakendust valmisoleku pidevaks parandamiseks.",
  quizSectionTitle: "Kontrollige oma valmisolekut",
  quizSectionDesc: "5 küsimust. 3 minutit. Teadke, kui valmis olete.",
  quizStart: "Alusta viktoriini",
  quizQuestion: "Küsimus",
  quizOf: "/",
  quizNext: "Järgmine",
  quizBack: "Tagasi",
  quizFinish: "Lõpeta",
  quizResult: "Teie tulemus:",
  quizScore: "õiget vastust",
  quizLevelBeginner: "Algaja",
  quizLevelIntermediate: "Keskmine",
  quizLevelReady: "Valmis",
  quizLevelExpert: "Ekspert",
  quizEmailPrompt:
    "Jätke e-post ja olge esimene, kes saab teada KWTD käivitamisest!",
  quizEmailPlaceholder: "teie@email.ee",
  quizEmailSubmit: "Teavita mind",
  quizEmailSuccess: "Aitäh!",
  quizEmailSuccessDesc: "Teid teavitatakse, kui KWTD käivitatakse.",
  q1Text: "Mida teete kõigepealt, kui kuulete häiresireeni?",
  q1A: "Ignoreerin seda ja ootan",
  q1B: "Lähen turvalisse kohta ja kuulan raadiot",
  q1C: "Helistan naabritele",
  q1D: "Lähen välja vaatama, mis toimub",
  q2Text: "Mitu liitrit vett inimese kohta peaks teil olema 72 tunniks?",
  q2A: "1 liiter",
  q2B: "3 liitrit",
  q2C: "9 liitrit",
  q2D: "15 liitrit",
  q3Text: "Mis peaks olema hädaolukorra kotis?",
  q3A: "Ainult dokumendid ja raha",
  q3B: "Dokumendid, vesi, toit, esmaabikomplekt, taskulamp, telefon",
  q3C: "Riided ja elektroonika",
  q3D: "Nädala toiduvaru",
  q4Text: "Kui kaua saab terve inimene ilma toiduta elada?",
  q4A: "24 tundi",
  q4B: "3 päeva",
  q4C: "3 nädalat",
  q4D: "3 kuud",
  q5Text: "Kust leida teavet evakuatsioonipunktide kohta oma linnas?",
  q5A: "Ei tea, kust otsida",
  q5B: "Kohalikus omavalitsuses või linna veebilehel",
  q5C: "Facebookis",
  q5D: "Televisioonis",
  comingSoonTitle: "Lõpetame arenduse",
  comingSoonSubtitle:
    "Olge esimene! Jätke e-post ja saage teada KWTD käivitamisest.",
  comingSoonEmailPlaceholder: "teie@email.ee",
  comingSoonSubmit: "Tahan olla esimene!",
  comingSoonSuccess: "Suurepärane!",
  comingSoonSuccessDesc:
    "Olete nimekirjas! Teavitame teid, kui KWTD on valmis.",
  faqTitle: "Korduma kippuvad küsimused",
  faq1Q: "Mis on KWTD?",
  faq1A:
    "KWTD (Know What To Do) on nutikas haridusplatvorm hädaolukordadeks valmistumiseks.",
  faq2Q: "Millal rakendus saadaval on?",
  faq2A:
    "Kavandame käivitamist 2025. aastal. Jätke e-post, et saada teada esimesena.",
  faq3Q: "Kas KWTD on tasuta?",
  faq3A: "Põhifunktsioonid on tasuta. Plaanime ka Premium versiooni.",
  faq4Q: "Millistel platvormidel see saadaval on?",
  faq4A:
    "KWTD on saadaval veebirakenduse ja mobiilirakendusena (iOS ja Android).",
  faq5Q: "Kas minu andmed on kaitstud?",
  faq5A:
    "Jah. Teie andmed on krüpteeritud ja turvaliselt salvestatud. Me ei müü isikuandmeid.",
  footerTagline: "Teadmised päästab elusid.",
  footerPrivacy: "Privaatsuspoliitika",
  footerTerms: "Teenuse tingimused",
  footerContact: "Kontakt",
  footerBuiltWith: "",
};

const fi: Translations = {
  langCode: "fi",
  langName: "Suomi",
  navAbout: "Meistä",
  navHowItWorks: "Miten se toimii",
  navResources: "Resurssit",
  navFaq: "UKK",
  navSignIn: "Kirjaudu",
  navSignUp: "Rekisteröidy",
  heroTitle1: "Tiedätkö mitä tehdä",
  heroTitle2: "hätätilanteessa?",
  heroSubtitle:
    "KWTD on älykäs hätävalmiusplatformi. Tarkista valmiutesi ja suojaa perheesi.",
  heroGetStarted: "Aloita nyt",
  heroPeopleJoined: "847",
  heroPeopleJoinedLabel: "ihmistä valmistautuu jo",
  problemTitle: "Valmistautuminen pelastaa henkiä",
  problemSubtitle:
    "Suurin osa ihmisistä ei ole valmistautunut hätätilanteisiin. KWTD muuttaa tämän.",
  problemCard1Title: "Tulva",
  problemCard1Desc:
    "Tiedä milloin evakuoida ja miten suojata omaisuus tulvilta.",
  problemCard2Title: "Tulipalo",
  problemCard2Desc:
    "Opi reagoimaan välittömästi ja evakuoimaan rakennukset turvallisesti.",
  problemCard3Title: "Maanjäristys",
  problemCard3Desc:
    "Opi suojautumaan tärinöiden aikana ja mitä tehdä niiden jälkeen.",
  problemCard4Title: "Myrsky / Hurrikaani",
  problemCard4Desc:
    "Suojaudu äärimmäisiltä tuulilta ja varmista kotisi turvallisuus.",
  problemCard5Title: "Kemiallinen vaara",
  problemCard5Desc:
    "Opi turvallisuussäännöt vaarallisten aineiden vuotojen varalta.",
  problemCard6Title: "Sähkökatkos",
  problemCard6Desc:
    "Valmistaudu pitkittyviin sähkökatkoihin ja kata perustarpeesi.",
  problemCard7Title: "Maavyöry",
  problemCard7Desc:
    "Tunnista varoitusmerkit ja poistu vaarallisista alueista turvallisesti.",
  problemCard8Title: "Pandemia",
  problemCard8Desc: "Opi suojaamaan itsesi ja läheisesi epidemian aikana.",
  problemCard9Title: "Säteilyuhka",
  problemCard9Desc: "Tiedä menettelyt radioaktiivisen saastumisen varalta.",
  problemCard10Title: "Kyberhyökkäys",
  problemCard10Desc:
    "Suojaa tietosi ja tiedä miten toimia infrastruktuurin häiriön aikana.",
  problemCard11Title: "Räjähdys",
  problemCard11Desc: "Opi reagoimaan räjähdyksiin ja turvaamaan ympäristö.",
  problemCard12Title: "Kuivuus / Helleaalto",
  problemCard12Desc:
    "Varaa vesivaroja ja suojaudu äärimmäisiltä lämpötiloilta.",
  problemCard13Title: "Sotilaalliset toimet",
  problemCard13Desc:
    "Tiedä kuinka toimia aseellisen konfliktin aikana: evakuointireitit, suojat ja viestintä.",
  problemCard14Title: "Hybridi-iskut",
  problemCard14Desc:
    "Ymmärrä disinformaatio, infrastruktuurin sabotaasi ja koordinoidut kyber-fyysiset uhat.",
  problemCard15Title: "Joukkopaniikki",
  problemCard15Desc:
    "Pysy turvassa joukkopaniikissa ja massojen evakuoinneissa: kuinka liikkua väkijoukossa.",
  problemCard16Title: "Äärimmäinen kuumuus / kylmyys",
  problemCard16Desc:
    "Selviä helleaalloista ja kovista pakkasista: hypotermian, hypertermian merkit ja ensiapu.",
  howTitle: "Miten se toimii",
  howStep1Title: "Tee tietokilpailu",
  howStep1Desc:
    "Vastaa 5 lyhyeen kysymykseen tarkistaaksesi nykyisen valmiutesi.",
  howStep2Title: "Saa tuloksesi",
  howStep2Desc:
    "Saat henkilökohtaisen valmiuspisteytyksesi konkreettisilla vinkeillä.",
  howStep3Title: "Ole valmis",
  howStep3Desc: "Käytä KWTD-sovellusta valmiutesi jatkuvaan parantamiseen.",
  quizSectionTitle: "Tarkista valmiutesi",
  quizSectionDesc: "5 kysymystä. 3 minuuttia. Selvitä kuinka valmis olet.",
  quizStart: "Aloita tietokilpailu",
  quizQuestion: "Kysymys",
  quizOf: "/",
  quizNext: "Seuraava",
  quizBack: "Takaisin",
  quizFinish: "Lopeta",
  quizResult: "Pisteytys:",
  quizScore: "oikeaa vastausta",
  quizLevelBeginner: "Aloittelija",
  quizLevelIntermediate: "Keskitaso",
  quizLevelReady: "Valmis",
  quizLevelExpert: "Asiantuntija",
  quizEmailPrompt:
    "Jätä sähköpostisi ja ole ensimmäinen, joka saa tiedon KWTD:n lanseerauksesta!",
  quizEmailPlaceholder: "sinun@email.fi",
  quizEmailSubmit: "Ilmoita minulle",
  quizEmailSuccess: "Kiitos!",
  quizEmailSuccessDesc: "Sinulle ilmoitetaan kun KWTD lanseerataan.",
  q1Text: "Mitä teet ensin kun kuulet hälytyssireeniä?",
  q1A: "Ignoreoin sen ja odotan",
  q1B: "Menen turvalliseen paikkaan ja kuuntelen radiota",
  q1C: "Soitan naapureille",
  q1D: "Menen ulos katsomaan mitä tapahtuu",
  q2Text:
    "Kuinka monta litraa vettä per henkilö sinulla tulisi olla 72 tunniksi?",
  q2A: "1 litra",
  q2B: "3 litraa",
  q2C: "9 litraa",
  q2D: "15 litraa",
  q3Text: "Mitä hätälaukussa pitäisi olla?",
  q3A: "Vain asiakirjat ja raha",
  q3B: "Asiakirjat, vesi, ruoka, ensiapupakkaus, taskulamppu, puhelin",
  q3C: "Vaatteet ja elektroniikka",
  q3D: "Viikon ruokavarasto",
  q4Text: "Kuinka kauan terve ihminen voi selviytyä ilman ruokaa?",
  q4A: "24 tuntia",
  q4B: "3 päivää",
  q4C: "3 viikkoa",
  q4D: "3 kuukautta",
  q5Text: "Mistä löydät tietoa evakuointipisteistä kaupungissasi?",
  q5A: "En tiedä mistä etsiä",
  q5B: "Paikallisesta toimistosta tai kaupungin verkkosivuilta",
  q5C: "Facebookista",
  q5D: "Televisiosta",
  comingSoonTitle: "Viimeistelemme kehityksen",
  comingSoonSubtitle:
    "Ole ensimmäinen! Jätä sähköpostisi ja saa tietää KWTD:n lanseerauksesta.",
  comingSoonEmailPlaceholder: "sinun@email.fi",
  comingSoonSubmit: "Haluan olla ensimmäinen!",
  comingSoonSuccess: "Hienoa!",
  comingSoonSuccessDesc:
    "Olet listalla! Ilmoitamme sinulle kun KWTD on valmis.",
  faqTitle: "Usein kysytyt kysymykset",
  faq1Q: "Mikä on KWTD?",
  faq1A:
    "KWTD (Know What To Do) on älykäs koulutusplattformi hätätilanteiden varautumiseen.",
  faq2Q: "Milloin sovellus on saatavilla?",
  faq2A:
    "Suunnittelemme lanseerausta 2025. Jätä sähköpostisi saadaksesi tietää ensimmäisenä.",
  faq3Q: "Onko KWTD ilmainen?",
  faq3A: "Perustoiminnot ovat ilmaisia. Suunnittelemme myös Premium-versiota.",
  faq4Q: "Millä alustoilla se on saatavilla?",
  faq4A:
    "KWTD on saatavilla verkkosovelluksena ja mobiilisovelluksena (iOS ja Android).",
  faq5Q: "Ovatko tietoni turvassa?",
  faq5A:
    "Kyllä. Tietosi on salattu ja tallennettu turvallisesti. Emme myy henkilötietoja.",
  footerTagline: "Tieto pelastaa henkiä.",
  footerPrivacy: "Tietosuojakäytäntö",
  footerTerms: "Palveluehdot",
  footerContact: "Yhteystiedot",
  footerBuiltWith: "",
};

const sv: Translations = {
  langCode: "sv",
  langName: "Svenska",
  navAbout: "Om oss",
  navHowItWorks: "Hur det fungerar",
  navResources: "Resurser",
  navFaq: "FAQ",
  navSignIn: "Logga in",
  navSignUp: "Registrera dig",
  heroTitle1: "Vet du vad du ska göra",
  heroTitle2: "i en nödsituation?",
  heroSubtitle:
    "KWTD är den smarta plattformen för nödberedskap. Kontrollera din beredskap och skydda din familj.",
  heroGetStarted: "Kom igång",
  heroPeopleJoined: "847",
  heroPeopleJoinedLabel: "personer förbereder sig redan",
  problemTitle: "Beredskap räddar liv",
  problemSubtitle:
    "De flesta människor är inte förberedda på nödsituationer. KWTD ändrar på det.",
  problemCard1Title: "Översvämning",
  problemCard1Desc: "Vet när du ska evakuera och hur du skyddar dina ägodelar.",
  problemCard2Title: "Brand",
  problemCard2Desc: "Lär dig reagera omedelbart och evakuera byggnader säkert.",
  problemCard3Title: "Jordbävning",
  problemCard3Desc:
    "Lär dig hur du skyddar dig under skakningen och vad du gör efteråt.",
  problemCard4Title: "Storm / Orkan",
  problemCard4Desc: "Skydda dig mot extrema vindar och säkra ditt hem.",
  problemCard5Title: "Kemisk fara",
  problemCard5Desc: "Lär dig säkerhetsregler vid läckage av farliga ämnen.",
  problemCard6Title: "Strömavbrott",
  problemCard6Desc:
    "Förbered dig på längre strömavbrott och täck grundläggande behov.",
  problemCard7Title: "Jordskred",
  problemCard7Desc: "Känna igen varningssignaler och lämna riskzoner säkert.",
  problemCard8Title: "Pandemi",
  problemCard8Desc:
    "Lär dig skydda dig själv och nära och kära under en epidemi.",
  problemCard9Title: "Strålningshot",
  problemCard9Desc: "Känna till procedurerna vid radioaktiv kontaminering.",
  problemCard10Title: "Cyberattack",
  problemCard10Desc:
    "Skydda dina data och vet hur du agerar vid infrastrukturfel.",
  problemCard11Title: "Explosion",
  problemCard11Desc: "Lär dig reagera på explosioner och säkra omgivningen.",
  problemCard12Title: "Torka / Värmebölja",
  problemCard12Desc:
    "Lagra vattenförråd och skydda dig mot extrema temperaturer.",
  problemCard13Title: "Militära åtgärder",
  problemCard13Desc:
    "Vet hur du handlar under väpnade konflikter: evakueringsvägar, skyddsrum och kommunikation.",
  problemCard14Title: "Hybridattacker",
  problemCard14Desc:
    "Förstå desinformation, infrastruktursabotage och koordinerade cyber-fysiska hot.",
  problemCard15Title: "Masspanik",
  problemCard15Desc:
    "Håll dig säker vid stampeder och massutrymningar: hur man navigerar folkmassor.",
  problemCard16Title: "Extrem värme / kyla",
  problemCard16Desc:
    "Överleva värmeböljor och svår kyla: tecken på hypertermi, hypotermi och första hjälpen.",
  howTitle: "Hur det fungerar",
  howStep1Title: "Gör quizet",
  howStep1Desc:
    "Svara på 5 korta frågor för att kontrollera din nuvarande beredskap.",
  howStep2Title: "Få ditt resultat",
  howStep2Desc:
    "Få ett personligt beredskapsresultat med specifika förbättringstips.",
  howStep3Title: "Var förberedd",
  howStep3Desc:
    "Använd KWTD-appen för att kontinuerligt förbättra din beredskap.",
  quizSectionTitle: "Kontrollera din beredskap",
  quizSectionDesc: "5 frågor. 3 minuter. Ta reda på hur förberedd du är.",
  quizStart: "Starta quiz",
  quizQuestion: "Fråga",
  quizOf: "av",
  quizNext: "Nästa",
  quizBack: "Tillbaka",
  quizFinish: "Avsluta",
  quizResult: "Ditt resultat:",
  quizScore: "rätta svar",
  quizLevelBeginner: "Nybörjare",
  quizLevelIntermediate: "Medelnivå",
  quizLevelReady: "Redo",
  quizLevelExpert: "Expert",
  quizEmailPrompt:
    "Lämna din e-post och var den första som får veta om KWTD:s lansering!",
  quizEmailPlaceholder: "din@email.se",
  quizEmailSubmit: "Meddela mig",
  quizEmailSuccess: "Tack!",
  quizEmailSuccessDesc: "Du meddelas när KWTD lanseras.",
  q1Text: "Vad gör du först när du hör en alarmsiren?",
  q1A: "Ignorerar det och väntar",
  q1B: "Går till en säker plats och lyssnar på radio",
  q1C: "Ringer grannarna",
  q1D: "Går ut för att se vad som händer",
  q2Text: "Hur många liter vatten per person bör du ha för 72 timmar?",
  q2A: "1 liter",
  q2B: "3 liter",
  q2C: "9 liter",
  q2D: "15 liter",
  q3Text: "Vad ska finnas i en nödväska?",
  q3A: "Bara dokument och pengar",
  q3B: "Dokument, vatten, mat, första hjälpen-kit, ficklampa, telefon",
  q3C: "Kläder och elektronik",
  q3D: "En veckas matförråd",
  q4Text: "Hur länge kan en frisk person överleva utan mat?",
  q4A: "24 timmar",
  q4B: "3 dagar",
  q4C: "3 veckor",
  q4D: "3 månader",
  q5Text: "Var hittar du information om evakueringspunkter i din stad?",
  q5A: "Vet inte var jag ska leta",
  q5B: "På kommunen eller stadens webbplats",
  q5C: "På Facebook",
  q5D: "På TV",
  comingSoonTitle: "Vi avslutar utvecklingen",
  comingSoonSubtitle:
    "Var den första! Lämna din e-post och få veta om KWTD:s lansering.",
  comingSoonEmailPlaceholder: "din@email.se",
  comingSoonSubmit: "Jag vill vara den första!",
  comingSoonSuccess: "Fantastiskt!",
  comingSoonSuccessDesc: "Du är på listan! Vi meddelar dig när KWTD är klart.",
  faqTitle: "Vanliga frågor",
  faq1Q: "Vad är KWTD?",
  faq1A:
    "KWTD (Know What To Do) är en intelligent utbildningsplattform för beredskap inför nödsituationer.",
  faq2Q: "När är appen tillgänglig?",
  faq2A: "Vi planerar lansering 2025. Lämna din e-post för att få veta först.",
  faq3Q: "Är KWTD gratis?",
  faq3A: "Grundfunktioner är gratis. Vi planerar även en Premium-version.",
  faq4Q: "På vilka plattformar finns det?",
  faq4A: "KWTD finns som webbapp och mobilapp (iOS och Android).",
  faq5Q: "Är mina data säkra?",
  faq5A:
    "Ja. Dina data är krypterade och säkert lagrade. Vi säljer inte personuppgifter.",
  footerTagline: "Kunskap räddar liv.",
  footerPrivacy: "Integritetspolicy",
  footerTerms: "Användarvillkor",
  footerContact: "Kontakt",
  footerBuiltWith: "",
};

const da: Translations = {
  langCode: "da",
  langName: "Dansk",
  navAbout: "Om os",
  navHowItWorks: "Sådan virker det",
  navResources: "Ressourcer",
  navFaq: "FAQ",
  navSignIn: "Log ind",
  navSignUp: "Tilmeld dig",
  heroTitle1: "Ved du hvad du skal gøre",
  heroTitle2: "i en nødsituation?",
  heroSubtitle:
    "KWTD er den smarte beredskabsplatform. Tjek din beredskab og beskyt din familie.",
  heroGetStarted: "Kom i gang",
  heroPeopleJoined: "847",
  heroPeopleJoinedLabel: "mennesker forbereder sig allerede",
  problemTitle: "Beredskab redder liv",
  problemSubtitle:
    "De fleste mennesker er ikke forberedt på nødsituationer. KWTD ændrer det.",
  problemCard1Title: "Oversvømmelse",
  problemCard1Desc:
    "Vid hvornår du skal evakuere og hvordan du beskytter dine ejendele.",
  problemCard2Title: "Brand",
  problemCard2Desc:
    "Lær at reagere øjeblikkeligt og evakuere bygninger sikkert.",
  problemCard3Title: "Jordskælv",
  problemCard3Desc:
    "Lær hvordan du beskytter dig under rystelserne og hvad du gør bagefter.",
  problemCard4Title: "Storm / Orkan",
  problemCard4Desc: "Beskyt dig mod ekstreme vinde og sikr dit hjem.",
  problemCard5Title: "Kemisk fare",
  problemCard5Desc: "Lær sikkerhedsregler ved lækage af farlige materialer.",
  problemCard6Title: "Strømafbrydelse",
  problemCard6Desc: "Forbered dig på langvarige strømafbrydelser.",
  problemCard7Title: "Jordskred",
  problemCard7Desc: "Genkend advarselstegn og forlad risikoområder sikkert.",
  problemCard8Title: "Pandemi",
  problemCard8Desc: "Lær at beskytte dig selv og dine kære under en epidemi.",
  problemCard9Title: "Strålingstrussel",
  problemCard9Desc: "Kend procedurerne ved radioaktiv forurening.",
  problemCard10Title: "Cyberangreb",
  problemCard10Desc:
    "Beskyt dine data og vid hvordan du handler ved infrastrukturfejl.",
  problemCard11Title: "Eksplosion",
  problemCard11Desc: "Lær at reagere på eksplosioner og sikre omgivelserne.",
  problemCard12Title: "Tørke / Hedebølge",
  problemCard12Desc:
    "Opbevar vandforsyninger og beskyt dig mod ekstreme temperaturer.",
  problemCard13Title: "Militære aktioner",
  problemCard13Desc:
    "Vid, hvordan man handler under væbnede konflikter: evakueringsruter, beskyttelsesrum og kommunikation.",
  problemCard14Title: "Hybridangreb",
  problemCard14Desc:
    "Forstå desinformation, infrastruktursabotage og koordinerede cyber-fysiske trusler.",
  problemCard15Title: "Massepanik",
  problemCard15Desc:
    "Hold dig sikker ved stampeder og masseevakueringer: hvordan man navigerer folkemasser.",
  problemCard16Title: "Ekstrem varme / kulde",
  problemCard16Desc:
    "Overlev hedebølger og svær kulde: tegn på hypertermi, hypotermi og første hjælp.",
  howTitle: "Sådan virker det",
  howStep1Title: "Tag quizzen",
  howStep1Desc:
    "Svar på 5 korte spørgsmål for at tjekke din nuværende beredskab.",
  howStep2Title: "Få dit resultat",
  howStep2Desc:
    "Modtag en personlig beredskapsscore med specifikke forbedringer.",
  howStep3Title: "Vær forberedt",
  howStep3Desc: "Brug KWTD-appen til løbende at forbedre din beredskab.",
  quizSectionTitle: "Tjek din beredskab",
  quizSectionDesc: "5 spørgsmål. 3 minutter. Find ud af hvor forberedt du er.",
  quizStart: "Start quiz",
  quizQuestion: "Spørgsmål",
  quizOf: "af",
  quizNext: "Næste",
  quizBack: "Tilbage",
  quizFinish: "Afslut",
  quizResult: "Dit resultat:",
  quizScore: "rigtige svar",
  quizLevelBeginner: "Begynder",
  quizLevelIntermediate: "Mellemniveau",
  quizLevelReady: "Klar",
  quizLevelExpert: "Ekspert",
  quizEmailPrompt:
    "Efterlad din e-mail og vær den første til at vide om KWTD's lancering!",
  quizEmailPlaceholder: "din@email.dk",
  quizEmailSubmit: "Giv mig besked",
  quizEmailSuccess: "Tak!",
  quizEmailSuccessDesc: "Du får besked når KWTD lanceres.",
  q1Text: "Hvad gør du først når du hører en alarmsirene?",
  q1A: "Ignorerer det og venter",
  q1B: "Går til et sikkert sted og lytter til radio",
  q1C: "Ringer til naboerne",
  q1D: "Går ud for at se hvad der sker",
  q2Text: "Hvor mange liter vand per person bør du have til 72 timer?",
  q2A: "1 liter",
  q2B: "3 liter",
  q2C: "9 liter",
  q2D: "15 liter",
  q3Text: "Hvad skal være i en nødtaske?",
  q3A: "Kun dokumenter og penge",
  q3B: "Dokumenter, vand, mad, førstehjælpssæt, lommelygte, telefon",
  q3C: "Tøj og elektronik",
  q3D: "En uges madforsyning",
  q4Text: "Hvor længe kan et sundt menneske overleve uden mad?",
  q4A: "24 timer",
  q4B: "3 dage",
  q4C: "3 uger",
  q4D: "3 måneder",
  q5Text: "Hvor finder du information om evakueringspunkter i din by?",
  q5A: "Ved ikke hvor jeg skal lede",
  q5B: "På det lokale kontor eller byens hjemmeside",
  q5C: "På Facebook",
  q5D: "I TV",
  comingSoonTitle: "Vi afslutter udviklingen",
  comingSoonSubtitle:
    "Vær den første! Efterlad din e-mail og find ud af om KWTD's lancering.",
  comingSoonEmailPlaceholder: "din@email.dk",
  comingSoonSubmit: "Jeg vil være den første!",
  comingSoonSuccess: "Fantastisk!",
  comingSoonSuccessDesc:
    "Du er på listen! Vi giver dig besked når KWTD er klar.",
  faqTitle: "Ofte stillede spørgsmål",
  faq1Q: "Hvad er KWTD?",
  faq1A:
    "KWTD (Know What To Do) er en intelligent uddannelsesplatform til beredskab over for nødsituationer.",
  faq2Q: "Hvornår er appen tilgængelig?",
  faq2A:
    "Vi planlægger lancering i 2025. Efterlad din e-mail for at få besked først.",
  faq3Q: "Er KWTD gratis?",
  faq3A:
    "Grundlæggende funktioner er gratis. Vi planlægger også en Premium-version.",
  faq4Q: "På hvilke platforme er det tilgængeligt?",
  faq4A: "KWTD er tilgængeligt som webapp og mobilapp (iOS og Android).",
  faq5Q: "Er mine data sikre?",
  faq5A:
    "Ja. Dine data er krypterede og sikkert gemt. Vi sælger ikke personlige data.",
  footerTagline: "Viden redder liv.",
  footerPrivacy: "Privatlivspolitik",
  footerTerms: "Servicevilkår",
  footerContact: "Kontakt",
  footerBuiltWith: "",
};

const no: Translations = {
  langCode: "no",
  langName: "Norsk",
  navAbout: "Om oss",
  navHowItWorks: "Slik fungerer det",
  navResources: "Ressurser",
  navFaq: "FAQ",
  navSignIn: "Logg inn",
  navSignUp: "Registrer deg",
  heroTitle1: "Vet du hva du skal gjøre",
  heroTitle2: "i en nødsituasjon?",
  heroSubtitle:
    "KWTD er den smarte beredskapsplattformen. Sjekk din beredskap og beskytt familien din.",
  heroGetStarted: "Kom i gang",
  heroPeopleJoined: "847",
  heroPeopleJoinedLabel: "mennesker forbereder seg allerede",
  problemTitle: "Beredskap redder liv",
  problemSubtitle:
    "De fleste mennesker er ikke forberedt på nødsituasjoner. KWTD endrer det.",
  problemCard1Title: "Flom",
  problemCard1Desc:
    "Vet når du skal evakuere og hvordan du beskytter eiendelene dine.",
  problemCard2Title: "Brann",
  problemCard2Desc: "Lær å reagere umiddelbart og evakuere bygninger trygt.",
  problemCard3Title: "Jordskjelv",
  problemCard3Desc:
    "Lær hvordan du beskytter deg under rystelsene og hva du gjør etterpå.",
  problemCard4Title: "Storm / Orkan",
  problemCard4Desc: "Beskytt deg mot ekstreme vinder og sikre hjemmet ditt.",
  problemCard5Title: "Kjemisk fare",
  problemCard5Desc: "Lær sikkerhetsregler ved lekkasje av farlige materialer.",
  problemCard6Title: "Strømbrudd",
  problemCard6Desc: "Forbered deg på langvarige strømbrudd.",
  problemCard7Title: "Jordskred",
  problemCard7Desc: "Gjenkjenn advarselstegn og forlat risikoområder trygt.",
  problemCard8Title: "Pandemi",
  problemCard8Desc: "Lær å beskytte deg selv og kjære under en epidemi.",
  problemCard9Title: "Strålingstruskel",
  problemCard9Desc: "Kjenn prosedyrene ved radioaktiv forurensning.",
  problemCard10Title: "Cyberangrep",
  problemCard10Desc:
    "Beskytt dataene dine og vet hvordan du handler ved infrastrukturfeil.",
  problemCard11Title: "Eksplosjon",
  problemCard11Desc: "Lær å reagere på eksplosjoner og sikre omgivelsene.",
  problemCard12Title: "Tørke / Hetebølge",
  problemCard12Desc:
    "Lagre vannforsyninger og beskytt deg mot ekstreme temperaturer.",
  problemCard13Title: "Militære aksjoner",
  problemCard13Desc:
    "Vet hvordan du handler under væpnede konflikter: evakueringsruter, tilfluktsrom og kommunikasjon.",
  problemCard14Title: "Hybridangrep",
  problemCard14Desc:
    "Forstå desinformasjon, infrastruktursabotasje og koordinerte cyber-fysiske trusler.",
  problemCard15Title: "Massepanikk",
  problemCard15Desc:
    "Hold deg trygg ved stampeder og masseevakueringer: hvordan navigere folkemengder.",
  problemCard16Title: "Ekstrem varme / kulde",
  problemCard16Desc:
    "Overlev hetebølger og kraftig kulde: tegn på hypertermi, hypotermi og førstehjelp.",
  howTitle: "Slik fungerer det",
  howStep1Title: "Ta quizen",
  howStep1Desc:
    "Svar på 5 korte spørsmål for å sjekke din nåværende beredskap.",
  howStep2Title: "Få resultatet ditt",
  howStep2Desc: "Motta en personlig beredskapsscore med konkrete forbedringer.",
  howStep3Title: "Vær forberedt",
  howStep3Desc: "Bruk KWTD-appen til kontinuerlig å forbedre beredskapen din.",
  quizSectionTitle: "Sjekk beredskapen din",
  quizSectionDesc: "5 spørsmål. 3 minutter. Finn ut hvor forberedt du er.",
  quizStart: "Start quiz",
  quizQuestion: "Spørsmål",
  quizOf: "av",
  quizNext: "Neste",
  quizBack: "Tilbake",
  quizFinish: "Avslutt",
  quizResult: "Resultatet ditt:",
  quizScore: "riktige svar",
  quizLevelBeginner: "Nybegynner",
  quizLevelIntermediate: "Middels nivå",
  quizLevelReady: "Klar",
  quizLevelExpert: "Ekspert",
  quizEmailPrompt:
    "Legg igjen e-posten din og vær den første som får vite om KWTD-lanseringen!",
  quizEmailPlaceholder: "din@email.no",
  quizEmailSubmit: "Gi meg beskjed",
  quizEmailSuccess: "Takk!",
  quizEmailSuccessDesc: "Du får beskjed når KWTD lanseres.",
  q1Text: "Hva gjør du først når du hører en alarmsirene?",
  q1A: "Ignorerer det og venter",
  q1B: "Går til et trygt sted og lytter til radio",
  q1C: "Ringer naboene",
  q1D: "Går ut for å se hva som skjer",
  q2Text: "Hvor mange liter vann per person bør du ha for 72 timer?",
  q2A: "1 liter",
  q2B: "3 liter",
  q2C: "9 liter",
  q2D: "15 liter",
  q3Text: "Hva skal være i en nødveske?",
  q3A: "Bare dokumenter og penger",
  q3B: "Dokumenter, vann, mat, førstehjelpssett, lommelykt, telefon",
  q3C: "Klær og elektronikk",
  q3D: "En ukes matforsyning",
  q4Text: "Hvor lenge kan et friskt menneske overleve uten mat?",
  q4A: "24 timer",
  q4B: "3 dager",
  q4C: "3 uker",
  q4D: "3 måneder",
  q5Text: "Hvor finner du informasjon om evakueringspunkter i byen din?",
  q5A: "Vet ikke hvor jeg skal lete",
  q5B: "På det lokale kontoret eller byens nettside",
  q5C: "På Facebook",
  q5D: "På TV",
  comingSoonTitle: "Vi fullfører utviklingen",
  comingSoonSubtitle:
    "Vær den første! Legg igjen e-posten din og finn ut om KWTD-lanseringen.",
  comingSoonEmailPlaceholder: "din@email.no",
  comingSoonSubmit: "Jeg vil være den første!",
  comingSoonSuccess: "Fantastisk!",
  comingSoonSuccessDesc:
    "Du er på listen! Vi gir deg beskjed når KWTD er klar.",
  faqTitle: "Ofte stilte spørsmål",
  faq1Q: "Hva er KWTD?",
  faq1A:
    "KWTD (Know What To Do) er en intelligent utdanningsplattform for beredskap mot nødsituasjoner.",
  faq2Q: "Når er appen tilgjengelig?",
  faq2A:
    "Vi planlegger lansering i 2025. Legg igjen e-posten for å få vite først.",
  faq3Q: "Er KWTD gratis?",
  faq3A:
    "Grunnleggende funksjoner er gratis. Vi planlegger også en Premium-versjon.",
  faq4Q: "På hvilke plattformer er det tilgjengelig?",
  faq4A: "KWTD er tilgjengelig som nettapp og mobilapp (iOS og Android).",
  faq5Q: "Er dataene mine trygge?",
  faq5A:
    "Ja. Dataene dine er kryptert og trygt lagret. Vi selger ikke personlige data.",
  footerTagline: "Kunnskap redder liv.",
  footerPrivacy: "Personvernpolicy",
  footerTerms: "Tjenestevilkår",
  footerContact: "Kontakt",
  footerBuiltWith: "",
};

export const translations: Record<LanguageCode, Translations> = {
  pl,
  en,
  de,
  fr,
  es,
  ru,
  uk,
  it,
  nl,
  cs,
  sk,
  hu,
  ro,
  bg,
  hr,
  sr,
  sl,
  lt,
  lv,
  et,
  fi,
  sv,
  da,
  no,
};

export const SUPPORTED_LANGUAGES = Object.keys(translations) as LanguageCode[];

export function detectLanguage(): LanguageCode {
  const nav = navigator.language || "en";
  const prefix = nav.split("-")[0].toLowerCase() as LanguageCode;
  if (SUPPORTED_LANGUAGES.includes(prefix)) return prefix;
  return "en";
}

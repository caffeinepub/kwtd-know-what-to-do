import type { Translations } from "@/i18n/translations";
import { motion } from "motion/react";

interface ProblemSectionProps {
  t: Translations;
}

const FloodIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="#EFF6FF" />
    <path
      d="M8 26c2-4 5-7 12-7s10 3 12 7"
      stroke="#2563EB"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M6 30c2-3 6-6 14-6s12 3 14 6"
      stroke="#2563EB"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.5"
    />
    <ellipse cx="20" cy="16" rx="5" ry="6" fill="#93C5FD" opacity="0.7" />
    <path
      d="M20 10v3M20 22v2"
      stroke="#2563EB"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const FireIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="#FFF7ED" />
    <path
      d="M20 8c0 5-8 8-8 14a8 8 0 0016 0c0-6-8-9-8-14z"
      fill="#FED7AA"
      stroke="#F59E0B"
      strokeWidth="2"
    />
    <path
      d="M20 18c0 3-4 4-4 7a4 4 0 008 0c0-3-4-4-4-7z"
      fill="#F97316"
      opacity="0.8"
    />
  </svg>
);

const EarthquakeIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="#F0FDF4" />
    <path
      d="M8 22l4-4 4 4 4-4 4 4 4-4 4 4"
      stroke="#16A34A"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 28l4-4 4 4 4-4 4 4 4-4 4 4"
      stroke="#16A34A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.5"
    />
    <path
      d="M14 12h12M20 8v8"
      stroke="#16A34A"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const StormIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="#F5F3FF" />
    <path
      d="M20 10c5.5 0 10 4.5 10 10s-4.5 10-10 10"
      stroke="#7C3AED"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M20 14c3.3 0 6 2.7 6 6s-2.7 6-6 6"
      stroke="#7C3AED"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
    />
    <circle cx="20" cy="20" r="2.5" fill="#7C3AED" />
    <path
      d="M14 8l-2 5M10 14l-5-2"
      stroke="#7C3AED"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
);

const ChemicalIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="#FEFCE8" />
    <path
      d="M17 10h6v8l6 10H11l6-10V10z"
      fill="#FEF08A"
      stroke="#CA8A04"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M17 14h6"
      stroke="#CA8A04"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="20" cy="24" r="2" fill="#CA8A04" />
  </svg>
);

const PowerIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="#FFF7ED" />
    <path
      d="M22 10l-6 11h8l-6 9"
      stroke="#EA580C"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8l2 2M28 8l-2 2M8 20h3M29 20h3"
      stroke="#EA580C"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
);

const AvalancheIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="#F0F9FF" />
    <path
      d="M8 30L20 10l12 20H8z"
      fill="#BAE6FD"
      stroke="#0284C7"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M10 26c4-3 8-4 14-2"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.8"
    />
    <path
      d="M13 30c2-2 5-3 9-2"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

const PandemicIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="#F0FDF4" />
    <circle
      cx="20"
      cy="20"
      r="7"
      fill="#BBF7D0"
      stroke="#16A34A"
      strokeWidth="2"
    />
    <circle cx="20" cy="20" r="3" fill="#16A34A" />
    <path
      d="M20 10v3M20 27v3M10 20H7M33 20h-3"
      stroke="#16A34A"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="14" cy="14" r="1.5" fill="#16A34A" />
    <circle cx="26" cy="14" r="1.5" fill="#16A34A" />
    <circle cx="14" cy="26" r="1.5" fill="#16A34A" />
    <circle cx="26" cy="26" r="1.5" fill="#16A34A" />
  </svg>
);

const RadiationIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="#FEF9C3" />
    <circle cx="20" cy="20" r="3.5" fill="#854D0E" />
    <path
      d="M20 16.5L16.5 10.5A9 9 0 0112 16l6 .5z"
      fill="#CA8A04"
      opacity="0.8"
    />
    <path
      d="M20 16.5L23.5 10.5A9 9 0 0128 16l-6 .5z"
      fill="#CA8A04"
      opacity="0.8"
    />
    <path d="M20 23.5L12 28a9 9 0 010-12l5 5z" fill="#CA8A04" opacity="0.5" />
    <circle
      cx="20"
      cy="20"
      r="9"
      stroke="#CA8A04"
      strokeWidth="1.5"
      strokeDasharray="3 3"
    />
  </svg>
);

const CyberIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="#EFF6FF" />
    <rect
      x="10"
      y="13"
      width="20"
      height="13"
      rx="2"
      stroke="#2563EB"
      strokeWidth="2"
    />
    <path
      d="M15 20h2l2-3 2 6 2-3h2"
      stroke="#2563EB"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 30h10"
      stroke="#2563EB"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M20 26v4" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ExplosionIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="#FFF7ED" />
    <path
      d="M20 8l2 6h6l-5 4 2 7-5-4-5 4 2-7-5-4h6z"
      fill="#FDBA74"
      stroke="#EA580C"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M12 10l2 3M28 10l-2 3M8 22l3-1M32 22l-3-1"
      stroke="#EA580C"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
);

const DroughtIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="#FFFBEB" />
    <circle
      cx="20"
      cy="14"
      r="6"
      fill="#FDE68A"
      stroke="#D97706"
      strokeWidth="2"
    />
    <path d="M20 22v3" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M12 28c2-2 5-3 8-3s6 1 8 3"
      stroke="#D97706"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.5"
    />
    <path
      d="M8 14h4M28 14h4M20 6V8"
      stroke="#D97706"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

const MilitaryIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="#FFF1F2" />
    <path
      d="M20 8l10 5v7c0 5-4 9-10 11C14 29 10 25 10 20v-7l10-5z"
      fill="#FECDD3"
      stroke="#DC2626"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M17 20l2 2 4-4"
      stroke="#DC2626"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HybridIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="#FAF5FF" />
    <circle cx="20" cy="20" r="3" fill="#7C3AED" />
    <circle cx="10" cy="14" r="2" fill="#7C3AED" opacity="0.7" />
    <circle cx="30" cy="14" r="2" fill="#7C3AED" opacity="0.7" />
    <circle cx="10" cy="26" r="2" fill="#7C3AED" opacity="0.7" />
    <circle cx="30" cy="26" r="2" fill="#7C3AED" opacity="0.7" />
    <path
      d="M12 15l6 4M28 15l-6 4M12 25l6-4M28 25l-6-4"
      stroke="#7C3AED"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M20 9v5M20 26v5M9 20h5M26 20h5"
      stroke="#7C3AED"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.4"
    />
  </svg>
);

const PanicIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="#FFF7ED" />
    <circle cx="20" cy="13" r="3" fill="#EA580C" opacity="0.8" />
    <path d="M20 16v8" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M16 19l-4 3M24 19l4 3"
      stroke="#EA580C"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M17 24l-2 4M23 24l2 4"
      stroke="#EA580C"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M8 12l3 2M32 12l-3 2M8 28l3-2M32 28l-3-2"
      stroke="#EA580C"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.4"
    />
  </svg>
);

const HeatColdIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="20" cy="20" r="20" fill="#F0F9FF" />
    <path
      d="M12 20a8 8 0 010-8"
      stroke="#F59E0B"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M28 20a8 8 0 000 8"
      stroke="#0EA5E9"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <rect x="18" y="10" width="4" height="14" rx="2" fill="#94A3B8" />
    <circle cx="20" cy="26" r="4" fill="#EF4444" />
    <path
      d="M20 10v2M20 22v2"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

export function ProblemSection({ t }: ProblemSectionProps) {
  const cards = [
    {
      title: t.problemCard1Title,
      desc: t.problemCard1Desc,
      icon: <FloodIcon />,
    },
    {
      title: t.problemCard2Title,
      desc: t.problemCard2Desc,
      icon: <FireIcon />,
    },
    {
      title: t.problemCard3Title,
      desc: t.problemCard3Desc,
      icon: <EarthquakeIcon />,
    },
    {
      title: t.problemCard4Title,
      desc: t.problemCard4Desc,
      icon: <StormIcon />,
    },
    {
      title: t.problemCard5Title,
      desc: t.problemCard5Desc,
      icon: <ChemicalIcon />,
    },
    {
      title: t.problemCard6Title,
      desc: t.problemCard6Desc,
      icon: <PowerIcon />,
    },
    {
      title: t.problemCard7Title,
      desc: t.problemCard7Desc,
      icon: <AvalancheIcon />,
    },
    {
      title: t.problemCard8Title,
      desc: t.problemCard8Desc,
      icon: <PandemicIcon />,
    },
    {
      title: t.problemCard9Title,
      desc: t.problemCard9Desc,
      icon: <RadiationIcon />,
    },
    {
      title: t.problemCard10Title,
      desc: t.problemCard10Desc,
      icon: <CyberIcon />,
    },
    {
      title: t.problemCard11Title,
      desc: t.problemCard11Desc,
      icon: <ExplosionIcon />,
    },
    {
      title: t.problemCard12Title,
      desc: t.problemCard12Desc,
      icon: <DroughtIcon />,
    },
    {
      title: t.problemCard13Title,
      desc: t.problemCard13Desc,
      icon: <MilitaryIcon />,
    },
    {
      title: t.problemCard14Title,
      desc: t.problemCard14Desc,
      icon: <HybridIcon />,
    },
    {
      title: t.problemCard15Title,
      desc: t.problemCard15Desc,
      icon: <PanicIcon />,
    },
    {
      title: t.problemCard16Title,
      desc: t.problemCard16Desc,
      icon: <HeatColdIcon />,
    },
  ];

  return (
    <section id="o-nas" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
            {t.problemTitle}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.problemSubtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group bg-white border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              data-ocid={`problem.item.${i + 1}`}
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-base font-bold font-display text-foreground mb-1.5">
                {card.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

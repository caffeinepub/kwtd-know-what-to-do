import type { Translations } from "@/i18n/translations";
import { motion } from "motion/react";

interface HowItWorksSectionProps {
  t: Translations;
}

export function HowItWorksSection({ t }: HowItWorksSectionProps) {
  const steps = [
    {
      num: "01",
      title: t.howStep1Title,
      desc: t.howStep1Desc,
      color: "bg-blue-50 text-brand-blue",
      dotColor: "bg-brand-blue",
    },
    {
      num: "02",
      title: t.howStep2Title,
      desc: t.howStep2Desc,
      color: "bg-amber-50 text-brand-amber",
      dotColor: "bg-brand-amber",
    },
    {
      num: "03",
      title: t.howStep3Title,
      desc: t.howStep3Desc,
      color: "bg-green-50 text-green-600",
      dotColor: "bg-green-500",
    },
  ];

  return (
    <section id="jak-to-dziala" className="py-20 lg:py-28 bg-section-alt">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground">
            {t.howTitle}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden sm:block absolute top-8 left-[16.66%] right-[16.66%] h-0.5 bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center text-center relative"
              data-ocid={`how.item.${i + 1}`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-extrabold font-display mb-6 ${step.color} relative z-10`}
              >
                {step.num}
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-56">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

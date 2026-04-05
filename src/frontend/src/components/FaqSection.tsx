import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Translations } from "@/i18n/translations";
import { motion } from "motion/react";

interface FaqSectionProps {
  t: Translations;
}

const FAQ_KEYS = ["faq1", "faq2", "faq3", "faq4", "faq5"] as const;

export function FaqSection({ t }: FaqSectionProps) {
  const faqs = [
    { key: FAQ_KEYS[0], q: t.faq1Q, a: t.faq1A },
    { key: FAQ_KEYS[1], q: t.faq2Q, a: t.faq2A },
    { key: FAQ_KEYS[2], q: t.faq3Q, a: t.faq3A },
    { key: FAQ_KEYS[3], q: t.faq4Q, a: t.faq4A },
    { key: FAQ_KEYS[4], q: t.faq5Q, a: t.faq5A },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-section-alt">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground">
            {t.faqTitle}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
          data-ocid="faq.panel"
        >
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.key}
                value={faq.key}
                className="bg-white border border-border rounded-xl px-6 shadow-xs"
                data-ocid={`faq.item.${i + 1}`}
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

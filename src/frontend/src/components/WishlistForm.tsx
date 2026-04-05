import type { Translations } from "@/i18n/translations";
import { CheckCircle2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface WishlistFormProps {
  t: Translations;
  variant?: "default" | "compact";
}

export function WishlistForm({ t, variant = "default" }: WishlistFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      setError("Podaj poprawny adres email");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-3 text-center"
          data-ocid="wishlist.success_state"
        >
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <p className="text-xl font-bold font-display text-foreground">
            {t.comingSoonSuccess || t.quizEmailSuccess}
          </p>
          <p className="text-muted-foreground text-sm">
            {t.comingSoonSuccessDesc || t.quizEmailSuccessDesc}
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className={
            variant === "compact"
              ? "flex gap-2 w-full"
              : "flex flex-col gap-3 w-full"
          }
          data-ocid="wishlist.panel"
        >
          <div className={variant === "compact" ? "flex-1" : "w-full"}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.comingSoonEmailPlaceholder}
              className="w-full px-4 py-3 rounded-full border border-border bg-white text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
              data-ocid="wishlist.input"
              autoComplete="email"
              name="email"
            />
            {error && (
              <p
                className="text-red-500 text-xs mt-1 ml-2"
                data-ocid="wishlist.error_state"
              >
                {error}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-brand-blue text-white font-semibold text-sm hover:bg-brand-blue-hover active:scale-95 transition-all whitespace-nowrap"
            data-ocid="wishlist.submit_button"
          >
            {t.comingSoonSubmit}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

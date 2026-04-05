import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Translations } from "@/i18n/translations";
import { ShieldAlert } from "lucide-react";
import { WishlistForm } from "./WishlistForm";

interface ComingSoonModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  t: Translations;
}

export function ComingSoonModal({
  open,
  onOpenChange,
  t,
}: ComingSoonModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-md rounded-2xl p-8"
        data-ocid="coming_soon.dialog"
      >
        <DialogHeader className="items-center text-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-brand-blue flex items-center justify-center mx-auto">
            <ShieldAlert className="w-9 h-9 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold font-display text-foreground">
            {t.comingSoonTitle}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-base">
            {t.comingSoonSubtitle}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <WishlistForm t={t} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

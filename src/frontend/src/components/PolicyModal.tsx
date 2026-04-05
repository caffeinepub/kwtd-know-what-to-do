import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  content: string;
}

export function PolicyModal({
  open,
  onOpenChange,
  title,
  content,
}: PolicyModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-full">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold font-display">
            {title}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <pre className="whitespace-pre-wrap text-sm text-muted-foreground leading-relaxed font-sans">
            {content}
          </pre>
        </ScrollArea>
        <div className="flex justify-end pt-2">
          <Button onClick={() => onOpenChange(false)} className="rounded-full">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

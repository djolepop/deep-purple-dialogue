
import { cn } from "@/lib/utils";

export const ChatMessage = ({ 
  message, 
  isUser, 
  timestamp 
}: { 
  message: string; 
  isUser: boolean; 
  timestamp: string; 
}) => (
  <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
    <div className={cn(
      "max-w-[85%] rounded-lg p-4 mb-4",
      isUser
        ? "bg-primary text-primary-foreground"
        : "bg-secondary text-secondary-foreground border border-border"
    )}>
      <div className="whitespace-pre-wrap">{message}</div>
      <div className={cn(
        "text-xs mt-2",
        isUser ? "text-primary-foreground/70" : "text-muted-foreground"
      )}>{timestamp}</div>
    </div>
  </div>
);


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp } from "lucide-react";

export const ChatInput = ({ 
  onSendMessage, 
  isLoading = false 
}: { 
  onSendMessage: (message: string) => void; 
  isLoading?: boolean; 
}) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t">
      <div className="flex items-end gap-2">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSubmit(e)}
          placeholder="Type your message..."
          className="resize-none min-h-[60px]"
          disabled={isLoading}
        />
        <Button 
          type="submit" 
          size="icon" 
          className="h-[60px] w-[60px]"
          disabled={!message.trim() || isLoading}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
};

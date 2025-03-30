
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp } from "lucide-react";

type ChatInputProps = {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
};

export const ChatInput = ({ onSendMessage, isLoading = false }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t">
      <div className="flex items-end gap-2">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="resize-none min-h-[60px]"
          disabled={isLoading}
        />
        <Button 
          type="submit" 
          size="icon" 
          className="h-[60px] w-[60px] bg-primary hover:bg-primary/90"
          disabled={!message.trim() || isLoading}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
};

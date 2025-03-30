
import { ChatInterface } from "@/components/ChatInterface";
import { ButtonColorOptions } from "@/components/ButtonColorOptions";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X } from "lucide-react";

const Index = () => {
  const [showColorOptions, setShowColorOptions] = useState(true);
  
  return (
    <div className="relative">
      {showColorOptions && (
        <div className="fixed top-4 right-4 z-50 max-w-md">
          <div className="relative">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setShowColorOptions(false)}
              className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-background/80 backdrop-blur-sm border border-border z-10"
            >
              <X className="h-4 w-4" />
            </Button>
            <ButtonColorOptions />
          </div>
        </div>
      )}
      <ChatInterface />
    </div>
  );
};

export default Index;

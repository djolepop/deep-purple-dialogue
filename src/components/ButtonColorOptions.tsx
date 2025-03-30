
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  LayoutDashboard, 
  MessageCircle, 
  Settings, 
  Sparkles 
} from "lucide-react";

type ColorOption = {
  name: string;
  primary: string;
  secondary: string;
  description: string;
};

const colorOptions: ColorOption[] = [
  {
    name: "Ocean Blue",
    primary: "bg-[#0EA5E9] hover:bg-[#0891CE] text-white",
    secondary: "bg-[#075985] hover:bg-[#0C4A6E] text-white",
    description: "Current style - Professional blue tone"
  },
  {
    name: "Emerald Green",
    primary: "bg-[#10B981] hover:bg-[#059669] text-white",
    secondary: "bg-[#047857] hover:bg-[#065F46] text-white",
    description: "Fresh and natural green tone"
  },
  {
    name: "Ruby Red",
    primary: "bg-[#EF4444] hover:bg-[#DC2626] text-white",
    secondary: "bg-[#B91C1C] hover:bg-[#991B1B] text-white",
    description: "Bold and energetic red tone"
  },
  {
    name: "Amber Gold",
    primary: "bg-[#F59E0B] hover:bg-[#D97706] text-white",
    secondary: "bg-[#B45309] hover:bg-[#92400E] text-white",
    description: "Warm and inviting amber tone"
  },
  {
    name: "Fuchsia Pink",
    primary: "bg-[#D946EF] hover:bg-[#C026D3] text-white",
    secondary: "bg-[#A21CAF] hover:bg-[#86198F] text-white",
    description: "Vibrant and playful pink tone"
  }
];

export const ButtonColorOptions = () => {
  return (
    <div className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Button Color Options</h2>
      
      <div className="space-y-8">
        {colorOptions.map((option) => (
          <div key={option.name} className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">{option.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
            
            <div className="flex flex-wrap gap-4">
              <Button className={option.primary}>
                <Zap className="mr-2 h-4 w-4" />
                Primary Button
              </Button>
              
              <Button className={option.secondary}>
                <MessageCircle className="mr-2 h-4 w-4" />
                Secondary Button
              </Button>
              
              <Button variant="outline" className="border-2 border-border bg-transparent hover:bg-accent/10">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Outline Button
              </Button>
              
              <Button variant="ghost" className="hover:bg-accent/10">
                <Settings className="mr-2 h-4 w-4" />
                Ghost Button
              </Button>
            </div>
            
            <div className="flex gap-2 mt-2">
              <div className={`w-10 h-10 rounded ${option.primary} flex items-center justify-center`}>
                <Sparkles className="h-5 w-5" />
              </div>
              <div className={`w-10 h-10 rounded ${option.secondary} flex items-center justify-center`}>
                <Sparkles className="h-5 w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

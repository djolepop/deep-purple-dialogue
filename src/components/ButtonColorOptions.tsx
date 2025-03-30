
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  LayoutDashboard, 
  MessageCircle, 
  Settings, 
  Sparkles,
  ChevronRight
} from "lucide-react";

type ButtonStyle = {
  name: string;
  className: string;
  description: string;
};

const buttonStyles: ButtonStyle[] = [
  {
    name: "Standard",
    className: "bg-primary hover:bg-primary/90 text-white",
    description: "Classic button style"
  },
  {
    name: "Rounded Edge",
    className: "bg-primary hover:bg-primary/90 text-white rounded-full",
    description: "Soft, fully rounded edges"
  },
  {
    name: "Gradient",
    className: "bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity",
    description: "Smooth color gradient effect"
  },
  {
    name: "Glow",
    className: "bg-primary hover:bg-primary/90 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:shadow-[0_0_20px_rgba(124,58,237,0.7)] transition-shadow",
    description: "Glowing effect on hover"
  },
  {
    name: "Outline Glow",
    className: "bg-transparent border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all duration-300",
    description: "Subtle outline with glow on hover"
  }
];

export const ButtonColorOptions = () => {
  return (
    <div className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Button Style Options</h2>
      
      <div className="space-y-8">
        {buttonStyles.map((style) => (
          <div key={style.name} className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">{style.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{style.description}</p>
            
            <div className="flex flex-wrap gap-4">
              <Button className={style.className}>
                <Zap className="mr-2 h-4 w-4" />
                Primary Button
              </Button>
              
              <Button className={`${style.className} flex items-center gap-1 group`}>
                <span>Learn More</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button variant="outline" className={style.name === "Standard" ? "" : style.className}>
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Outline Button
              </Button>
              
              <Button variant="ghost" className={style.name === "Standard" ? "" : style.className.replace('bg-primary', 'bg-transparent').replace('bg-gradient-to-r from-primary to-secondary', 'bg-transparent')}>
                <Settings className="mr-2 h-4 w-4" />
                Ghost Button
              </Button>
            </div>
            
            <div className="flex gap-2 mt-4 items-center">
              <span className="text-sm text-muted-foreground">Icon Examples:</span>
              <div className={`w-10 h-10 rounded-md ${style.className} flex items-center justify-center`}>
                <Sparkles className="h-5 w-5" />
              </div>
              <div className={`w-10 h-10 rounded-full ${style.className} flex items-center justify-center`}>
                <MessageCircle className="h-5 w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

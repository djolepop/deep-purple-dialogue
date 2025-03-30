
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";
import { PlusCircle, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Conversation = {
  id: string;
  title: string;
  timestamp: string;
};

type ChatSidebarProps = {
  conversations: Conversation[];
  activeConversation: string | null;
  onSelectConversation: (id: string) => void;
  onNewConversation: () => void;
};

export const ChatSidebar = ({
  conversations,
  activeConversation,
  onSelectConversation,
  onNewConversation,
}: ChatSidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="relative h-full">
      <Sidebar className="border-r">
        <SidebarContent>
          <div className="px-4 py-4">
            <Button 
              onClick={onNewConversation} 
              className="w-full bg-primary hover:bg-primary/90"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              {!collapsed && "New Chat"}
            </Button>
          </div>
          <SidebarGroup>
            <SidebarGroupLabel className={cn(collapsed && "sr-only")}>
              Conversations
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {conversations.map((conversation) => (
                  <SidebarMenuItem key={conversation.id}>
                    <SidebarMenuButton
                      active={activeConversation === conversation.id}
                      onClick={() => onSelectConversation(conversation.id)}
                      className="w-full justify-start"
                    >
                      <MessageSquare className="h-4 w-4" />
                      {!collapsed && (
                        <div className="flex flex-col items-start ml-2 overflow-hidden">
                          <span className="truncate">{conversation.title}</span>
                          <span className="text-xs text-muted-foreground">
                            {conversation.timestamp}
                          </span>
                        </div>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-3 translate-x-1/2 rounded-full border shadow-sm bg-background"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </Button>
    </div>
  );
};

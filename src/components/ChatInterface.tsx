
import { useState } from "react";
import { ChatSidebar } from "./Sidebar";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";

type Message = {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
};

type Conversation = {
  id: string;
  title: string;
  timestamp: string;
  messages: Message[];
};

export const ChatInterface = () => {
  const [conversations, setConversations] = useState<Conversation[]>([{
    id: "1",
    title: "Getting Started",
    timestamp: "Today, 10:30 AM",
    messages: [{
      id: "msg1",
      content: "Hello! How can I assist you today?",
      isUser: false,
      timestamp: "10:30 AM",
    }],
  }]);

  const [activeConversationId, setActiveConversationId] = useState("1");
  const [isLoading, setIsLoading] = useState(false);

  const activeConversation = conversations.find(
    (conv) => conv.id === activeConversationId
  ) || conversations[0];

  const handleSendMessage = (content: string) => {
    if (!content.trim() || isLoading) return;
    setIsLoading(true);

    // Add user message
    const userMessage: Message = {
      id: `msg-${Date.now()}-user`,
      content,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setConversations(prev => prev.map(conv => 
      conv.id === activeConversationId 
        ? { ...conv, messages: [...conv.messages, userMessage] }
        : conv
    ));

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: `msg-${Date.now()}-ai`,
        content: "This is a simulated response from the DeepSeek LLM API. In a real implementation, this would be replaced with an actual API call to process your message and return a response.",
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setConversations(prev => prev.map(conv => 
        conv.id === activeConversationId 
          ? { ...conv, messages: [...conv.messages, aiMessage] }
          : conv
      ));

      setIsLoading(false);
    }, 1500);
  };

  const handleNewConversation = () => {
    const newConversation: Conversation = {
      id: `conv-${Date.now()}`,
      title: "New Conversation",
      timestamp: new Date().toLocaleString([], {
        month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
      }),
      messages: [{
        id: `msg-welcome-${Date.now()}`,
        content: "Hello! How can I assist you today?",
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }],
    };

    setConversations(prev => [newConversation, ...prev]);
    setActiveConversationId(newConversation.id);
  };

  return (
    <div className="flex h-screen w-full">
      <div className="w-64 shrink-0">
        <ChatSidebar
          conversations={conversations}
          activeConversation={activeConversationId}
          onSelectConversation={setActiveConversationId}
          onNewConversation={handleNewConversation}
        />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b">
          <h1 className="text-xl font-semibold text-primary">
            {activeConversation.title}
          </h1>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {activeConversation.messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.content}
              isUser={message.isUser}
              timestamp={message.timestamp}
            />
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-secondary rounded-lg p-4 flex items-center space-x-2">
                {[0, 300, 600].map((delay, i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 bg-primary rounded-full animate-bounce" 
                    style={{ animationDelay: `${delay}ms` }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
};

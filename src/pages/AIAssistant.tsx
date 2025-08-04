import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Mic, Send, Volume2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: " Hi there! I'm your smart Highway Code AI Assistant — here to help you study, practice, and pass your VID test with confidence. Ask me anything about traffic rules, signs, or test questions! ",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('ai-chat', {
        body: { message: inputMessage }
      });

      if (error) throw error;

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickTopic = (topic: string) => {
    setInputMessage(topic);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="flex justify-start mb-8">
            <Button asChild variant="ghost" className="hover:bg-primary/5 rounded-full px-6 transition-all duration-300">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-3xl shadow-glow mb-6">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              AI Assistant
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ask me anything about Zimbabwe's Highway Code. I'm here to help you learn and prepare for your driving test.
            </p>
          </div>

          {/* Chat Interface */}
          <Card className="bg-gradient-card border-0 shadow-elevated mb-8">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-traffic-green animate-pulse"></div>
                AI Assistant Online
              </CardTitle>
              <CardDescription>
                Ask questions about road signs, traffic rules, penalties, or practice scenarios
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Chat Messages */}
              <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`rounded-2xl px-4 py-3 max-w-xs lg:max-w-sm ${
                      message.role === 'user' 
                        ? 'bg-primary text-primary-foreground rounded-br-md' 
                        : 'bg-secondary rounded-bl-md'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-secondary rounded-2xl rounded-bl-md px-4 py-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input area */}
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Input 
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about road signs, speed limits, penalties..."
                    className="pr-12 py-3 bg-background border-border/50 rounded-2xl focus:ring-2 focus:ring-primary/20"
                    disabled={isLoading}
                  />
                  <Button size="sm" variant="ghost" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full">
                    <Mic className="w-4 h-4" />
                  </Button>
                </div>
                <Button 
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="rounded-2xl px-6 bg-gradient-primary hover:opacity-90 transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Topics */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card 
              className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0 cursor-pointer"
              onClick={() => handleQuickTopic("Tell me about road signs in Zimbabwe")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-traffic-red/10 text-traffic-red rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Volume2 className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Road Signs</h3>
                <p className="text-sm text-muted-foreground">Learn about warning, regulatory, and information signs</p>
              </CardContent>
            </Card>

            <Card 
              className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0 cursor-pointer"
              onClick={() => handleQuickTopic("What are the speed limits in Zimbabwe?")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-traffic-yellow/10 text-traffic-yellow rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Traffic Rules</h3>
                <p className="text-sm text-muted-foreground">Speed limits, right of way, and road regulations</p>
              </CardContent>
            </Card>

            <Card 
              className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0 cursor-pointer"
              onClick={() => handleQuickTopic("Give me a practice driving scenario")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-traffic-green/10 text-traffic-green rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mic className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Practice Scenarios</h3>
                <p className="text-sm text-muted-foreground">Simulate real driving situations and oral tests</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
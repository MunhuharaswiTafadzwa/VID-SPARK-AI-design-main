import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, BookOpen, TestTube, Bookmark, Volume2, Trophy, ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  onClick?: () => void;
}

function FeatureCard({ icon, title, description, badge, onClick }: FeatureCardProps) {
  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:-translate-y-1" onClick={onClick}>
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
      <CardContent className="p-8 relative z-10">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="bg-gradient-primary/10 p-4 rounded-2xl group-hover:bg-gradient-primary/20 transition-all duration-300 group-hover:scale-110">
              {icon}
            </div>
            {badge && (
              <Badge className="bg-primary/10 text-primary border-primary/20 text-xs px-3 py-1 rounded-full">
                {badge}
              </Badge>
            )}
          </div>
          
          <div className="space-y-3">
            <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="pt-2">
            <Button variant="ghost" size="sm" className="p-0 h-auto font-semibold text-primary group-hover:text-primary/80 hover:bg-transparent">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function FeatureGrid() {
  const features = [
    {
      icon: <Bot className="w-6 h-6 text-primary" />,
      title: "AI Assistant",
      description: "Ask questions about Zimbabwe Highway Code and get instant answers. Perfect for oral exam preparation.",
      badge: "AI Powered"
    },
    {
      icon: <TestTube className="w-6 h-6 text-primary" />,
      title: "Practice Tests",
      description: "Take multiple-choice and oral-style practice tests with instant feedback and progress tracking.",
      badge: "Popular"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Highway Code Explorer",
      description: "Browse organized sections of road rules, traffic signs, and penalties. Searchable and offline-ready.",
    },
    {
      icon: <Volume2 className="w-6 h-6 text-primary" />,
      title: "Audio Mode",
      description: "Listen to questions and rules being read aloud. Great for learning while commuting or studying hands-free.",
      badge: "Accessibility"
    },
    {
      icon: <Bookmark className="w-6 h-6 text-primary" />,
      title: "Track Progress",
      description: "Bookmark important topics, save difficult questions, and monitor your learning progress across all topics.",
    },
    {
      icon: <Trophy className="w-6 h-6 text-primary" />,
      title: "Exam Simulation",
      description: "Experience realistic VID oral and written exam conditions with timed tests and official-style questions.",
      badge: "Exam Ready"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* Modern Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Master the <span className="bg-gradient-primary bg-clip-text text-transparent">Highway Code</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to pass your VID test in Zimbabwe. AI-powered learning, practice tests, and comprehensive study materials.
          </p>
        </div>
        
        {/* Modern Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
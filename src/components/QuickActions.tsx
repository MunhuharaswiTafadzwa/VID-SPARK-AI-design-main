import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, TrendingUp, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function QuickActions() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-secondary/50 to-secondary/20 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl">
        
        {/* Modern Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Quick <span className="bg-gradient-primary bg-clip-text text-transparent">Actions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Jump right into your VID test preparation journey
          </p>
        </div>
        
        {/* Modern Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* AI Chat */}
          <Card className="group relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <CardContent className="p-8 text-center relative z-10">
              <div className="bg-gradient-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-primary/20 transition-all duration-300 group-hover:scale-110">
                <MessageCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">Ask AI</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get instant answers to highway code questions
              </p>
              <Button asChild variant="outline" size="sm" className="w-full group-hover:border-primary hover:bg-primary/5 rounded-full py-3 transition-all duration-300">
                <Link to="/ai-assistant">
                  Start Chat
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          {/* Quick Test */}
          <Card className="group relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-success opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <CardContent className="p-8 text-center relative z-10">
              <div className="bg-traffic-green/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-traffic-green/20 transition-all duration-300 group-hover:scale-110">
                <Clock className="w-10 h-10 text-traffic-green" />
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-traffic-green transition-colors">Quick Test</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                5-minute practice test to check your knowledge
              </p>
              <Button asChild variant="outline" size="sm" className="w-full group-hover:border-traffic-green hover:bg-traffic-green/5 rounded-full py-3 transition-all duration-300">
                <Link to="/practice-tests">
                  Take Test
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          {/* Progress */}
          <Card className="group relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-traffic-yellow/20 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <CardContent className="p-8 text-center relative z-10">
              <div className="bg-traffic-yellow/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-traffic-yellow/20 transition-all duration-300 group-hover:scale-110">
                <TrendingUp className="w-10 h-10 text-traffic-yellow" />
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-traffic-yellow transition-colors">My Progress</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Track your learning progress and achievements
              </p>
              <Button variant="outline" size="sm" className="w-full group-hover:border-traffic-yellow hover:bg-traffic-yellow/5 rounded-full py-3 transition-all duration-300">
                View Progress
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Bookmarks */}
          <Card className="group relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-traffic-red/20 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <CardContent className="p-8 text-center relative z-10">
              <div className="bg-traffic-red/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-traffic-red/20 transition-all duration-300 group-hover:scale-110">
                <Star className="w-10 h-10 text-traffic-red" />
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-traffic-red transition-colors">Bookmarks</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Access your saved topics and important rules
              </p>
              <Button variant="outline" size="sm" className="w-full group-hover:border-traffic-red hover:bg-traffic-red/5 rounded-full py-3 transition-all duration-300">
                View Saved
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
            <Badge className="bg-primary">New</Badge>
            <span className="text-sm text-muted-foreground">
              Oral exam simulation now available!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, BookOpen, Brain, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 px-6 bg-gradient-hero overflow-hidden">
      
      {/* Modern Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-16 left-8 w-24 h-24 bg-gradient-primary rounded-full blur-xl"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-traffic-yellow/20 rounded-2xl rotate-45 animate-float"></div>
        <div className="absolute bottom-16 left-1/4 w-12 h-12 bg-traffic-red/30 rounded-full blur-sm"></div>
        <div className="absolute bottom-24 right-1/3 w-20 h-20 bg-traffic-green/20 rounded-2xl rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center">
          
          {/* Modern Badge */}
          <div className="mb-8 animate-fade-in">
            <Badge className="bg-gradient-primary text-white border-0 text-sm px-6 py-3 rounded-full shadow-glow">
              <CheckCircle className="w-4 h-4 mr-2" />
              Official VID Test Prep Platform
            </Badge>
          </div>
          
          {/* Modern Headline */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 leading-[0.9]">
              Pass Your
              <span className="block bg-gradient-primary bg-clip-text text-transparent">VID Test</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground max-w-4xl mx-auto">
              with AI-Powered Learning Platform
            </p>
          </div>
          
          {/* Enhanced Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Master Zimbabwe's Highway Code with our intelligent AI assistant. Practice tests, 
            audio learning, and comprehensive study materials designed for VID oral and written exams.
          </p>
          
          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-10 py-5 rounded-full group transition-all duration-300 hover:scale-105">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Start Learning Now
            </Button>
            
            <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:border-primary hover:bg-primary/5 text-lg px-10 py-5 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105">
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Highway Code
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center mb-2">
                <Brain className="w-6 h-6 text-primary mr-2" />
                <span className="text-2xl font-bold text-primary">500+</span>
              </div>
              <p className="text-sm text-muted-foreground">Practice Questions</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="w-6 h-6 text-traffic-green mr-2" />
                <span className="text-2xl font-bold text-primary">95%</span>
              </div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="w-6 h-6 text-primary mr-2" />
                <span className="text-2xl font-bold text-primary">100%</span>
              </div>
              <p className="text-sm text-muted-foreground">Offline Ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
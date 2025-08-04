import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Car, AlertTriangle, Users, MapPin, Scale, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const HighwayCode = () => {
  const sections = [
    {
      icon: Car,
      title: "Vehicle Requirements",
      description: "Licensing, registration, insurance, and vehicle standards",
      topics: 24,
      color: "bg-primary/10 text-primary"
    },
    {
      icon: AlertTriangle,
      title: "Road Signs & Signals",
      description: "Warning, regulatory, and information signs explained",
      topics: 45,
      color: "bg-traffic-red/10 text-traffic-red"
    },
    {
      icon: Users,
      title: "Traffic Rules",
      description: "Right of way, speed limits, and road positioning",
      topics: 32,
      color: "bg-traffic-green/10 text-traffic-green"
    },
    {
      icon: MapPin,
      title: "Road Markings",
      description: "Lane markings, pedestrian crossings, and road boundaries",
      topics: 18,
      color: "bg-traffic-yellow/10 text-traffic-yellow"
    },
    {
      icon: Scale,
      title: "Penalties & Fines",
      description: "Traffic offenses, fines, and legal consequences",
      topics: 28,
      color: "bg-traffic-blue/10 text-traffic-blue"
    },
    {
      icon: BookOpen,
      title: "Driver Responsibilities",
      description: "Duties, obligations, and safe driving practices",
      topics: 21,
      color: "bg-accent/10 text-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
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
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Highway Code
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete guide to Zimbabwe's traffic laws, road signs, and driving regulations. Everything you need to know to drive safely and legally.
            </p>
          </div>

          {/* Search */}
          <Card className="bg-gradient-card border-0 shadow-elevated mb-8">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Search highway code topics, signs, or regulations..." 
                  className="pl-12 pr-4 py-4 bg-background/50 border-0 rounded-2xl focus:ring-2 focus:ring-primary/20 text-lg"
                />
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gradient-card border-0 text-center p-4">
              <div className="text-2xl font-bold text-primary mb-1">168</div>
              <div className="text-sm text-muted-foreground">Total Topics</div>
            </Card>
            <Card className="bg-gradient-card border-0 text-center p-4">
              <div className="text-2xl font-bold text-traffic-green mb-1">45</div>
              <div className="text-sm text-muted-foreground">Road Signs</div>
            </Card>
            <Card className="bg-gradient-card border-0 text-center p-4">
              <div className="text-2xl font-bold text-traffic-yellow mb-1">28</div>
              <div className="text-sm text-muted-foreground">Penalties</div>
            </Card>
            <Card className="bg-gradient-card border-0 text-center p-4">
              <div className="text-2xl font-bold text-traffic-red mb-1">12</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </Card>
          </div>

          {/* Sections Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0 cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-12 h-12 ${section.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <section.icon className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {section.topics} topics
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="outline" className="w-full rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                    Explore Section
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Updates */}
          <Card className="bg-gradient-card border-0 shadow-elevated mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-traffic-green animate-pulse"></div>
                Recent Updates
              </CardTitle>
              <CardDescription>
                Latest changes to Zimbabwe's Highway Code
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-background/50 rounded-2xl">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">New Speed Limit Regulations</h4>
                    <p className="text-sm text-muted-foreground mb-2">Updated speed limits for urban and highway areas effective January 2024.</p>
                    <Badge variant="secondary" className="text-xs">Updated</Badge>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-background/50 rounded-2xl">
                  <div className="w-2 h-2 rounded-full bg-traffic-yellow mt-2"></div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">Digital License Implementation</h4>
                    <p className="text-sm text-muted-foreground mb-2">New digital driving license format and requirements.</p>
                    <Badge variant="secondary" className="text-xs">New</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HighwayCode;
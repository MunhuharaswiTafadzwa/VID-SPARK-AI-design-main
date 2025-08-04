import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Shield, AlertTriangle, Info, Navigation as NavigationIcon, Octagon, Triangle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const RoadSigns = () => {
  const categories = [
    {
      icon: AlertTriangle,
      title: "Warning Signs",
      description: "Triangular yellow signs that warn of hazards ahead",
      count: 28,
      color: "bg-traffic-yellow/10 text-traffic-yellow border-traffic-yellow/20",
      examples: ["Dangerous Bend", "Children Crossing", "Road Works"]
    },
    {
      icon: Octagon,
      title: "Regulatory Signs",
      description: "Circular signs showing what you must or must not do",
      count: 32,
      color: "bg-traffic-red/10 text-traffic-red border-traffic-red/20",
      examples: ["Stop Sign", "No Entry", "Speed Limit"]
    },
    {
      icon: Info,
      title: "Information Signs",
      description: "Blue rectangular signs providing helpful information",
      count: 24,
      color: "bg-traffic-blue/10 text-traffic-blue border-traffic-blue/20",
      examples: ["Hospital", "Parking", "Tourist Information"]
    },
    {
      icon: NavigationIcon,
      title: "Direction Signs",
      description: "Green and blue signs showing directions and distances",
      count: 18,
      color: "bg-traffic-green/10 text-traffic-green border-traffic-green/20",
      examples: ["Highway Direction", "City Center", "Airport"]
    }
  ];

  const popularSigns = [
    { name: "Stop Sign", type: "Regulatory", shape: "Octagon", color: "Red" },
    { name: "Give Way", type: "Regulatory", shape: "Triangle", color: "Red/White" },
    { name: "Speed Limit 60", type: "Regulatory", shape: "Circle", color: "Red/White" },
    { name: "No Entry", type: "Regulatory", shape: "Circle", color: "Red/White" },
    { name: "Pedestrian Crossing", type: "Warning", shape: "Triangle", color: "Yellow" },
    { name: "School Zone", type: "Warning", shape: "Triangle", color: "Yellow" }
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
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Road Signs
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn to recognize and understand all road signs used in Zimbabwe. Master the meanings, shapes, and colors that keep our roads safe.
            </p>
          </div>

          {/* Search */}
          <Card className="bg-gradient-card border-0 shadow-elevated mb-8">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Search for specific road signs..." 
                  className="pl-12 pr-4 py-4 bg-background/50 border-0 rounded-2xl focus:ring-2 focus:ring-primary/20 text-lg"
                />
              </div>
            </CardContent>
          </Card>

          {/* Categories */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0 cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-12 h-12 ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count} signs
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription className="text-sm mb-3">
                    {category.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1">
                    {category.examples.map((example, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="outline" className="w-full rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                    View All Signs
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Popular Signs */}
          <Card className="bg-gradient-card border-0 shadow-elevated mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Triangle className="w-5 h-5 text-primary" />
                Most Searched Signs
              </CardTitle>
              <CardDescription>
                The road signs that learners practice most often
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {popularSigns.map((sign, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-background/50 rounded-2xl hover:bg-background/80 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{sign.name}</h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{sign.type}</span>
                        <span>•</span>
                        <span>{sign.shape}</span>
                        <span>•</span>
                        <span>{sign.color}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learning Tools */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Sign Recognition Quiz</h3>
                <p className="text-sm text-muted-foreground mb-4">Test your ability to identify road signs quickly and accurately</p>
                <Button className="w-full rounded-2xl bg-gradient-primary hover:opacity-90">
                  Start Quiz
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-traffic-yellow/10 text-traffic-yellow rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Meaning Matcher</h3>
                <p className="text-sm text-muted-foreground mb-4">Match road signs with their correct meanings and explanations</p>
                <Button variant="outline" className="w-full rounded-2xl">
                  Play Game
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-traffic-green/10 text-traffic-green rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Info className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Study Cards</h3>
                <p className="text-sm text-muted-foreground mb-4">Flashcards with sign images and detailed explanations</p>
                <Button variant="outline" className="w-full rounded-2xl">
                  Study Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadSigns;
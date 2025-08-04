import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ClipboardCheck, Timer, Trophy, BarChart3, Play, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PracticeTests = () => {
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
              <ClipboardCheck className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Practice Tests
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Test your knowledge with our comprehensive practice exams designed to help you pass your driving test.
            </p>
          </div>

          {/* Progress Overview */}
          <Card className="bg-gradient-card border-0 shadow-elevated mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-primary" />
                Your Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">85%</div>
                  <div className="text-sm text-muted-foreground">Average Score</div>
                  <Progress value={85} className="mt-2" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-traffic-green mb-1">12</div>
                  <div className="text-sm text-muted-foreground">Tests Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-traffic-yellow mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Current Streak</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Test Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quick Test */}
            <Card className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Timer className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary">10 mins</Badge>
                </div>
                <CardTitle>Quick Test</CardTitle>
                <CardDescription>
                  20 questions covering basic highway code knowledge
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild className="w-full rounded-2xl bg-gradient-primary hover:opacity-90">
                  <Link to="/quiz/quick">
                    <Play className="w-4 h-4 mr-2" />
                    Start Test
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Full Mock Test */}
            <Card className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-traffic-green/10 text-traffic-green rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary">45 mins</Badge>
                </div>
                <CardTitle>Full Mock Test</CardTitle>
                <CardDescription>
                  Complete 50-question test simulating the real exam
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild className="w-full rounded-2xl" variant="outline">
                  <Link to="/quiz/full_mock">
                    <Play className="w-4 h-4 mr-2" />
                    Start Test
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Road Signs Test */}
            <Card className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-traffic-red/10 text-traffic-red rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary">15 mins</Badge>
                </div>
                <CardTitle>Road Signs</CardTitle>
                <CardDescription>
                  Focused test on traffic signs and their meanings
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild className="w-full rounded-2xl" variant="outline">
                  <Link to="/quiz/road_signs">
                    <Play className="w-4 h-4 mr-2" />
                    Start Test
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Traffic Rules */}
            <Card className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-traffic-yellow/10 text-traffic-yellow rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ClipboardCheck className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary">20 mins</Badge>
                </div>
                <CardTitle>Traffic Rules</CardTitle>
                <CardDescription>
                  Speed limits, right of way, and road regulations
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild className="w-full rounded-2xl" variant="outline">
                  <Link to="/quiz/traffic_rules">
                    <Play className="w-4 h-4 mr-2" />
                    Start Test
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Penalties & Laws */}
            <Card className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-traffic-blue/10 text-traffic-blue rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary">15 mins</Badge>
                </div>
                <CardTitle>Penalties & Laws</CardTitle>
                <CardDescription>
                  Fines, penalties, and legal requirements for drivers
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild className="w-full rounded-2xl" variant="outline">
                  <Link to="/quiz/penalties_laws">
                    <Play className="w-4 h-4 mr-2" />
                    Start Test
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Oral Test Practice */}
            <Card className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Timer className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="bg-traffic-green/10 text-traffic-green border-traffic-green/20">
                    New
                  </Badge>
                </div>
                <CardTitle>Oral Test Practice</CardTitle>
                <CardDescription>
                  Voice-based questions to prepare for oral examinations
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild className="w-full rounded-2xl" variant="outline">
                  <Link to="/quiz/oral_practice">
                    <Play className="w-4 h-4 mr-2" />
                    Start Test
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeTests;
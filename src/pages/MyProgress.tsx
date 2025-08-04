import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Trophy, Target, Clock, ArrowLeft, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const MyProgress = () => {
  const stats = [
    {
      title: "Tests Completed",
      value: "24",
      icon: CheckCircle,
      color: "text-traffic-green",
      bgColor: "bg-traffic-green/10"
    },
    {
      title: "Average Score",
      value: "87%",
      icon: Trophy,
      color: "text-traffic-yellow",
      bgColor: "bg-traffic-yellow/10"
    },
    {
      title: "Study Streak",
      value: "7 days",
      icon: Target,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Time Studied",
      value: "12.5h",
      icon: Clock,
      color: "text-traffic-blue",
      bgColor: "bg-traffic-blue/10"
    }
  ];

  const recentTests = [
    {
      name: "Quick Test - Road Signs",
      score: 92,
      totalQuestions: 15,
      date: "2 hours ago",
      difficulty: "Medium"
    },
    {
      name: "Mock Test - Full VID",
      score: 85,
      totalQuestions: 30,
      date: "Yesterday",
      difficulty: "Hard"
    },
    {
      name: "Quick Test - Traffic Rules",
      score: 95,
      totalQuestions: 10,
      date: "2 days ago",
      difficulty: "Easy"
    },
    {
      name: "Practice Test - Penalties",
      score: 78,
      totalQuestions: 20,
      date: "3 days ago",
      difficulty: "Medium"
    }
  ];

  const topicProgress = [
    { topic: "Road Signs", progress: 95, mastery: "Expert" },
    { topic: "Traffic Rules", progress: 88, mastery: "Advanced" },
    { topic: "Vehicle Requirements", progress: 76, mastery: "Intermediate" },
    { topic: "Penalties & Fines", progress: 82, mastery: "Advanced" },
    { topic: "Road Markings", progress: 65, mastery: "Beginner" },
    { topic: "Driver Responsibilities", progress: 71, mastery: "Intermediate" }
  ];

  const getMasteryColor = (mastery: string) => {
    switch (mastery) {
      case "Expert": return "text-traffic-green";
      case "Advanced": return "text-traffic-blue";
      case "Intermediate": return "text-traffic-yellow";
      default: return "text-traffic-red";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-traffic-green/10 text-traffic-green";
      case "Medium": return "bg-traffic-yellow/10 text-traffic-yellow";
      case "Hard": return "bg-traffic-red/10 text-traffic-red";
      default: return "bg-secondary/10 text-secondary";
    }
  };

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
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              My Progress
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track your learning journey and see how you're improving towards your VID test success.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-card border-0 text-center">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Topic Progress */}
            <Card className="bg-gradient-card border-0 shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-primary" />
                  Topic Mastery
                </CardTitle>
                <CardDescription>
                  Your progress across different highway code topics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {topicProgress.map((topic, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{topic.topic}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className={getMasteryColor(topic.mastery)}>
                            {topic.mastery}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{topic.progress}%</span>
                        </div>
                      </div>
                      <Progress value={topic.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Tests */}
            <Card className="bg-gradient-card border-0 shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-traffic-yellow" />
                  Recent Tests
                </CardTitle>
                <CardDescription>
                  Your latest test results and performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTests.map((test, index) => (
                    <div key={index} className="p-4 bg-background/50 rounded-2xl">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{test.name}</h4>
                        <Badge variant="secondary" className={getDifficultyColor(test.difficulty)}>
                          {test.difficulty}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">
                          {test.score}/{test.totalQuestions} correct
                        </span>
                        <span className={`font-bold ${test.score >= 80 ? 'text-traffic-green' : test.score >= 60 ? 'text-traffic-yellow' : 'text-traffic-red'}`}>
                          {Math.round((test.score / test.totalQuestions) * 100)}%
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{test.date}</span>
                        <Progress value={(test.score / test.totalQuestions) * 100} className="w-20 h-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievement Section */}
          <Card className="bg-gradient-card border-0 shadow-elevated mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Star className="w-6 h-6 text-traffic-yellow" />
                Achievements
              </CardTitle>
              <CardDescription>
                Milestones you've unlocked on your learning journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-background/50 rounded-2xl">
                  <div className="w-12 h-12 bg-traffic-green/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Trophy className="w-6 h-6 text-traffic-green" />
                  </div>
                  <div className="font-medium text-sm">First Perfect Score</div>
                  <div className="text-xs text-muted-foreground">Achieved</div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-2xl">
                  <div className="w-12 h-12 bg-traffic-yellow/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Target className="w-6 h-6 text-traffic-yellow" />
                  </div>
                  <div className="font-medium text-sm">10 Tests Completed</div>
                  <div className="text-xs text-muted-foreground">Achieved</div>
                </div>
                <div className="text-center p-4 bg-background/30 rounded-2xl opacity-60">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Star className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div className="font-medium text-sm">Study Streak Master</div>
                  <div className="text-xs text-muted-foreground">3 days left</div>
                </div>
                <div className="text-center p-4 bg-background/30 rounded-2xl opacity-60">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div className="font-medium text-sm">Topic Expert</div>
                  <div className="text-xs text-muted-foreground">Locked</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyProgress;
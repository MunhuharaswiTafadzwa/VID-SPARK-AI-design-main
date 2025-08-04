import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Star, Search, BookOpen, AlertTriangle, Car, Users, Scale, ArrowLeft, Filter, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Bookmarks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const bookmarks = [
    {
      id: 1,
      title: "Speed Limits in Urban Areas",
      description: "Understanding the 60 km/h speed limit in built-up areas and exceptions for school zones.",
      category: "Traffic Rules",
      icon: Car,
      color: "bg-primary/10 text-primary",
      dateAdded: "2 days ago",
      section: "Highway Code Section 4.2"
    },
    {
      id: 2,
      title: "Stop Sign Procedures",
      description: "Complete stop requirements at stop signs and right-of-way rules at intersections.",
      category: "Road Signs",
      icon: AlertTriangle,
      color: "bg-traffic-red/10 text-traffic-red",
      dateAdded: "1 week ago",
      section: "Highway Code Section 2.1"
    },
    {
      id: 3,
      title: "Penalty Points System",
      description: "How penalty points are accumulated and the consequences of reaching 12 points.",
      category: "Penalties",
      icon: Scale,
      color: "bg-traffic-yellow/10 text-traffic-yellow",
      dateAdded: "3 days ago",
      section: "Highway Code Section 7.3"
    },
    {
      id: 4,
      title: "Overtaking Rules",
      description: "Safe overtaking procedures on single and dual carriageways, including no-overtaking zones.",
      category: "Traffic Rules",
      icon: Car,
      color: "bg-primary/10 text-primary",
      dateAdded: "5 days ago",
      section: "Highway Code Section 3.8"
    },
    {
      id: 5,
      title: "Pedestrian Crossing Rights",
      description: "Driver responsibilities at zebra crossings and pedestrian priority rules.",
      category: "Traffic Rules",
      icon: Users,
      color: "bg-traffic-green/10 text-traffic-green",
      dateAdded: "1 week ago",
      section: "Highway Code Section 5.2"
    },
    {
      id: 6,
      title: "Vehicle Insurance Requirements",
      description: "Mandatory third-party insurance coverage and documentation requirements.",
      category: "Vehicle Requirements",
      icon: BookOpen,
      color: "bg-traffic-blue/10 text-traffic-blue",
      dateAdded: "2 weeks ago",
      section: "Highway Code Section 1.4"
    }
  ];

  const categories = [
    { value: "all", label: "All Categories", count: bookmarks.length },
    { value: "Traffic Rules", label: "Traffic Rules", count: bookmarks.filter(b => b.category === "Traffic Rules").length },
    { value: "Road Signs", label: "Road Signs", count: bookmarks.filter(b => b.category === "Road Signs").length },
    { value: "Penalties", label: "Penalties", count: bookmarks.filter(b => b.category === "Penalties").length },
    { value: "Vehicle Requirements", label: "Vehicle Requirements", count: bookmarks.filter(b => b.category === "Vehicle Requirements").length }
  ];

  const filteredBookmarks = bookmarks.filter(bookmark => {
    const matchesSearch = bookmark.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         bookmark.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || bookmark.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              <Star className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              My Bookmarks
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick access to your saved highway code topics, important rules, and study materials.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <Card className="bg-gradient-card border-0 shadow-elevated flex-1">
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    placeholder="Search your bookmarks..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-3 bg-background/50 border-0 rounded-2xl focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 shadow-elevated">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-muted-foreground" />
                  <select 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-transparent border-0 focus:outline-none text-sm font-medium"
                  >
                    {categories.map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gradient-card border-0 text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">{bookmarks.length}</div>
                <div className="text-sm text-muted-foreground">Total Saved</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-0 text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-traffic-green mb-1">4</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-0 text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-traffic-yellow mb-1">3</div>
                <div className="text-sm text-muted-foreground">This Week</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-0 text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-traffic-blue mb-1">85%</div>
                <div className="text-sm text-muted-foreground">Reviewed</div>
              </CardContent>
            </Card>
          </div>

          {/* Bookmarks Grid */}
          {filteredBookmarks.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredBookmarks.map((bookmark) => (
                <Card key={bookmark.id} className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-0 cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 ${bookmark.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <bookmark.icon className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-traffic-red/10 hover:text-traffic-red">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                        <Star className="w-5 h-5 text-traffic-yellow fill-traffic-yellow" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {bookmark.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{bookmark.section}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {bookmark.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {bookmark.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Saved {bookmark.dateAdded}</span>
                      <Button variant="outline" size="sm" className="rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                        Review
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="bg-gradient-card border-0 shadow-elevated text-center py-12">
              <CardContent>
                <Star className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">No bookmarks found</h3>
                <p className="text-muted-foreground mb-6">
                  {searchQuery || selectedCategory !== "all" 
                    ? "Try adjusting your search or filter criteria." 
                    : "Start saving important highway code topics to access them quickly later."}
                </p>
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/highway-code">
                    Browse Highway Code
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Study Tips */}
          <Card className="bg-gradient-card border-0 shadow-elevated mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-primary" />
                Study Tips
              </CardTitle>
              <CardDescription>
                Make the most of your bookmarked content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-background/50 rounded-2xl">
                  <h4 className="font-medium mb-2">Review Regularly</h4>
                  <p className="text-sm text-muted-foreground">
                    Go through your bookmarks weekly to reinforce your knowledge.
                  </p>
                </div>
                <div className="p-4 bg-background/50 rounded-2xl">
                  <h4 className="font-medium mb-2">Practice Tests</h4>
                  <p className="text-sm text-muted-foreground">
                    Use bookmarked topics to focus your practice test sessions.
                  </p>
                </div>
                <div className="p-4 bg-background/50 rounded-2xl">
                  <h4 className="font-medium mb-2">Ask AI</h4>
                  <p className="text-sm text-muted-foreground">
                    Get detailed explanations about your saved topics from our AI assistant.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
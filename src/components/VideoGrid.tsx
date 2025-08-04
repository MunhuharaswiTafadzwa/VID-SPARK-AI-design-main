import { VideoCard } from "./VideoCard";
import { Button } from "@/components/ui/button";

const videos = [
  {
    id: 1,
    title: "Epic Space Adventure: Journey to the Stars",
    thumbnail: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800",
    duration: "12:45",
    views: "2.3M views",
    category: "Sci-Fi",
    isNew: true
  },
  {
    id: 2,
    title: "Future Technology Trends 2024",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800",
    duration: "8:32",
    views: "1.8M views",
    category: "Tech"
  },
  {
    id: 3,
    title: "Cyberpunk City Lights",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    duration: "6:18",
    views: "945K views",
    category: "Visual",
    isNew: true
  },
  {
    id: 4,
    title: "Digital Art Creation Process",
    thumbnail: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800",
    duration: "15:22",
    views: "1.2M views",
    category: "Art"
  },
  {
    id: 5,
    title: "Neon Dreams: A Visual Journey",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800",
    duration: "9:15",
    views: "3.1M views",
    category: "Music"
  },
  {
    id: 6,
    title: "AI and the Future of Creativity",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    duration: "11:08",
    views: "2.7M views",
    category: "AI"
  }
];

export function VideoGrid() {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trending <span className="bg-gradient-primary bg-clip-text text-transparent">Videos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most popular content from our community of creators
          </p>
        </div>
        
        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div 
              key={video.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <VideoCard {...video} />
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-border hover:border-primary hover:bg-card/50 backdrop-blur-sm"
          >
            Load More Videos
          </Button>
        </div>
      </div>
    </section>
  );
}
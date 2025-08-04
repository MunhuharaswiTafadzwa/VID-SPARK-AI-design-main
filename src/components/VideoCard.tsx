import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Eye } from "lucide-react";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  category: string;
  isNew?: boolean;
}

export function VideoCard({ title, thumbnail, duration, views, category, isNew }: VideoCardProps) {
  return (
    <Card className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow cursor-pointer">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-primary/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 text-primary-foreground fill-current ml-1" />
          </div>
        </div>
        
        {/* Duration badge */}
        <Badge variant="secondary" className="absolute bottom-2 right-2 bg-black/80 text-white border-none">
          <Clock className="w-3 h-3 mr-1" />
          {duration}
        </Badge>
        
        {/* New indicator */}
        {isNew && (
          <Badge className="absolute top-2 left-2 bg-gradient-primary border-none">
            New
          </Badge>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            {views}
          </span>
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
        </div>
      </div>
    </Card>
  );
}
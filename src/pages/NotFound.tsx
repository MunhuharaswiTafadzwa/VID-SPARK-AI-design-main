import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-32 pb-12">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-gradient-card border-0 shadow-elevated">
            <CardContent className="p-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-traffic-red/10 text-traffic-red rounded-3xl mb-6">
                <AlertTriangle className="w-10 h-10" />
              </div>
              
              <h1 className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                404
              </h1>
              
              <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                The page you're looking for doesn't exist or has been moved. Let's get you back on the right road.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="rounded-2xl bg-gradient-primary hover:opacity-90 px-8">
                  <Link to="/" className="flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Back to Home
                  </Link>
                </Button>
                
                <Button asChild variant="outline" className="rounded-2xl px-8">
                  <Link to="/highway-code">
                    Browse Highway Code
                  </Link>
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  Attempted URL: <code className="bg-secondary px-2 py-1 rounded text-xs">{location.pathname}</code>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

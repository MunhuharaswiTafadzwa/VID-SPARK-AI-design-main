import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, User, Bell, Globe, Volume2, LogOut, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/components/AuthContext";
import { useToast } from "@/hooks/use-toast";
import vidLogo from "@/assets/vid-logo.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
      });
      navigate("/");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass-bg backdrop-blur-md border-b border-glass-border shadow-sm">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2 rounded-xl shadow-glow">
              <img src={vidLogo} alt="VID AI Helper" className="w-8 h-8 brightness-0 invert" />
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">VID AI Helper</div>
              <div className="text-xs text-muted-foreground hidden sm:block font-medium">Zimbabwe Highway Code</div>
            </div>
          </div>
          
          {/* Modern Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            <Button asChild variant="ghost" className="hover:text-primary hover:bg-primary/5 rounded-full px-6 transition-all duration-300">
              <Link to="/">Home</Link>
            </Button>
            <Button asChild variant="ghost" className="hover:text-primary hover:bg-primary/5 rounded-full px-6 transition-all duration-300">
              <Link to="/ai-assistant">AI Assistant</Link>
            </Button>
            <Button asChild variant="ghost" className="hover:text-primary hover:bg-primary/5 rounded-full px-6 transition-all duration-300">
              <Link to="/practice-tests">Practice Tests</Link>
            </Button>
            <Button asChild variant="ghost" className="hover:text-primary hover:bg-primary/5 rounded-full px-6 transition-all duration-300">
              <Link to="/highway-code">Highway Code</Link>
            </Button>
            <Button asChild variant="ghost" className="hover:text-primary hover:bg-primary/5 rounded-full px-6 transition-all duration-300">
              <Link to="/road-signs">Road Signs</Link>
            </Button>
            {user && (
              <>
                <Button asChild variant="ghost" className="hover:text-primary hover:bg-primary/5 rounded-full px-6 transition-all duration-300">
                  <Link to="/my-progress">My Progress</Link>
                </Button>
                <Button asChild variant="ghost" className="hover:text-primary hover:bg-primary/5 rounded-full px-6 transition-all duration-300">
                  <Link to="/bookmarks">Bookmarks</Link>
                </Button>
              </>
            )}
          </div>
          
          {/* Modern Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search highway code rules..." 
                className="pl-12 pr-4 py-3 bg-secondary/50 border-0 rounded-full focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
            </div>
          </div>
          
          {/* Modern User Actions */}
          <div className="flex items-center space-x-3">
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            
            <Button variant="ghost" size="sm" className="lg:hidden rounded-full hover:bg-primary/5">
              <Search className="w-5 h-5" />
            </Button>
            
            <Button variant="ghost" size="sm" className="relative rounded-full hover:bg-primary/5">
              <Volume2 className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 text-xs flex items-center justify-center bg-primary text-white border-0">
                EN
              </Badge>
            </Button>
            
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm hidden sm:inline">{user.email}</span>
                </div>
                <Button
                  onClick={handleSignOut}
                  variant="outline"
                  size="sm"
                  className="border-primary/20 hover:border-primary hover:bg-primary/5 rounded-full px-4 transition-all duration-300"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Sign Out</span>
                </Button>
              </div>
            ) : (
              <Button asChild variant="outline" size="sm" className="border-primary/20 hover:border-primary hover:bg-primary/5 rounded-full px-6 transition-all duration-300">
                <Link to="/auth">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Link>
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-glass-border">
            <div className="space-y-2">
              <Button asChild variant="ghost" className="w-full justify-start rounded-full px-6">
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start rounded-full px-6">
                <Link to="/ai-assistant" onClick={() => setIsOpen(false)}>AI Assistant</Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start rounded-full px-6">
                <Link to="/practice-tests" onClick={() => setIsOpen(false)}>Practice Tests</Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start rounded-full px-6">
                <Link to="/highway-code" onClick={() => setIsOpen(false)}>Highway Code</Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start rounded-full px-6">
                <Link to="/road-signs" onClick={() => setIsOpen(false)}>Road Signs</Link>
              </Button>
              {user && (
                <>
                  <Button asChild variant="ghost" className="w-full justify-start rounded-full px-6">
                    <Link to="/my-progress" onClick={() => setIsOpen(false)}>My Progress</Link>
                  </Button>
                  <Button asChild variant="ghost" className="w-full justify-start rounded-full px-6">
                    <Link to="/bookmarks" onClick={() => setIsOpen(false)}>Bookmarks</Link>
                  </Button>
                </>
              )}
              
              {/* Mobile Auth */}
              <div className="pt-4 border-t border-glass-border">
                {user ? (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 px-6 py-2">
                      <User className="w-4 h-4" />
                      <span className="text-sm">{user.email}</span>
                    </div>
                    <Button
                      onClick={() => {
                        handleSignOut();
                        setIsOpen(false);
                      }}
                      variant="outline"
                      className="w-full mx-6 border-primary/20 hover:border-primary hover:bg-primary/5 rounded-full"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <Button asChild variant="outline" className="w-full mx-6 border-primary/20 hover:border-primary hover:bg-primary/5 rounded-full">
                    <Link to="/auth" onClick={() => setIsOpen(false)}>
                      <User className="w-4 h-4 mr-2" />
                      Sign In
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
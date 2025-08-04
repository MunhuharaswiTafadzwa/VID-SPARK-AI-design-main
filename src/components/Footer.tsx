import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Heart,
  Shield,
  BookOpen,
  Users
} from "lucide-react";
import vidLogo from "@/assets/vid-logo.png";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-card via-card/95 to-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-6">
        
        {/* Newsletter Section */}
        <div className="py-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
              Stay Updated with Highway Code Changes
            </h3>
            <p className="text-muted-foreground mb-6">
              Get notifications about new regulations, practice tests, and safety tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="flex-1 rounded-2xl border-border/50 bg-background/50"
              />
              <Button className="rounded-2xl bg-gradient-primary hover:opacity-90 px-8">
                Subscribe
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
              <Shield className="w-3 h-3" />
              <span>We respect your privacy. Unsubscribe anytime.</span>
            </div>
          </div>
        </div>

        <Separator className="opacity-30" />

        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-primary p-2 rounded-xl shadow-glow">
                <img src={vidLogo} alt="VID AI Helper" className="w-8 h-8 brightness-0 invert" />
              </div>
              <div>
                <div className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">VID AI Helper</div>
                <div className="text-xs text-muted-foreground font-medium">Zimbabwe Highway Code</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Your comprehensive AI-powered companion for mastering Zimbabwe's Highway Code. 
              Practice tests, road signs, and expert guidance to help you drive safely and confidently.
            </p>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-xs">
                <Users className="w-3 h-3 mr-1" />
                10,000+ learners
              </Badge>
              <Badge variant="secondary" className="text-xs">
                <BookOpen className="w-3 h-3 mr-1" />
                2025 Updated
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Learning Resources</h4>
            <div className="space-y-4">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200">
                AI Assistant
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200">
                Practice Tests
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200">
                Road Signs Guide
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200">
                Highway Code Book
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200">
                Oral Test Prep
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200">
                Mobile App
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Support & Help</h4>
            <div className="space-y-4">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200">
                Help Center
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200">
                Contact Support
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200">
                VID Office Locations
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200">
                FAQs
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200">
                Privacy Policy
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Support Hotline</div>
                  <div className="text-sm text-muted-foreground">+263 71 359 6253</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Email Support</div>
                  <div className="text-sm text-muted-foreground">help@vidai.co.zw</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Main Office</div>
                  <div className="text-sm text-muted-foreground">Harare, Zimbabwe</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h5 className="font-medium mb-4 text-foreground">Follow Us</h5>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="w-10 h-10 p-0 rounded-full border-border/50 hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="w-10 h-10 p-0 rounded-full border-border/50 hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="w-10 h-10 p-0 rounded-full border-border/50 hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="w-10 h-10 p-0 rounded-full border-border/50 hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="opacity-30" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span>© 2025 VID AI Helper. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for Zimbabwe drivers</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookies
            </a>
            <div className="flex items-center gap-1 text-xs">
              <div className="w-2 h-2 rounded-full bg-traffic-green"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
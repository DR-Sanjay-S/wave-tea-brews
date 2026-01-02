import waveTeaLogo from "@/assets/wavetea-logo.png";
import { Instagram, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <img 
              src={waveTeaLogo} 
              alt="WaveTea Logo" 
              className="h-14 w-auto mx-auto md:mx-0 mb-4"
            />
            <p className="text-muted-foreground italic mb-4">
              make ur life simple
            </p>
            <a 
              href="https://wavetea.shop" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              wavetea.shop
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Collaboration */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              A collaboration with
            </p>
            <p className="text-2xl font-bold text-foreground mb-4">
              Nexcubic
            </p>
            <a 
              href="https://www.instagram.com/nexcubic/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:scale-105 transition-transform duration-300 text-sm font-medium"
            >
              <Instagram className="w-4 h-4" />
              Follow Nexcubic
            </a>
          </div>

          {/* Coming Soon */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground mb-4">
              Coming soon on
            </p>
            <div className="flex items-center justify-center md:justify-end gap-3">
              <span className="px-4 py-2 bg-secondary rounded-xl text-sm font-medium text-foreground flex items-center gap-2">
                🍽️ Swiggy
              </span>
              <span className="px-4 py-2 bg-secondary rounded-xl text-sm font-medium text-foreground flex items-center gap-2">
                🍕 Zomato
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="glow-line mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 WaveTea. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
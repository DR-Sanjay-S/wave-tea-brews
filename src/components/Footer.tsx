import waveTeaLogo from "@/assets/wavetea-logo.png";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img 
              src={waveTeaLogo} 
              alt="WaveTea Logo" 
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-sm text-secondary-foreground/70 font-body">
              make ur life simple
            </p>
          </div>

          {/* Collaboration */}
          <div className="text-center">
            <p className="text-sm text-secondary-foreground/70 font-body mb-2">
              A collaboration with
            </p>
            <p className="font-display text-xl font-semibold">
              Nexcubic
            </p>
            <a 
              href="https://www.instagram.com/nexcubic/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:scale-105 transition-transform duration-300 text-sm"
            >
              <Instagram className="w-4 h-4" />
              <span className="font-body font-medium">Follow Nexcubic</span>
            </a>
          </div>

          {/* Delivery Coming Soon */}
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-sm text-secondary-foreground/70 font-body mb-2">Coming soon on</p>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-secondary-foreground/10 rounded-full text-sm font-medium">Swiggy</span>
                <span className="px-3 py-1 bg-secondary-foreground/10 rounded-full text-sm font-medium">Zomato</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 text-center">
          <p className="text-sm text-secondary-foreground/60 font-body">
            © 2025 WaveTea. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import waveTeaLogo from "@/assets/wavetea-logo.png";
import { Instagram, Twitter, Mail } from "lucide-react";

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
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
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

import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Heart } from "lucide-react";
import logo from "@/assets/wavetea-logo.png";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <img src={logo} alt="WaveTea" className="h-12 w-auto" />
            <span className="text-2xl font-display font-bold text-foreground">
              WaveTea
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-md mb-8"
          >
            Premium bubble tea & herbal wellness drinks. Launching Valentine's
            Day 2025.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4 mb-10"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-border mb-8" />

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground"
          >
            <p>© 2025 WaveTea. All rights reserved.</p>
            <div className="hidden md:block w-1 h-1 rounded-full bg-muted-foreground/50" />
            <p className="flex items-center gap-1">
              Crafted with <Heart className="w-4 h-4 text-primary" /> by{" "}
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Nexcubic
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

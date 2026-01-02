import { useState, useEffect } from "react";
import waveTeaLogo from "@/assets/wavetea-logo.png";
import heroBanner from "@/assets/hero-banner.png";
import { Instagram, ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set launch date to 30 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-secondary/80 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-bold text-foreground font-sans">
            {value.toString().padStart(2, '0')}
          </span>
        </div>
        <div className="absolute -inset-1 bg-primary/10 rounded-2xl blur-xl -z-10" />
      </div>
      <span className="text-xs md:text-sm text-muted-foreground mt-2 font-medium uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,hsl(160_40%_15%),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,hsl(78_50%_20%_/_0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,hsl(160_50%_15%_/_0.2),transparent_50%)]" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle w-2 h-2 bg-primary/40 top-1/4 left-1/4" style={{ animationDelay: '0s' }} />
        <div className="particle w-1 h-1 bg-primary/60 top-1/3 right-1/4" style={{ animationDelay: '2s' }} />
        <div className="particle w-3 h-3 bg-primary/30 bottom-1/4 left-1/3" style={{ animationDelay: '4s' }} />
        <div className="particle w-1.5 h-1.5 bg-accent/50 top-1/2 right-1/3" style={{ animationDelay: '1s' }} />
        <div className="particle w-2 h-2 bg-primary/40 bottom-1/3 right-1/5" style={{ animationDelay: '3s' }} />
        <div className="particle w-1 h-1 bg-accent/60 top-2/3 left-1/5" style={{ animationDelay: '5s' }} />
      </div>

      {/* Decorative Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-primary/10 animate-rotate-slow opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-primary/5 animate-rotate-slow opacity-20" style={{ animationDirection: 'reverse' }} />
      
      <div className="container relative z-10 mx-auto px-6 py-24 md:py-32 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="flex-1 max-w-xl text-center lg:text-left">
          {/* Launch Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">Launching Soon</span>
          </div>

          {/* Logo */}
          <div className="mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <img 
              src={waveTeaLogo} 
              alt="WaveTea - Make ur life simple" 
              className="h-20 md:h-28 lg:h-32 w-auto mx-auto lg:mx-0 drop-shadow-2xl"
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Premium{' '}
            <span className="text-gradient">Herbal Tea</span>
            <br />
            & Bubba Drinks
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Experience the perfect blend of wellness and taste. 
            Crafted with premium ingredients for a refreshing experience.
          </p>

          {/* Countdown Timer */}
          <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <CountdownUnit value={days} label="Days" />
            <span className="text-2xl text-primary/50 font-light">:</span>
            <CountdownUnit value={hours} label="Hours" />
            <span className="text-2xl text-primary/50 font-light">:</span>
            <CountdownUnit value={minutes} label="Mins" />
            <span className="text-2xl text-primary/50 font-light hidden md:block">:</span>
            <div className="hidden md:block">
              <CountdownUnit value={seconds} label="Secs" />
            </div>
          </div>

          {/* Platform Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors cursor-pointer group">
              <span className="text-xl">🍽️</span>
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">Swiggy</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors cursor-pointer group">
              <span className="text-xl">🍕</span>
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">Zomato</span>
            </div>
          </div>

          {/* Collaboration */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            <div className="px-5 py-3 rounded-xl bg-secondary/40 border border-border/30">
              <p className="text-xs text-muted-foreground mb-1">In collaboration with</p>
              <p className="text-lg font-bold text-foreground">Nexcubic</p>
            </div>
            <a 
              href="https://www.instagram.com/nexcubic/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-medium">Follow</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right - Hero Image */}
        <div className="flex-1 relative max-w-lg animate-scale-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75" />
          
          {/* Main Product Image */}
          <div className="relative floating-slow">
            <img 
              src={heroBanner}
              alt="WaveTea Premium Drinks"
              className="w-full h-auto drop-shadow-2xl relative z-10"
            />
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-2xl floating" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/30 rounded-full blur-2xl floating-delayed" />
          </div>

          {/* Feature Tag */}
          <div className="absolute top-10 -left-4 md:left-0 px-4 py-2 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg animate-slide-left opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">100% Natural</span>
            </div>
          </div>

          {/* Another Feature Tag */}
          <div className="absolute bottom-20 -right-4 md:right-0 px-4 py-2 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg animate-slide-right opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <span className="text-lg">🧋</span>
              </div>
              <span className="text-sm font-medium text-foreground">Premium Boba</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
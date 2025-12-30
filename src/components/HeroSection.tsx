import waveTeaLogo from "@/assets/wavetea-logo.png";
import bubbaDrink1 from "@/assets/bubba-drink-1.png";
import bubbaDrink2 from "@/assets/bubba-drink-2.png";
import bubbaDrink3 from "@/assets/bubba-drink-3.png";
import FloatingProduct from "./FloatingProduct";
import { Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden pt-24 md:pt-32">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Bubble decorations */}
      <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-bubble" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-primary/20 rounded-full animate-bubble" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-primary/25 rounded-full animate-bubble" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
            {/* Main Logo - Large and Attractive */}
            <div className="flex justify-center lg:justify-start">
              <img 
                src={waveTeaLogo} 
                alt="WaveTea - Make ur life simple" 
                className="h-32 md:h-44 lg:h-52 w-auto drop-shadow-lg"
              />
            </div>

            {/* Tagline */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
                Herbal Tea &
                <span className="block text-gradient">Bubba Drinks</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-body max-w-md mx-auto lg:mx-0">
                Premium herbal teas & refreshing bubble drinks. Order soon on Swiggy & Zomato!
              </p>
            </div>

            {/* Coming Soon Badge */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary text-secondary-foreground rounded-full shadow-soft animate-pulse-glow">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="font-display text-lg font-semibold">Launching Soon</span>
              </div>
            </div>

            {/* Delivery Platforms */}
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                <span className="text-2xl">🍽️</span>
                <span className="font-body font-medium text-secondary">Swiggy</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                <span className="text-2xl">🍕</span>
                <span className="font-body font-medium text-secondary">Zomato</span>
              </div>
            </div>

            {/* Collaboration Badge */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div>
                <p className="text-sm text-muted-foreground font-body">
                  In collaboration with
                </p>
                <p className="text-xl font-display font-semibold text-secondary mt-1">
                  Nexcubic
                </p>
              </div>
              <a 
                href="https://www.instagram.com/nexcubic/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:scale-105 transition-transform duration-300"
              >
                <Instagram className="w-5 h-5" />
                <span className="font-body font-medium">Follow Nexcubic</span>
              </a>
            </div>
          </div>

          {/* Right Content - Floating Bubba Drinks */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
            {/* Central Product - Pink Bubba */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 md:w-64 lg:w-72 z-20 animate-pour">
              <FloatingProduct 
                imageSrc={bubbaDrink1} 
                alt="Classic Pink Bubba Tea"
                animationClass="float-animation"
                showLogo={false}
              />
              <div className="text-center mt-4">
                <p className="font-display text-lg font-semibold text-secondary">Classic Pink</p>
                <p className="text-sm text-muted-foreground">Strawberry Bubba</p>
              </div>
            </div>

            {/* Left Product - Brown Sugar */}
            <div className="absolute top-1/4 left-0 md:left-5 w-40 md:w-48 lg:w-52 z-10 animate-pour" style={{ animationDelay: '0.3s' }}>
              <FloatingProduct 
                imageSrc={bubbaDrink2} 
                alt="Brown Sugar Tiger Bubba"
                animationClass="float-animation-delayed"
                showLogo={false}
              />
              <div className="text-center mt-3">
                <p className="font-display text-base font-semibold text-secondary">Tiger Milk</p>
                <p className="text-xs text-muted-foreground">Brown Sugar</p>
              </div>
            </div>

            {/* Right Product - Taro Purple */}
            <div className="absolute bottom-1/4 right-0 md:right-5 w-44 md:w-52 lg:w-56 z-10 animate-pour" style={{ animationDelay: '0.6s' }}>
              <FloatingProduct 
                imageSrc={bubbaDrink3} 
                alt="Taro Purple Bubba"
                animationClass="float-animation-slow"
                showLogo={false}
              />
              <div className="text-center mt-3">
                <p className="font-display text-base font-semibold text-secondary">Purple Taro</p>
                <p className="text-xs text-muted-foreground">Creamy Bubba</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

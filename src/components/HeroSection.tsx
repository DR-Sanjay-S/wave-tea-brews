import waveTeaLogo from "@/assets/wavetea-logo.png";
import heroBanner from "@/assets/hero-banner.png";
import { Instagram, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBanner} 
          alt="WaveTea Bubble Drinks"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-lime-300/60 rounded-full animate-[float_4s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-yellow-300/50 rounded-full animate-[float_5s_ease-in-out_infinite_0.5s]" />
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-lime-200/40 rounded-full animate-[float_6s_ease-in-out_infinite_1s]" />
        <div className="absolute top-1/2 left-1/5 w-2 h-2 bg-white/30 rounded-full animate-[float_3s_ease-in-out_infinite_0.2s]" />
      </div>
      
      <div className="container relative z-10 mx-auto px-6 py-24 md:py-32 min-h-screen flex items-center">
        <div className="max-w-xl">
          {/* Main Logo */}
          <div className="mb-8 animate-fade-in-up">
            <img 
              src={waveTeaLogo} 
              alt="WaveTea - Make ur life simple" 
              className="h-28 md:h-40 lg:h-48 w-auto drop-shadow-2xl filter brightness-110"
            />
          </div>

          {/* Tagline */}
          <div className="space-y-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
              Herbal Tea &
              <span className="block bg-gradient-to-r from-lime-300 to-yellow-200 bg-clip-text text-transparent">Bubba Drinks</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 font-body max-w-md drop-shadow-lg">
              Premium herbal teas & refreshing bubble drinks. Order soon on Swiggy & Zomato!
            </p>
          </div>

          {/* Coming Soon Badge */}
          <div className="flex flex-wrap items-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/15 backdrop-blur-md text-white rounded-full shadow-xl border border-white/25">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-400"></span>
              </span>
              <span className="font-display text-lg font-semibold">Launching Soon</span>
            </div>
          </div>

          {/* Delivery Platforms */}
          <div className="flex flex-wrap items-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-md rounded-full border border-white/25 hover:bg-white/25 transition-all duration-300 cursor-pointer">
              <span className="text-2xl">🍽️</span>
              <span className="font-body font-semibold text-white">Swiggy</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-md rounded-full border border-white/25 hover:bg-white/25 transition-all duration-300 cursor-pointer">
              <span className="text-2xl">🍕</span>
              <span className="font-body font-semibold text-white">Zomato</span>
            </div>
          </div>

          {/* Collaboration Badge */}
          <div className="flex flex-wrap items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/20">
              <p className="text-sm text-white/80 font-body">In collaboration with</p>
              <p className="text-xl font-display font-bold text-white">Nexcubic</p>
            </div>
            <a 
              href="https://www.instagram.com/nexcubic/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-body font-semibold">Follow Nexcubic</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Website Badge - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-20 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <a 
          href="https://wavetea.shop" 
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/95 text-gray-800 font-display font-bold rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
        >
          WAVETEA.SHOP
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

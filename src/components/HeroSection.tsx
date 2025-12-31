import waveTeaLogo from "@/assets/wavetea-logo.png";
import bubbaDrink1 from "@/assets/bubba-drink-1.png";
import bubbaDrink2 from "@/assets/bubba-drink-2.png";
import bubbaDrink3 from "@/assets/bubba-drink-3.png";
import FloatingProduct from "./FloatingProduct";
import { Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden pt-24 md:pt-32">
      {/* Decorative leaves - like reference image */}
      <div className="absolute top-16 right-8 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-green-600 to-green-800 rounded-[0_70%_0_70%] rotate-45 opacity-60 animate-[sway_5s_ease-in-out_infinite]" />
      <div className="absolute bottom-32 left-4 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-[0_70%_0_70%] -rotate-12 opacity-50 animate-[sway_4s_ease-in-out_infinite_0.5s]" />
      <div className="absolute top-1/3 left-8 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-[0_70%_0_70%] rotate-[30deg] opacity-40 animate-[sway_6s_ease-in-out_infinite_1s]" />
      
      {/* Decorative spheres - like reference image */}
      <div className="absolute bottom-20 left-1/4 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-800 shadow-lg" />
      <div className="absolute bottom-32 right-1/4 w-4 h-4 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-lg" />
      <div className="absolute top-1/2 right-12 w-8 h-8 rounded-full bg-gradient-to-br from-green-600 to-green-900 shadow-lg" />
      <div className="absolute bottom-40 left-12 w-5 h-5 rounded-full bg-gradient-to-br from-gray-700 to-black shadow-lg" />
      <div className="absolute top-40 left-1/3 w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 opacity-50" />
      
      {/* Large decorative circle backdrop */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-green-700/40 to-green-900/40 blur-sm" />
      
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
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                Herbal Tea &
                <span className="block text-lime-200">Bubba Drinks</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-body max-w-md mx-auto lg:mx-0 drop-shadow">
                Premium herbal teas & refreshing bubble drinks. Order soon on Swiggy & Zomato!
              </p>
            </div>

            {/* Coming Soon Badge */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full shadow-lg border border-white/30 animate-pulse-glow">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-300"></span>
                </span>
                <span className="font-display text-lg font-semibold">Launching Soon</span>
              </div>
            </div>

            {/* Delivery Platforms */}
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <span className="text-2xl">🍽️</span>
                <span className="font-body font-medium text-white">Swiggy</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <span className="text-2xl">🍕</span>
                <span className="font-body font-medium text-white">Zomato</span>
              </div>
            </div>

            {/* Collaboration Badge */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div>
                <p className="text-sm text-white/80 font-body">
                  In collaboration with
                </p>
                <p className="text-xl font-display font-semibold text-white mt-1">
                  Nexcubic
                </p>
              </div>
              <a 
                href="https://www.instagram.com/nexcubic/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <Instagram className="w-5 h-5" />
                <span className="font-body font-medium">Follow Nexcubic</span>
              </a>
            </div>
          </div>

          {/* Right Content - Floating Bubba Drinks */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
            {/* Central Product - Matcha with Golden Boba */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 md:w-64 lg:w-72 z-20 animate-pour">
              <FloatingProduct 
                imageSrc={bubbaDrink2} 
                alt="Golden Boba Matcha"
                animationClass="float-animation"
                showLogo={false}
              />
              <div className="text-center mt-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <p className="font-display text-lg font-semibold text-white">Golden Boba</p>
                <p className="text-sm text-white/80">Matcha Latte</p>
              </div>
            </div>

            {/* Left Product - Matcha Cream */}
            <div className="absolute top-1/4 left-0 md:left-5 w-40 md:w-48 lg:w-52 z-10 animate-pour" style={{ animationDelay: '0.3s' }}>
              <FloatingProduct 
                imageSrc={bubbaDrink1} 
                alt="Matcha Cream Bubba"
                animationClass="float-animation-delayed"
                showLogo={false}
              />
              <div className="text-center mt-3 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
                <p className="font-display text-base font-semibold text-white">Matcha Cream</p>
                <p className="text-xs text-white/80">Classic Green</p>
              </div>
            </div>

            {/* Right Product - Green Tea Jelly */}
            <div className="absolute bottom-1/4 right-0 md:right-5 w-44 md:w-52 lg:w-56 z-10 animate-pour" style={{ animationDelay: '0.6s' }}>
              <FloatingProduct 
                imageSrc={bubbaDrink3} 
                alt="Green Tea Jelly Bubba"
                animationClass="float-animation-slow"
                showLogo={false}
              />
              <div className="text-center mt-3 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
                <p className="font-display text-base font-semibold text-white">Green Tea</p>
                <p className="text-xs text-white/80">Jelly Bubba</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

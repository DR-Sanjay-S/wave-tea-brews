import waveTeaLogo from "@/assets/wavetea-logo.png";
import teaProduct1 from "@/assets/tea-product-1.png";
import teaProduct2 from "@/assets/tea-product-2.png";
import teaProduct3 from "@/assets/tea-product-3.png";
import FloatingProduct from "./FloatingProduct";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden pt-24 md:pt-32">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
      
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
                Pure Herbal
                <span className="block text-gradient">Wellness</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-body max-w-md mx-auto lg:mx-0">
                Discover the essence of nature in every sip. Premium herbal teas crafted for your mind, body & soul.
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

            {/* Collaboration Badge */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground font-body">
                In collaboration with
              </p>
              <p className="text-xl font-display font-semibold text-secondary mt-1">
                Nexcubic
              </p>
            </div>
          </div>

          {/* Right Content - Floating Products */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
            {/* Central Product */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-72 lg:w-80 z-20">
              <FloatingProduct 
                imageSrc={teaProduct1} 
                alt="WaveTea Premium Canister"
                animationClass="float-animation"
                showLogo={true}
              />
            </div>

            {/* Left Product */}
            <div className="absolute top-1/4 left-0 md:left-5 w-40 md:w-48 lg:w-56 z-10">
              <FloatingProduct 
                imageSrc={teaProduct2} 
                alt="WaveTea Herbal Drink"
                animationClass="float-animation-delayed"
                showLogo={false}
              />
            </div>

            {/* Right Product */}
            <div className="absolute bottom-1/4 right-0 md:right-5 w-44 md:w-52 lg:w-60 z-10">
              <FloatingProduct 
                imageSrc={teaProduct3} 
                alt="WaveTea Tea Pouch"
                animationClass="float-animation-slow"
                showLogo={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

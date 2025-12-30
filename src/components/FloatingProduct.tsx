import { cn } from "@/lib/utils";
import waveTeaLogo from "@/assets/wavetea-logo.png";

interface FloatingProductProps {
  imageSrc: string;
  alt: string;
  animationClass?: string;
  className?: string;
  showLogo?: boolean;
}

const FloatingProduct = ({ 
  imageSrc, 
  alt, 
  animationClass = "float-animation",
  className,
  showLogo = true
}: FloatingProductProps) => {
  return (
    <div className={cn("relative perspective-1000", className)}>
      {/* Glow effect behind product */}
      <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full scale-75 animate-pulse-glow" />
      
      {/* Product image */}
      <div className={cn("relative preserve-3d", animationClass)}>
        <img 
          src={imageSrc} 
          alt={alt}
          className="w-full h-auto drop-shadow-2xl"
          style={{
            filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.2))"
          }}
        />
        
        {/* Brand logo overlay on product */}
        {showLogo && (
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-16 h-16 md:w-20 md:h-20">
            <img 
              src={waveTeaLogo} 
              alt="WaveTea Logo" 
              className="w-full h-full object-contain opacity-90"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingProduct;

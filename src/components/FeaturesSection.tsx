import { Leaf, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Sourced from the finest organic farms, our herbs are pure and pesticide-free."
  },
  {
    icon: Heart,
    title: "Wellness First",
    description: "Each blend is carefully crafted to promote health, relaxation, and vitality."
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Experience the difference with our artisanal herbal tea collections."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Why <span className="text-gradient">WaveTea</span>?
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            We believe in the power of nature to transform your daily wellness routine
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`group relative p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/50 transition-all duration-500 animate-fade-in-up stagger-${index + 1}`}
              style={{ animationDelay: `${index * 0.2}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-secondary mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

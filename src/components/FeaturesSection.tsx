import { Leaf, Heart, Sparkles, Shield, Truck, Award } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Sourced from the finest organic farms, our herbs are pure and pesticide-free.",
    color: "bg-emerald-500/10 text-emerald-400",
  },
  {
    icon: Heart,
    title: "Wellness First",
    description: "Each blend is carefully crafted to promote health, relaxation, and vitality.",
    color: "bg-rose-500/10 text-rose-400",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Experience the difference with our artisanal herbal tea collections.",
    color: "bg-amber-500/10 text-amber-400",
  },
  {
    icon: Shield,
    title: "Lab Tested",
    description: "Every batch undergoes rigorous quality testing for your safety.",
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick delivery through Swiggy & Zomato once we launch.",
    color: "bg-purple-500/10 text-purple-400",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for exceptional taste and quality ingredients.",
    color: "bg-teal-500/10 text-teal-400",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,hsl(78_50%_20%_/_0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,hsl(160_50%_15%_/_0.1),transparent_50%)]" />
      
      {/* Top Line */}
      <div className="absolute top-0 left-0 right-0 glow-line" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Why <span className="text-gradient">WaveTea</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            We believe in the power of nature to transform your daily wellness routine
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${(index + 3) * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <feature.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  );
};

export default FeaturesSection;
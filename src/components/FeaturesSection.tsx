import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Heart, Award, Clock, Truck, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Organic",
    description:
      "All our ingredients are sourced from certified organic farms, ensuring pure and natural flavors.",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "Every drink is handcrafted with care by our skilled tea masters using traditional techniques.",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "We use only the finest tea leaves and freshest ingredients for an exceptional taste experience.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Clock,
    title: "Fresh Daily",
    description:
      "Our drinks are prepared fresh every day to ensure maximum freshness and nutritional value.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Quick and reliable delivery through Swiggy & Zomato right to your doorstep.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Highest hygiene standards maintained throughout our preparation and delivery process.",
    gradient: "from-teal-500 to-cyan-600",
  },
];

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group"
    >
      <div className="h-full bg-card rounded-3xl border border-border p-8 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2">
        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <feature.icon className="w-8 h-8 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {feature.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4" ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            The WaveTea <span className="text-gradient">Difference</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're committed to delivering the finest tea experience with quality,
            care, and sustainability at our core.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

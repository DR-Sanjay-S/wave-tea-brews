import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Sparkles, Coffee } from "lucide-react";
import drinksLineup from "@/assets/drinks-lineup.png";
import bubbaDrink1 from "@/assets/bubba-drink-1.png";
import bubbaDrink2 from "@/assets/bubba-drink-2.png";
import bubbaDrink3 from "@/assets/bubba-drink-3.png";
import herbalTea1 from "@/assets/herbal-tea-1.png";
import herbalTea2 from "@/assets/herbal-tea-2.png";
import herbalTea3 from "@/assets/herbal-tea-3.png";

const products = {
  bubba: [
    {
      name: "Matcha Bliss",
      description: "Premium Japanese matcha with creamy oat milk",
      image: bubbaDrink1,
      benefits: ["Energy Boost", "Antioxidants"],
      color: "from-emerald-400/20 to-green-500/20",
    },
    {
      name: "Berry Burst",
      description: "Fresh strawberries with tangy passion fruit",
      image: bubbaDrink2,
      benefits: ["Vitamin Rich", "Refreshing"],
      color: "from-pink-400/20 to-rose-500/20",
    },
    {
      name: "Taro Dream",
      description: "Smooth taro root with vanilla undertones",
      image: bubbaDrink3,
      benefits: ["Creamy", "Unique Taste"],
      color: "from-purple-400/20 to-violet-500/20",
    },
  ],
  herbal: [
    {
      name: "Calm Chamomile",
      description: "Soothing chamomile with honey & lavender",
      image: herbalTea1,
      benefits: ["Relaxing", "Sleep Aid"],
      color: "from-amber-400/20 to-yellow-500/20",
    },
    {
      name: "Ginger Zing",
      description: "Spicy ginger with lemon & turmeric",
      image: herbalTea2,
      benefits: ["Immunity", "Digestion"],
      color: "from-orange-400/20 to-amber-500/20",
    },
    {
      name: "Mint Fresh",
      description: "Cool peppermint with green tea essence",
      image: herbalTea3,
      benefits: ["Refreshing", "Focus"],
      color: "from-teal-400/20 to-cyan-500/20",
    },
  ],
};

const ProductCard = ({
  product,
  index,
}: {
  product: (typeof products.bubba)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      className="group"
    >
      <div className="card-3d h-full">
        <div className="card-3d-inner bg-card rounded-3xl border border-border overflow-hidden shadow-card hover:shadow-float transition-all duration-500">
          {/* Image Container */}
          <div
            className={`relative h-56 bg-gradient-to-br ${product.color} overflow-hidden rounded-t-3xl`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent" />
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
              whileHover={{ rotate: 5 }}
            />
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                {product.description}
              </p>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-2">
              {product.benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProductCatalogue = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4" ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-soft border border-border mb-6">
            <Coffee className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Our Menu</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Crafted with <span className="text-gradient">Passion</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our signature collection of premium bubble teas and herbal
            wellness drinks, each crafted to perfection.
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mb-20"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <img
              src={drinksLineup}
              alt="WaveTea Drinks Collection"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-float"
            />
          </div>
        </motion.div>

        {/* Bubba Drinks Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-14 h-14 btn-gradient rounded-2xl flex items-center justify-center shadow-soft">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Bubba Drinks
              </h3>
              <p className="text-muted-foreground">
                Refreshing & Fun Beverages
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.bubba.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index} />
            ))}
          </div>
        </div>

        {/* Herbal Teas Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center shadow-soft">
              <Leaf className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Herbal Teas
              </h3>
              <p className="text-muted-foreground">
                Wellness & Relaxation Blends
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.herbal.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalogue;

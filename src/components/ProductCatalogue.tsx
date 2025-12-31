import bubbaDrink1 from "@/assets/bubba-drink-1.png";
import bubbaDrink2 from "@/assets/bubba-drink-2.png";
import bubbaDrink3 from "@/assets/bubba-drink-3.png";
import herbalTea1 from "@/assets/herbal-tea-1.png";
import herbalTea2 from "@/assets/herbal-tea-2.png";
import herbalTea3 from "@/assets/herbal-tea-3.png";
import { Leaf, Sparkles, Heart, Zap, Moon, Sun } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  category: "bubba" | "herbal";
  image: string;
  badge?: string;
  advantages: string[];
  icon: React.ReactNode;
}

const products: Product[] = [
  {
    id: 1,
    name: "Matcha Cream",
    description: "Premium Japanese matcha with creamy swirl and chewy tapioca pearls",
    category: "bubba",
    image: bubbaDrink1,
    badge: "Bestseller",
    advantages: ["Rich in antioxidants", "Natural energy boost", "Creamy texture"],
    icon: <Leaf className="w-4 h-4" />,
  },
  {
    id: 2,
    name: "Golden Boba Matcha",
    description: "Matcha latte topped with golden popping boba pearls",
    category: "bubba",
    image: bubbaDrink2,
    badge: "Popular",
    advantages: ["Vitamin C boost", "Fruity burst", "Instagram worthy"],
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    id: 3,
    name: "Green Tea Jelly",
    description: "Layered matcha with refreshing green tea jelly cubes",
    category: "bubba",
    image: bubbaDrink3,
    badge: "New",
    advantages: ["Low calorie", "Refreshing taste", "Chewy jelly bits"],
    icon: <Zap className="w-4 h-4" />,
  },
  {
    id: 4,
    name: "Chamomile Dream",
    description: "Soothing chamomile blend with floating flowers for ultimate relaxation",
    category: "herbal",
    image: herbalTea1,
    badge: "Relaxing",
    advantages: ["Better sleep", "Reduces stress", "Caffeine free"],
    icon: <Moon className="w-4 h-4" />,
  },
  {
    id: 5,
    name: "Fresh Mint Tea",
    description: "Refreshing peppermint herbal tea for digestive wellness",
    category: "herbal",
    image: herbalTea2,
    badge: "Refreshing",
    advantages: ["Aids digestion", "Fresh breath", "Cooling effect"],
    icon: <Leaf className="w-4 h-4" />,
  },
  {
    id: 6,
    name: "Hibiscus Rose",
    description: "Vibrant ruby red hibiscus tea rich in vitamin C and antioxidants",
    category: "herbal",
    image: herbalTea3,
    badge: "Premium",
    advantages: ["Heart healthy", "Vitamin C rich", "Beautiful color"],
    icon: <Heart className="w-4 h-4" />,
  },
];

const ProductCatalogue = () => {
  const bubbaProducts = products.filter((p) => p.category === "bubba");
  const herbalProducts = products.filter((p) => p.category === "herbal");

  return (
    <section id="catalogue" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Discover our premium collection of bubble teas and herbal blends
          </p>
        </div>

        {/* Bubba Drinks Section */}
        <div className="mb-20">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-secondary mb-10 text-center">
            🧋 Bubba Drinks
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {bubbaProducts.map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {product.badge && (
                  <span className="absolute top-4 right-4 z-10 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-md">
                    {product.badge}
                  </span>
                )}
                
                {/* Image Container with gradient blend */}
                <div className="relative h-56 flex items-center justify-center bg-gradient-to-b from-transparent via-green-100/50 to-green-200/30 dark:via-green-800/20 dark:to-green-700/10 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-52 w-auto object-contain drop-shadow-2xl group-hover:scale-110 group-hover:-rotate-2 transition-all duration-500 float-animation"
                  />
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-1.5 bg-primary/10 rounded-full text-primary">
                      {product.icon}
                    </span>
                    <h4 className="font-display text-xl font-bold text-secondary">
                      {product.name}
                    </h4>
                  </div>
                  
                  <p className="text-muted-foreground font-body text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Advantages */}
                  <div className="space-y-2 mb-4">
                    {product.advantages.map((advantage, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-secondary/80 font-body">{advantage}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <span className="text-xs text-primary font-semibold font-body">
                      Coming soon on Swiggy & Zomato
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Herbal Tea Section */}
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-secondary mb-10 text-center">
            🍵 Herbal Teas
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {herbalProducts.map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-800/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                {product.badge && (
                  <span className="absolute top-4 right-4 z-10 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full shadow-md">
                    {product.badge}
                  </span>
                )}

                {/* Image Container with gradient blend */}
                <div className="relative h-48 flex items-center justify-center bg-gradient-to-b from-transparent via-amber-100/50 to-orange-100/30 dark:via-amber-800/20 dark:to-orange-700/10 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-44 w-auto object-contain drop-shadow-2xl group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                  />
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-radial from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-1.5 bg-accent/10 rounded-full text-accent">
                      {product.icon}
                    </span>
                    <h4 className="font-display text-xl font-bold text-secondary">
                      {product.name}
                    </h4>
                  </div>
                  
                  <p className="text-muted-foreground font-body text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Advantages */}
                  <div className="space-y-2 mb-4">
                    {product.advantages.map((advantage, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-secondary/80 font-body">{advantage}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <span className="text-xs text-accent font-semibold font-body">
                      Premium quality ingredients
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalogue;

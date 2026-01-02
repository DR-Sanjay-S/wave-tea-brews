import bubbaDrink1 from "@/assets/bubba-drink-1.png";
import bubbaDrink2 from "@/assets/bubba-drink-2.png";
import bubbaDrink3 from "@/assets/bubba-drink-3.png";
import herbalTea1 from "@/assets/herbal-tea-1.png";
import herbalTea2 from "@/assets/herbal-tea-2.png";
import herbalTea3 from "@/assets/herbal-tea-3.png";
import { Leaf, Sparkles, Heart, Zap, Moon, CheckCircle } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  category: "bubba" | "herbal";
  image: string;
  badge?: string;
  advantages: string[];
  icon: React.ReactNode;
  gradient: string;
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
    gradient: "from-emerald-500/20 to-green-600/20",
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
    gradient: "from-amber-500/20 to-yellow-500/20",
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
    gradient: "from-teal-500/20 to-cyan-500/20",
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
    gradient: "from-amber-400/20 to-orange-500/20",
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
    gradient: "from-green-400/20 to-emerald-500/20",
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
    gradient: "from-rose-400/20 to-pink-500/20",
  },
];

const ProductCard = ({ product, index }: { product: Product; index: number }) => (
  <div
    className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up"
    style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
  >
    {/* Badge */}
    {product.badge && (
      <span className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-full">
        {product.badge}
      </span>
    )}
    
    {/* Image Container */}
    <div className={`relative h-56 m-4 rounded-2xl overflow-hidden bg-gradient-to-br ${product.gradient}`}>
      <div className="absolute inset-0 bg-secondary/30" />
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-contain p-6 drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
      />
      {/* Glow on hover */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 rounded-2xl" />
    </div>

    {/* Content */}
    <div className="p-6 pt-2">
      <div className="flex items-center gap-3 mb-3">
        <span className="p-2 bg-primary/10 rounded-xl text-primary">
          {product.icon}
        </span>
        <h4 className="text-xl font-bold text-foreground">
          {product.name}
        </h4>
      </div>
      
      <p className="text-muted-foreground text-sm mb-5 leading-relaxed line-clamp-2">
        {product.description}
      </p>

      {/* Advantages */}
      <div className="space-y-2.5 mb-5">
        {product.advantages.map((advantage, i) => (
          <div key={i} className="flex items-center gap-2.5 text-sm">
            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-foreground/80">{advantage}</span>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-border/50">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
          {product.category === "bubba" ? "Coming soon on Swiggy & Zomato" : "Premium quality ingredients"}
        </span>
      </div>
    </div>
  </div>
);

const ProductCatalogue = () => {
  const bubbaProducts = products.filter((p) => p.category === "bubba");
  const herbalProducts = products.filter((p) => p.category === "herbal");

  return (
    <section id="catalogue" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
            Our Collection
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Premium <span className="text-gradient">Products</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Discover our handcrafted collection of bubble teas and wellness herbal blends
          </p>
        </div>

        {/* Bubba Drinks Section */}
        <div className="mb-24">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-border" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
              <span className="text-3xl">🧋</span> Bubba Drinks
            </h3>
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-border" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {bubbaProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>

        {/* Herbal Tea Section */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-border" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
              <span className="text-3xl">🍵</span> Herbal Teas
            </h3>
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-border" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {herbalProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalogue;
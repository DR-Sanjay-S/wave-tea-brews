import bubbaDrink1 from "@/assets/bubba-drink-1.png";
import bubbaDrink2 from "@/assets/bubba-drink-2.png";
import bubbaDrink3 from "@/assets/bubba-drink-3.png";
import herbalTea1 from "@/assets/herbal-tea-1.png";
import herbalTea2 from "@/assets/herbal-tea-2.png";
import herbalTea3 from "@/assets/herbal-tea-3.png";
import { Leaf, Sparkles, Heart, Zap, Moon } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  category: "bubba" | "herbal";
  image: string;
  badge?: string;
  advantages: string[];
  icon: React.ReactNode;
  color: string;
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
    color: "from-green-400 to-green-600",
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
    color: "from-yellow-400 to-orange-500",
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
    color: "from-emerald-400 to-teal-600",
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
    color: "from-amber-400 to-yellow-500",
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
    color: "from-green-400 to-emerald-500",
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
    color: "from-rose-400 to-red-500",
  },
];

const ProductCard = ({ product, index }: { product: Product; index: number }) => (
  <div
    className="group relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up border border-border/50"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {/* Badge */}
    {product.badge && (
      <span className={`absolute top-4 right-4 z-20 px-3 py-1.5 bg-gradient-to-r ${product.color} text-white text-xs font-bold rounded-full shadow-lg`}>
        {product.badge}
      </span>
    )}
    
    {/* Image Container - properly contained with curved corners */}
    <div className="relative h-52 mx-4 mt-4 rounded-2xl overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
      <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10`} />
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-contain p-4 drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
      />
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`} />
    </div>

    {/* Content */}
    <div className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <span className={`p-2 bg-gradient-to-br ${product.color} rounded-xl text-white shadow-md`}>
          {product.icon}
        </span>
        <h4 className="font-display text-xl font-bold text-foreground">
          {product.name}
        </h4>
      </div>
      
      <p className="text-muted-foreground font-body text-sm mb-4 leading-relaxed line-clamp-2">
        {product.description}
      </p>

      {/* Advantages */}
      <div className="space-y-2 mb-4">
        {product.advantages.map((advantage, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.color}`} />
            <span className="text-foreground/80 font-body">{advantage}</span>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-border">
        <span className={`text-xs font-bold font-body bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
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
    <section id="catalogue" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Discover our premium collection of bubble teas and herbal blends
          </p>
        </div>

        {/* Bubba Drinks Section */}
        <div className="mb-20">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-10 text-center flex items-center justify-center gap-3">
            <span className="text-4xl">🧋</span> Bubba Drinks
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bubbaProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>

        {/* Herbal Tea Section */}
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-10 text-center flex items-center justify-center gap-3">
            <span className="text-4xl">🍵</span> Herbal Teas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

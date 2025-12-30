import bubbaDrink1 from "@/assets/bubba-drink-1.png";
import bubbaDrink2 from "@/assets/bubba-drink-2.png";
import bubbaDrink3 from "@/assets/bubba-drink-3.png";
import herbalTea1 from "@/assets/herbal-tea-1.png";
import herbalTea2 from "@/assets/herbal-tea-2.png";
import herbalTea3 from "@/assets/herbal-tea-3.png";

interface Product {
  id: number;
  name: string;
  description: string;
  category: "bubba" | "herbal";
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Classic Pink Bubba",
    description: "Refreshing strawberry bubble tea with chewy tapioca pearls",
    category: "bubba",
    image: bubbaDrink1,
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Tiger Milk Tea",
    description: "Brown sugar swirl with creamy milk and black pearls",
    category: "bubba",
    image: bubbaDrink2,
    badge: "Popular",
  },
  {
    id: 3,
    name: "Purple Taro",
    description: "Creamy taro flavor with a vibrant purple hue",
    category: "bubba",
    image: bubbaDrink3,
    badge: "New",
  },
  {
    id: 4,
    name: "Green Wellness Blend",
    description: "Premium loose leaf herbal tea for daily wellness",
    category: "herbal",
    image: herbalTea1,
  },
  {
    id: 5,
    name: "Chamomile Dream",
    description: "Soothing chamomile tea for relaxation and calm",
    category: "herbal",
    image: herbalTea2,
    badge: "Relaxing",
  },
  {
    id: 6,
    name: "Matcha Green",
    description: "Authentic Japanese matcha for energy and focus",
    category: "herbal",
    image: herbalTea3,
    badge: "Premium",
  },
];

const ProductCatalogue = () => {
  const bubbaProducts = products.filter((p) => p.category === "bubba");
  const herbalProducts = products.filter((p) => p.category === "herbal");

  return (
    <section id="catalogue" className="py-20 bg-card">
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
        <div className="mb-16">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-secondary mb-8 text-center">
            🧋 Bubba Drinks
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {bubbaProducts.map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-background rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {product.badge && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {product.badge}
                  </span>
                )}
                <div className="aspect-square mb-4 overflow-hidden rounded-xl bg-muted/30 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-3/4 h-auto object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-display text-xl font-semibold text-secondary mb-2">
                  {product.name}
                </h4>
                <p className="text-muted-foreground font-body text-sm">
                  {product.description}
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground font-body">
                    Coming soon on Swiggy & Zomato
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Herbal Tea Section */}
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-secondary mb-8 text-center">
            🍵 Herbal Teas
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {herbalProducts.map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-background rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                {product.badge && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    {product.badge}
                  </span>
                )}
                <div className="aspect-square mb-4 overflow-hidden rounded-xl bg-muted/30 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-3/4 h-auto object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-display text-xl font-semibold text-secondary mb-2">
                  {product.name}
                </h4>
                <p className="text-muted-foreground font-body text-sm">
                  {product.description}
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground font-body">
                    Premium quality ingredients
                  </span>
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

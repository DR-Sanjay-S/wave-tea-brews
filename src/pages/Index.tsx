import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCatalogue from "@/components/ProductCatalogue";
import FeaturesSection from "@/components/FeaturesSection";
import NotifySection from "@/components/NotifySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>WaveTea - Premium Herbal Tea & Bubba Drinks | Launching Soon</title>
        <meta 
          name="description" 
          content="WaveTea brings you premium bubble tea drinks and herbal wellness teas. Order soon on Swiggy & Zomato. Make ur life simple." 
        />
        <meta name="keywords" content="bubble tea, bubba drinks, herbal tea, organic tea, wellness drinks, WaveTea, boba tea" />
        <link rel="canonical" href="https://wavetea.shop" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ProductCatalogue />
          <FeaturesSection />
          <NotifySection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

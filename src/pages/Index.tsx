import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import NotifySection from "@/components/NotifySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>WaveTea - Premium Herbal Tea & Drinks | Launching Soon</title>
        <meta 
          name="description" 
          content="WaveTea brings you pure herbal wellness. Discover premium organic herbal teas and drinks crafted for your mind, body & soul. Make ur life simple." 
        />
        <meta name="keywords" content="herbal tea, organic tea, wellness drinks, WaveTea, natural tea, herbal drinks" />
        <link rel="canonical" href="https://wavetea.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <NotifySection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

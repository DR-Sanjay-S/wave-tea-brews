import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDrink from "@/assets/hero-drink.png";
import abstractShapes from "@/assets/abstract-shapes.png";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const y3 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);

  useEffect(() => {
    const launchDate = new Date("2025-02-14T00:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen hero-gradient overflow-hidden pt-20"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] opacity-30"
        >
          <div className="w-full h-full bg-primary/20 blob floating-3d" />
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          className="absolute top-1/3 -left-32 w-[400px] h-[400px] opacity-20"
        >
          <div className="w-full h-full bg-accent/20 blob floating-3d-delayed" />
        </motion.div>
        <motion.div
          style={{ y: y3 }}
          className="absolute bottom-0 right-1/4 w-[300px] h-[300px] opacity-25"
        >
          <div className="w-full h-full bg-primary/15 blob floating-3d" />
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-primary/40"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          style={{ opacity, scale }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-80px)] py-12"
        >
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-card rounded-full shadow-soft border border-border">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Launching Valentine's Day 2025
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight">
                Discover the
                <br />
                <span className="text-gradient">Art of Tea</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-body">
                Premium bubble tea & herbal wellness drinks crafted with love.
                Experience refreshment redefined.
              </p>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">
                  Launch Countdown
                </span>
              </div>
              <div className="flex gap-4">
                {countdownItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="counter-box flex-1 max-w-[90px]"
                  >
                    <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                      {String(item.value).padStart(2, "0")}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="btn-gradient text-primary-foreground px-8 py-6 text-lg rounded-full shadow-glow hover:shadow-float transition-all duration-300 hover:scale-105"
              >
                Get Notified
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg rounded-full border-2 hover:bg-secondary transition-all duration-300"
              >
                Explore Menu
              </Button>
            </motion.div>

            {/* Platform Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center gap-6 pt-4"
            >
              <span className="text-sm text-muted-foreground">
                Coming soon on
              </span>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-card rounded-lg border border-border text-sm font-medium shadow-soft">
                  🛵 Swiggy
                </div>
                <div className="px-4 py-2 bg-card rounded-lg border border-border text-sm font-medium shadow-soft">
                  🍽️ Zomato
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - 3D Product Display */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Background Shape */}
            <motion.div
              style={{ y: y2 }}
              className="absolute w-[500px] h-[500px] opacity-60"
            >
              <img
                src={abstractShapes}
                alt=""
                className="w-full h-full object-contain floating-3d-delayed"
              />
            </motion.div>

            {/* Main Product Image */}
            <motion.div
              className="relative z-10 card-3d"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <div className="card-3d-inner">
                <motion.img
                  src={heroDrink}
                  alt="WaveTea Premium Bubble Tea"
                  className="w-80 md:w-96 lg:w-[450px] drop-shadow-2xl floating-3d"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              {/* Floating Feature Tags */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -left-8 top-1/4 glass-morphism rounded-2xl px-4 py-3 shadow-card"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="text-xl">🍃</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">100%</p>
                    <p className="text-sm font-semibold text-foreground">
                      Organic
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="absolute -right-8 top-1/2 glass-morphism rounded-2xl px-4 py-3 shadow-card"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <span className="text-xl">✨</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Premium</p>
                    <p className="text-sm font-semibold text-foreground">
                      Quality
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-morphism rounded-2xl px-5 py-3 shadow-card"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="text-xl">❤️</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Made with</p>
                    <p className="text-sm font-semibold text-foreground">
                      Love & Care
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-2.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

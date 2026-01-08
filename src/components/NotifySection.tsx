import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bell, Send, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import abstractShapes from "@/assets/abstract-shapes.png";

const NotifySection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
    setEmail("");

    toast({
      title: "You're on the list! 🎉",
      description: "We'll notify you as soon as we launch.",
    });
  };

  return (
    <section id="notify" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Decorations */}
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <img src={abstractShapes} alt="" className="w-full h-full" />
      </motion.div>
      <motion.div
        className="absolute -bottom-20 -left-20 w-64 h-64 opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <img src={abstractShapes} alt="" className="w-full h-full" />
      </motion.div>

      <div className="container mx-auto px-4" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Card */}
          <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                className="w-20 h-20 mx-auto mb-8 btn-gradient rounded-3xl flex items-center justify-center shadow-glow"
              >
                <Bell className="w-10 h-10 text-primary-foreground" />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4 mb-10"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
                  Be the First to <span className="text-gradient">Know</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                  Join our waitlist and get exclusive early access, special
                  launch discounts, and updates.
                </p>
              </motion.div>

              {/* Form */}
              {!isSubmitted ? (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-14 px-6 rounded-full bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="h-14 px-8 btn-gradient text-primary-foreground rounded-full shadow-soft hover:shadow-glow transition-all duration-300 disabled:opacity-70"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Notify Me
                      </>
                    )}
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-lg font-medium text-foreground">
                    You're on the list! 🎉
                  </p>
                  <p className="text-muted-foreground">
                    We'll keep you updated on our launch.
                  </p>
                </motion.div>
              )}

              {/* Features */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-6 mt-10"
              >
                {["Early Access", "Launch Discounts", "Exclusive Updates"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotifySection;

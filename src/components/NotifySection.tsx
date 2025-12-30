import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import waveTeaLogo from "@/assets/wavetea-logo.png";

const NotifySection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list! 🍃",
        description: "We'll notify you when WaveTea launches.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 md:py-32 hero-gradient relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={waveTeaLogo} 
              alt="WaveTea Logo" 
              className="h-24 md:h-32 w-auto animate-scale-in"
            />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Be the First to Know
          </h2>
          <p className="text-lg text-muted-foreground font-body mb-8">
            Join our community and get exclusive early access when we launch
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 px-6 rounded-full border-primary/30 focus:border-primary bg-background/80 backdrop-blur-sm font-body"
              required
            />
            <Button 
              type="submit"
              className="h-12 px-8 rounded-full btn-primary font-body font-medium"
            >
              Notify Me
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4 font-body">
            No spam, unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotifySection;

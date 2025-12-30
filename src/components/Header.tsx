import waveTeaLogo from "@/assets/wavetea-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={waveTeaLogo} 
              alt="WaveTea Logo" 
              className="h-12 md:h-16 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#catalogue" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Products</a>
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#notify" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Get Notified</a>
          </div>

          {/* Coming Soon Badge */}
          <div className="flex items-center gap-4">
            <span className="hidden lg:inline-block text-sm text-muted-foreground font-body">
              make ur life simple
            </span>
            <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
              <span className="text-sm font-medium text-primary">Coming Soon</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

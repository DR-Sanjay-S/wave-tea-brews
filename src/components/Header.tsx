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

          {/* Coming Soon Badge */}
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block text-sm text-muted-foreground font-body">
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

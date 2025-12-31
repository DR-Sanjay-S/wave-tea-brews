import waveTeaLogo from "@/assets/wavetea-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={waveTeaLogo} 
              alt="WaveTea Logo" 
              className="h-10 md:h-14 w-auto drop-shadow-lg"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#catalogue" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Products</a>
            <a href="#features" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#notify" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Get Notified</a>
          </div>

          {/* Coming Soon Badge */}
          <div className="flex items-center gap-4">
            <span className="hidden lg:inline-block text-sm text-white/70 font-body">
              make ur life simple
            </span>
            <div className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/25">
              <span className="text-sm font-semibold text-white">Coming Soon</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

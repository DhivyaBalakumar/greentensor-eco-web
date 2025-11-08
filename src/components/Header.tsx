import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Leaf } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'py-3 glass' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`transition-all duration-500 ${scrolled ? 'scale-75' : 'scale-100'}`}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-eco-green to-tech-blue flex items-center justify-center glow-green">
              <Leaf className="w-6 h-6 text-background" />
            </div>
          </div>
          <span className={`font-bold text-xl gradient-text transition-all duration-500 ${scrolled ? 'text-lg' : 'text-xl'}`}>
            GreenTensor
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('why')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Why Us
          </button>
          <button 
            onClick={() => scrollToSection('vision')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Vision
          </button>
          <button 
            onClick={() => scrollToSection('product')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Product
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-eco-green to-tech-blue hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

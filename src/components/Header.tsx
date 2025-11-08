import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import logo from '@/assets/gt-logo.png';

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
          <div className={`transition-all duration-500 ${scrolled ? 'h-8' : 'h-12'}`}>
            <img 
              src={logo} 
              alt="GreenTensor Logo" 
              className="h-full w-auto object-contain"
            />
          </div>
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

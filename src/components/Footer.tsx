import { Leaf, Linkedin, Github } from 'lucide-react';
import logo from '@/assets/greentensor-logo.png';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="GreenTensor Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Making AI sustainable and secure by default.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#why" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#product" className="hover:text-foreground transition-colors">Dashboard</a></li>
              <li><a href="#vision" className="hover:text-foreground transition-colors">Vision</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#vision" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/in/dhivyabalakumar04" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card hover:bg-tech-blue transition-colors flex items-center justify-center group"
              >
                <Linkedin className="w-5 h-5 text-foreground group-hover:text-background" />
              </a>
              <a 
                href="https://github.com/DhivyaBalakumar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card hover:bg-cyber-cyan transition-colors flex items-center justify-center group"
              >
                <Github className="w-5 h-5 text-foreground group-hover:text-background" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 GreenTensor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Leaf, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-eco-green to-tech-blue flex items-center justify-center">
                <Leaf className="w-6 h-6 text-background" />
              </div>
              <span className="font-bold text-xl gradient-text">GreenTensor</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Making AI sustainable and secure by default.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-card hover:bg-eco-green transition-colors flex items-center justify-center group">
                <Twitter className="w-5 h-5 text-foreground group-hover:text-background" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card hover:bg-tech-blue transition-colors flex items-center justify-center group">
                <Linkedin className="w-5 h-5 text-foreground group-hover:text-background" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-card hover:bg-cyber-cyan transition-colors flex items-center justify-center group">
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

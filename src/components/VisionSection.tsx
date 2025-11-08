import { Target, Eye, Heart } from 'lucide-react';

const VisionSection = () => {
  return (
    <section id="vision" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Vision Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-eco-green to-tech-blue flex items-center justify-center">
                  <Eye className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-3xl font-bold gradient-text">Our Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create a world where artificial intelligence operates in harmony with our planet, 
                ensuring that technological advancement doesn't come at the cost of environmental sustainability 
                or digital security.
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-tech-blue to-cyber-cyan flex items-center justify-center">
                  <Target className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-3xl font-bold gradient-text">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide enterprises with cutting-edge tools that make AI infrastructure inherently 
                sustainable and secure, eliminating the traditional trade-off between performance, 
                environmental responsibility, and protection.
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-cyan to-eco-green flex items-center justify-center">
                  <Heart className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-3xl font-bold gradient-text">Our Values</h3>
              </div>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-eco-green" />
                  Environmental stewardship in every decision
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-tech-blue" />
                  Uncompromising security standards
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyber-cyan" />
                  Innovation with responsibility
                </li>
              </ul>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="glass rounded-3xl p-8 hover-lift">
              <div className="aspect-square bg-gradient-to-br from-eco-green/20 via-tech-blue/20 to-cyber-cyan/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-eco-green/10 to-tech-blue/10 animate-pulse-glow" />
                <div className="relative z-10 text-center space-y-4">
                  <div className="text-6xl font-bold gradient-text">2025</div>
                  <div className="text-xl text-foreground">Leading the Green AI Revolution</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;

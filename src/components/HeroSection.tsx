import { Button } from './ui/button';
import { ArrowRight, Award } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWhy = () => {
    const element = document.getElementById('why');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        {/* Innovation Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <Award className="w-5 h-5 text-eco-green" />
          <span className="text-sm font-medium gradient-text">First-of-its-kind Innovation</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Optimizing AI.
          <br />
          <span className="gradient-text">Securing the Future.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          The first platform to make AI sustainable and secure by default. 
          Reduce your carbon footprint while enhancing digital protection.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-to-r from-eco-green to-tech-blue hover:opacity-90 transition-all hover-lift group text-lg px-8"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={scrollToWhy}
            className="border-eco-green text-eco-green hover:bg-eco-green hover:text-background transition-all text-lg px-8"
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="glass rounded-2xl p-6 hover-lift">
            <div className="text-4xl font-bold gradient-text mb-2">40%</div>
            <div className="text-muted-foreground">Carbon Reduction</div>
          </div>
          <div className="glass rounded-2xl p-6 hover-lift">
            <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-muted-foreground">Security Uptime</div>
          </div>
          <div className="glass rounded-2xl p-6 hover-lift">
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-muted-foreground">AI Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

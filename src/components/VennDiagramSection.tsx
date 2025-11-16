import { useEffect, useRef, useState } from 'react';
import gtLogo from '@/assets/gt-logo.png';

const VennDiagramSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-eco-green to-tech-blue bg-clip-text text-transparent">
            The GreenTensor Advantage
          </h2>
          <p className="text-muted-foreground text-lg">
            Where sustainability, security, and intelligence converge
          </p>
        </div>

        <div className="relative w-full h-[600px] flex items-center justify-center">
          {/* Top Circle - SOTA models */}
          <div
            className={`absolute transition-all duration-[2000ms] ease-out ${
              isVisible
                ? 'top-[10%] left-1/2 -translate-x-1/2 w-[320px] h-[320px] opacity-100'
                : 'top-[40%] left-1/2 -translate-x-1/2 w-[80px] h-[80px] opacity-30'
            }`}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full border-2 border-eco-green/40 bg-eco-green/10 backdrop-blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-xl font-semibold text-foreground">SOTA</p>
                  <p className="text-lg text-foreground">models</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Left Circle - Full software lifecycle */}
          <div
            className={`absolute transition-all duration-[2000ms] ease-out ${
              isVisible
                ? 'bottom-[15%] left-[20%] w-[320px] h-[320px] opacity-100'
                : 'bottom-[40%] left-[45%] w-[80px] h-[80px] opacity-30'
            }`}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full border-2 border-tech-blue/40 bg-tech-blue/10 backdrop-blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-xl font-semibold text-foreground">Full software</p>
                  <p className="text-lg text-foreground">lifecycle</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right Circle - Deep context */}
          <div
            className={`absolute transition-all duration-[2000ms] ease-out ${
              isVisible
                ? 'bottom-[15%] right-[20%] w-[320px] h-[320px] opacity-100'
                : 'bottom-[40%] right-[45%] w-[80px] h-[80px] opacity-30'
            }`}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full border-2 border-primary/40 bg-primary/10 backdrop-blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-xl font-semibold text-foreground">Deep</p>
                  <p className="text-lg text-foreground">context</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Logo - appears when circles intersect */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 delay-[1500ms] ${
              isVisible
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-0'
            }`}
          >
            <div className="relative">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-eco-green to-tech-blue rounded-full blur-xl opacity-50" />
              
              {/* Logo container */}
              <div className="relative bg-background/90 backdrop-blur-sm rounded-full p-8 border-2 border-primary/30">
                <img 
                  src={gtLogo} 
                  alt="GreenTensor Logo" 
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Center text - GreenTensor label */}
          <div
            className={`absolute top-[58%] left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[2000ms] ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-2xl font-bold bg-gradient-to-r from-eco-green to-tech-blue bg-clip-text text-transparent whitespace-nowrap">
              GreenTensor
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            GreenTensor uniquely combines state-of-the-art AI models with comprehensive lifecycle management 
            and deep contextual understanding to deliver unparalleled sustainability and security insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VennDiagramSection;
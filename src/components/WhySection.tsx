import { Leaf, Shield, Zap, Brain, TrendingDown, Lock } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Eco-Friendly AI',
    description: 'Reduce your AI carbon footprint by up to 40% without compromising performance.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security built into every layer of your AI infrastructure.',
  },
  {
    icon: Zap,
    title: 'Optimized Performance',
    description: 'Faster inference times and reduced latency through intelligent optimization.',
  },
  {
    icon: Brain,
    title: 'Smart Monitoring',
    description: 'Real-time insights into your AI systems environmental and security metrics.',
  },
  {
    icon: TrendingDown,
    title: 'Cost Reduction',
    description: 'Lower operational costs through efficient resource utilization.',
  },
  {
    icon: Lock,
    title: 'Compliance Ready',
    description: 'Meet regulatory requirements for both sustainability and data protection.',
  },
];

const WhySection = () => {
  return (
    <section id="why" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="gradient-text">GreenTensor</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pioneering the intersection of sustainable computing and AI security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-eco-green to-tech-blue flex items-center justify-center mb-6 glow-green">
                <feature.icon className="w-7 h-7 text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;

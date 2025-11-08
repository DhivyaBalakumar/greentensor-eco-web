import { useEffect, useState } from 'react';
import { TrendingDown, Shield, Activity, Leaf } from 'lucide-react';

const DashboardPreview = () => {
  const [metrics, setMetrics] = useState({
    carbonSaved: 0,
    securityScore: 0,
    efficiency: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        carbonSaved: Math.floor(Math.random() * 100) + 300,
        securityScore: Math.floor(Math.random() * 5) + 95,
        efficiency: Math.floor(Math.random() * 10) + 85,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="product" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real-Time <span className="gradient-text">Monitoring</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your AI's environmental impact and security posture in real-time
          </p>
        </div>

        <div className="glass rounded-3xl p-8 max-w-5xl mx-auto hover-lift">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">AI Performance Dashboard</h3>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-eco-green animate-pulse" />
              <span className="text-sm text-muted-foreground">Live</span>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card/50 rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-eco-green/20 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-eco-green" />
                </div>
                <span className="text-sm text-muted-foreground">Carbon Saved</span>
              </div>
              <div className="text-3xl font-bold gradient-text transition-all duration-500">
                {metrics.carbonSaved}kg
              </div>
              <div className="flex items-center gap-1 mt-2 text-eco-green text-sm">
                <TrendingDown className="w-4 h-4" />
                <span>-12% this week</span>
              </div>
            </div>

            <div className="bg-card/50 rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-tech-blue/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-tech-blue" />
                </div>
                <span className="text-sm text-muted-foreground">Security Score</span>
              </div>
              <div className="text-3xl font-bold gradient-text transition-all duration-500">
                {metrics.securityScore}/100
              </div>
              <div className="flex items-center gap-1 mt-2 text-tech-blue text-sm">
                <Activity className="w-4 h-4" />
                <span>Excellent</span>
              </div>
            </div>

            <div className="bg-card/50 rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyber-cyan/20 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-cyber-cyan" />
                </div>
                <span className="text-sm text-muted-foreground">Efficiency</span>
              </div>
              <div className="text-3xl font-bold gradient-text transition-all duration-500">
                {metrics.efficiency}%
              </div>
              <div className="flex items-center gap-1 mt-2 text-cyber-cyan text-sm">
                <TrendingDown className="w-4 h-4" />
                <span>Optimized</span>
              </div>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-card/30 rounded-xl p-6 border border-border/50 h-48 flex items-center justify-center">
            <div className="text-center space-y-2">
              <Activity className="w-12 h-12 text-eco-green mx-auto animate-pulse" />
              <p className="text-muted-foreground">Live performance charts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;

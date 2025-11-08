const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient waves */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-deep-ocean to-forest-dark" />
      
      {/* Animated wave layers */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 animate-wave-flow"
          style={{
            background: 'radial-gradient(circle at 30% 50%, hsl(var(--eco-green) / 0.3) 0%, transparent 50%)',
          }}
        />
        <div 
          className="absolute w-[200%] h-[200%] -top-1/2 -right-1/2 animate-wave-flow"
          style={{
            background: 'radial-gradient(circle at 70% 50%, hsl(var(--tech-blue) / 0.3) 0%, transparent 50%)',
            animationDelay: '-10s',
          }}
        />
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;

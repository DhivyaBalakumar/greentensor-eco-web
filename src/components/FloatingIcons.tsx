import { Leaf, Shield, Cpu, Brain, Lock, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FloatingIcon {
  id: number;
  Icon: any;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

const FloatingIcons = () => {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const iconComponents = [Leaf, Shield, Cpu, Brain, Lock, Zap];
    const generatedIcons = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      Icon: iconComponents[i % iconComponents.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 4,
    }));
    setIcons(generatedIcons);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {icons.map((icon) => {
        const Icon = icon.Icon;
        return (
          <div
            key={icon.id}
            className="absolute opacity-20 animate-float"
            style={{
              left: `${icon.x}%`,
              top: `${icon.y}%`,
              animationDelay: `${icon.delay}s`,
              animationDuration: `${icon.duration}s`,
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            <Icon 
              className="w-12 h-12 text-eco-green" 
              strokeWidth={1.5}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;

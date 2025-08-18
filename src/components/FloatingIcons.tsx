'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Wand2, Star, Sparkles, Zap, Heart, Shield, Crown, Gem } from 'lucide-react';

interface FloatingIcon {
  id: number;
  icon: React.ReactNode;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

// Stable random function to prevent hydration mismatch
const stableRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const FloatingIcons = () => {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const iconTypes = [
      <Wand2 key="wand" className="text-yellow-400 drop-shadow-lg" size={20} />,
      <Star key="star" className="text-yellow-300 drop-shadow-lg" size={16} />,
      <Sparkles key="sparkles" className="text-blue-400 drop-shadow-lg" size={14} />,
      <Zap key="zap" className="text-purple-400 drop-shadow-lg" size={18} />,
      <Heart key="heart" className="text-red-400 drop-shadow-lg" size={16} />,
      <Shield key="shield" className="text-green-400 drop-shadow-lg" size={20} />,
      <Crown key="crown" className="text-yellow-500 drop-shadow-lg" size={16} />,
      <Gem key="gem" className="text-purple-300 drop-shadow-lg" size={14} />,
    ];

    const generateIcons = () => {
      const newIcons: FloatingIcon[] = [];
      for (let i = 0; i < 12; i++) {
        newIcons.push({
          id: i,
          icon: iconTypes[i % iconTypes.length],
          x: stableRandom(i) * 100,
          y: stableRandom(i + 1000) * 100,
          delay: stableRandom(i + 2000) * 5,
          duration: 3 + stableRandom(i + 3000) * 4,
        });
      }
      setIcons(newIcons);
    };

    generateIcons();
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            delay: icon.delay,
            ease: "easeInOut",
          }}
        >
          {icon.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons; 
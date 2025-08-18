'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import FloatingIcons from '@/components/FloatingIcons';
import ScrollAnimation from '@/components/ScrollAnimation';
import { FlaskConical, Heart, Zap, Eye } from 'lucide-react';

export default function PotionsPage() {
  const potions = [
    {
      id: 'felix-felicis',
      name: 'Felix Felicis',
      effect: 'Liquid Luck',
      difficulty: 'Advanced',
      description: 'A potion that makes the drinker lucky for a period of time.',
      icon: <FlaskConical className="h-8 w-8 text-yellow-400" />
    },
    {
      id: 'polyjuice',
      name: 'Polyjuice Potion',
      effect: 'Transformation',
      difficulty: 'Advanced',
      description: 'Allows the drinker to assume the form of another person.',
      icon: <Eye className="h-8 w-8 text-green-400" />
    },
    {
      id: 'veritaserum',
      name: 'Veritaserum',
      effect: 'Truth Serum',
      difficulty: 'Advanced',
      description: 'A powerful truth potion that forces the drinker to tell the truth.',
      icon: <Zap className="h-8 w-8 text-blue-400" />
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <FloatingIcons />
      
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold magical-title mb-6">
                Potions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Master the art of potion brewing and discover magical concoctions
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {potions.map((potion, index) => (
              <ScrollAnimation key={potion.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    {potion.icon}
                    <div>
                      <h3 className="text-xl font-bold text-white">{potion.name}</h3>
                      <p className="text-gray-400">{potion.effect}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{potion.description}</p>
                  
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {potion.difficulty}
                  </span>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 
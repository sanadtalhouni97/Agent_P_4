'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import FloatingIcons from '@/components/FloatingIcons';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Calendar, Trophy, Star } from 'lucide-react';

export default function EventsPage() {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <FloatingIcons />
      
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold magical-title mb-6">
                Events
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Magical events and celebrations
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation delay={0.1}>
              <motion.div className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-yellow-500/20">
                <Calendar className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Quidditch Matches</h3>
                <p className="text-gray-300">Watch thrilling matches between houses.</p>
              </motion.div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <motion.div className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-yellow-500/20">
                <Trophy className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Triwizard Tournament</h3>
                <p className="text-gray-300">The most dangerous magical competition.</p>
              </motion.div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.3}>
              <motion.div className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-yellow-500/20">
                <Star className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Yule Ball</h3>
                <p className="text-gray-300">A magical winter celebration.</p>
              </motion.div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
} 
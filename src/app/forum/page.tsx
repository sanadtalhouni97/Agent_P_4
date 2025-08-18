'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import FloatingIcons from '@/components/FloatingIcons';
import ScrollAnimation from '@/components/ScrollAnimation';
import { MessageCircle, Users, Star } from 'lucide-react';

export default function ForumPage() {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <FloatingIcons />
      
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold magical-title mb-6">
                Forum
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join the wizarding community discussion
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation delay={0.1}>
              <motion.div className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-yellow-500/20">
                <MessageCircle className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Discussions</h3>
                <p className="text-gray-300">Share your thoughts about the series.</p>
              </motion.div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <motion.div className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-yellow-500/20">
                <Users className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Community</h3>
                <p className="text-gray-300">Connect with fellow Potter fans.</p>
              </motion.div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.3}>
              <motion.div className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-yellow-500/20">
                <Star className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Theories</h3>
                <p className="text-gray-300">Share your magical theories.</p>
              </motion.div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
} 
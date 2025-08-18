'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import FloatingIcons from '@/components/FloatingIcons';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Shield, Heart, Crown } from 'lucide-react';

export default function GryffindorPage() {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <FloatingIcons />
      
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold house-gryffindor mb-6">
                Gryffindor House
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                "Where dwell the brave at heart, their daring, nerve, and chivalry set Gryffindors apart"
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation delay={0.1}>
              <motion.div className="bg-red-900/40 backdrop-blur-md rounded-lg p-6 border border-red-500/30">
                <Shield className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Bravery</h3>
                <p className="text-gray-300">Gryffindors are known for their courage and willingness to face danger.</p>
              </motion.div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <motion.div className="bg-red-900/40 backdrop-blur-md rounded-lg p-6 border border-red-500/30">
                <Heart className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Chivalry</h3>
                <p className="text-gray-300">They value honor, fairness, and protecting the weak.</p>
              </motion.div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.3}>
              <motion.div className="bg-red-900/40 backdrop-blur-md rounded-lg p-6 border border-red-500/30">
                <Crown className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Nerve</h3>
                <p className="text-gray-300">Gryffindors have the determination to stand up for what's right.</p>
              </motion.div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
} 
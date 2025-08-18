'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import FloatingIcons from '@/components/FloatingIcons';
import ScrollAnimation from '@/components/ScrollAnimation';
import { FileText, Scale, Star } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <FloatingIcons />
      
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold magical-title mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The rules of our magical community
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation delay={0.1}>
              <motion.div className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-yellow-500/20">
                <FileText className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Usage Terms</h3>
                <p className="text-gray-300">How to properly use our magical website.</p>
              </motion.div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <motion.div className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-yellow-500/20">
                <Scale className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Legal</h3>
                <p className="text-gray-300">Legal terms and conditions.</p>
              </motion.div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.3}>
              <motion.div className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-yellow-500/20">
                <Star className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Community</h3>
                <p className="text-gray-300">Guidelines for our magical community.</p>
              </motion.div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
} 
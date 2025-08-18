'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import FloatingIcons from '@/components/FloatingIcons';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Wand2, Star, Castle, BookOpen, Users, Zap, Heart, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [currentSpell, setCurrentSpell] = useState(0);
  const spells = [
    "Lumos Maxima",
    "Expecto Patronum", 
    "Wingardium Leviosa",
    "Alohomora",
    "Expelliarmus"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpell((prev) => (prev + 1) % spells.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Castle className="h-10 w-10 text-yellow-400" />,
      title: "Explore Hogwarts",
      description: "Discover the magical castle and its secrets",
      href: "/locations",
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: <Users className="h-10 w-10 text-red-400" />,
      title: "Meet Characters",
      description: "Learn about your favorite wizards and witches",
      href: "/characters",
      color: "from-red-500/20 to-pink-500/20"
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-400" />,
      title: "Master Spells",
      description: "Study powerful magical incantations",
      href: "/spells",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Shield className="h-10 w-10 text-green-400" />,
      title: "Join Houses",
      description: "Find your place in the wizarding world",
      href: "/houses",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <BookOpen className="h-10 w-10 text-purple-400" />,
      title: "Learn Potions",
      description: "Brew magical concoctions and elixirs",
      href: "/potions",
      color: "from-purple-500/20 to-violet-500/20"
    },
    {
      icon: <Heart className="h-10 w-10 text-pink-400" />,
      title: "Magical Creatures",
      description: "Encounter fantastic beasts and beings",
      href: "/creatures",
      color: "from-pink-500/20 to-rose-500/20"
    }
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <Navigation />
      <FloatingIcons />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full"
              style={{
                left: `${(i * 7) % 100}%`,
                top: `${(i * 11) % 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mb-8"
            >
              <Wand2 className="h-24 w-24 text-yellow-400 mx-auto drop-shadow-2xl" />
            </motion.div>
            
            <h1 className="text-7xl md:text-9xl font-bold magical-title mb-8 drop-shadow-2xl">
              Welcome to Hogwarts
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Enter the magical world of Harry Potter and experience the wonder of witchcraft and wizardry
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-yellow-500/30 shadow-2xl">
              <p className="text-xl text-gray-300 mb-4">Current Spell:</p>
              <motion.p
                key={currentSpell}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-4xl font-bold text-yellow-400"
              >
                {spells[currentSpell]}
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/houses">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-6 px-12 rounded-xl text-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-2xl flex items-center gap-3"
              >
                Begin Your Journey
                <ArrowRight className="h-6 w-6" />
              </motion.button>
            </Link>
            <Link href="/characters">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold py-6 px-12 rounded-xl text-xl hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-2xl"
              >
                Meet the Characters
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold magical-title mb-8">
                Discover the Magic
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Explore every aspect of the wizarding world through our interactive experience
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollAnimation key={feature.title} delay={index * 0.1}>
                <Link href={feature.href}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className={`bg-gradient-to-br ${feature.color} backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-yellow-500/40 transition-all duration-300 cursor-pointer shadow-2xl h-full`}
                  >
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">{feature.title}</h3>
                    <p className="text-gray-300 text-center leading-relaxed">{feature.description}</p>
                  </motion.div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-t from-black/50 to-purple-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-5xl md:text-7xl font-bold magical-title mb-8">
              Ready to Cast Your First Spell?
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join thousands of wizards and witches in this magical journey
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-6 px-12 rounded-xl text-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-2xl"
            >
              Start Learning Magic
            </motion.button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}

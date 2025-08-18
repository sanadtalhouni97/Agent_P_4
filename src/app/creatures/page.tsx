'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import FloatingIcons from '@/components/FloatingIcons';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Heart, Shield, Zap, Eye, Search } from 'lucide-react';

export default function CreaturesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCreature, setSelectedCreature] = useState<string | null>(null);

  const creatures = [
    {
      id: 'phoenix',
      name: 'Phoenix',
      classification: 'XXXXX',
      description: 'A magnificent bird that can burst into flames and be reborn from its ashes.',
      abilities: ['Immortality', 'Healing Tears', 'Fire Resistance', 'Teleportation'],
      icon: <Heart className="h-8 w-8 text-red-400" />
    },
    {
      id: 'dragon',
      name: 'Dragon',
      classification: 'XXXXX',
      description: 'Massive, fire-breathing reptiles that are among the most dangerous magical creatures.',
      abilities: ['Fire Breathing', 'Flight', 'Super Strength', 'Magical Hide'],
      icon: <Zap className="h-8 w-8 text-orange-400" />
    },
    {
      id: 'unicorn',
      name: 'Unicorn',
      classification: 'XXXXX',
      description: 'Pure white horses with a single horn, known for their healing properties.',
      abilities: ['Healing Blood', 'Pure Magic', 'Immortality', 'Divination'],
      icon: <Heart className="h-8 w-8 text-white" />
    },
    {
      id: 'centaur',
      name: 'Centaurs',
      classification: 'XXXX',
      description: 'Half-human, half-horse beings known for their wisdom and archery skills.',
      abilities: ['Archery', 'Divination', 'Healing', 'Forest Magic'],
      icon: <Shield className="h-8 w-8 text-brown-400" />
    },
    {
      id: 'hippogriff',
      name: 'Hippogriff',
      classification: 'XXXX',
      description: 'Proud creatures with the front half of an eagle and the back half of a horse.',
      abilities: ['Flight', 'Loyalty', 'Pride', 'Respect'],
      icon: <Eye className="h-8 w-8 text-gold-400" />
    },
    {
      id: 'thestral',
      name: 'Thestrals',
      classification: 'XXXX',
      description: 'Skeletal horses that are only visible to those who have witnessed death.',
      abilities: ['Invisibility', 'Flight', 'Death Sense', 'Loyalty'],
      icon: <Shield className="h-8 w-8 text-black" />
    }
  ];

  const filteredCreatures = creatures.filter(creature => 
    creature.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <FloatingIcons />
      
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold magical-title mb-6">
                Magical Creatures
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the fantastic beasts and beings of the wizarding world
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="mb-12">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search creatures..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/40 backdrop-blur-md border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                />
              </div>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCreatures.map((creature, index) => (
              <ScrollAnimation key={creature.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedCreature(selectedCreature === creature.id ? null : creature.id)}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    {creature.icon}
                    <div>
                      <h3 className="text-xl font-bold text-white">{creature.name}</h3>
                      <p className="text-gray-400">Classification: {creature.classification}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{creature.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {creature.abilities.slice(0, 2).map((ability) => (
                      <span key={ability} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                        {ability}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import FloatingIcons from '@/components/FloatingIcons';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Zap, Shield, Eye, Heart, Search, Wand2 } from 'lucide-react';

export default function SpellsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSpell, setSelectedSpell] = useState<string | null>(null);

  const spells = [
    {
      id: 'lumos',
      name: 'Lumos',
      incantation: 'Lumos',
      category: 'Charm',
      effect: 'Creates light at wand tip',
      difficulty: 'Beginner',
      description: 'A simple charm that creates a beam of light from the wand tip, useful for illumination in dark places.',
      wandMovement: 'Simple flick',
      color: 'White light',
      icon: <Zap className="h-8 w-8 text-yellow-400" />
    },
    {
      id: 'expelliarmus',
      name: 'Disarming Charm',
      incantation: 'Expelliarmus',
      category: 'Charm',
      effect: 'Disarms opponent',
      difficulty: 'Intermediate',
      description: 'The Disarming Charm causes the target&apos;s wand to fly out of their hand. Harry Potter&apos;s signature spell.',
      wandMovement: 'Forward thrust',
      color: 'Red',
      icon: <Shield className="h-8 w-8 text-red-400" />
    },
    {
      id: 'expecto-patronum',
      name: 'Patronus Charm',
      incantation: 'Expecto Patronum',
      category: 'Charm',
      effect: 'Conjures Patronus',
      difficulty: 'Advanced',
      description: 'A powerful defensive spell that conjures a Patronus, a guardian that protects against Dementors.',
      wandMovement: 'Circular motion',
      color: 'Silver',
      icon: <Heart className="h-8 w-8 text-blue-400" />
    },
    {
      id: 'wingardium-leviosa',
      name: 'Levitation Charm',
      incantation: 'Wingardium Leviosa',
      category: 'Charm',
      effect: 'Makes objects float',
      difficulty: 'Beginner',
      description: 'A charm that makes objects levitate and float in the air. The key is the pronunciation and wand movement.',
      wandMovement: 'Swish and flick',
      color: 'Blue',
      icon: <Zap className="h-8 w-8 text-blue-400" />
    },
    {
      id: 'alohomora',
      name: 'Unlocking Charm',
      incantation: 'Alohomora',
      category: 'Charm',
      effect: 'Unlocks doors',
      difficulty: 'Beginner',
      description: 'A charm that unlocks doors and other locked objects. Cannot unlock doors protected by more powerful magic.',
      wandMovement: 'Key-like motion',
      color: 'Blue',
      icon: <Eye className="h-8 w-8 text-green-400" />
    },
    {
      id: 'accio',
      name: 'Summoning Charm',
      incantation: 'Accio',
      category: 'Charm',
      effect: 'Summons objects',
      difficulty: 'Intermediate',
      description: 'A charm that summons objects to the caster. The summoned object will fly through the air to the caster&apos;s hand.',
      wandMovement: 'Point and pull',
      color: 'Blue',
      icon: <Zap className="h-8 w-8 text-purple-400" />
    },
    {
      id: 'reparo',
      name: 'Mending Charm',
      incantation: 'Reparo',
      category: 'Charm',
      effect: 'Repairs broken objects',
      difficulty: 'Intermediate',
      description: 'A charm that repairs broken or damaged objects. Cannot repair magical objects that have been destroyed by dark magic.',
      wandMovement: 'Circular motion',
      color: 'Gold',
      icon: <Shield className="h-8 w-8 text-yellow-400" />
    },
    {
      id: 'protego',
      name: 'Shield Charm',
      incantation: 'Protego',
      category: 'Charm',
      effect: 'Creates magical shield',
      difficulty: 'Intermediate',
      description: 'A defensive charm that creates a magical barrier to deflect spells and physical attacks.',
      wandMovement: 'Forward thrust',
      color: 'Blue',
      icon: <Shield className="h-8 w-8 text-blue-400" />
    },
    {
      id: 'stupefy',
      name: 'Stunning Spell',
      incantation: 'Stupefy',
      category: 'Charm',
      effect: 'Stuns target',
      difficulty: 'Intermediate',
      description: 'A spell that renders the target unconscious. One of the most commonly used spells in dueling.',
      wandMovement: 'Forward thrust',
      color: 'Red',
      icon: <Zap className="h-8 w-8 text-red-400" />
    },
    {
      id: 'incendio',
      name: 'Fire-Making Spell',
      incantation: 'Incendio',
      category: 'Charm',
      effect: 'Creates fire',
      difficulty: 'Intermediate',
      description: 'A spell that creates fire. Can be used to start fires or as a weapon in combat.',
      wandMovement: 'Circular motion',
      color: 'Orange/Red',
      icon: <Zap className="h-8 w-8 text-orange-400" />
    },
    {
      id: 'aguamenti',
      name: 'Water-Making Spell',
      incantation: 'Aguamenti',
      category: 'Charm',
      effect: 'Creates water',
      difficulty: 'Intermediate',
      description: 'A spell that conjures water from the wand tip. Useful for extinguishing fires or creating water sources.',
      wandMovement: 'Forward thrust',
      color: 'Blue',
      icon: <Zap className="h-8 w-8 text-blue-400" />
    },
    {
      id: 'reducto',
      name: 'Reductor Curse',
      incantation: 'Reducto',
      category: 'Curse',
      effect: 'Blasts objects apart',
      difficulty: 'Advanced',
      description: 'A curse that causes objects to explode or blast apart. Can be used to destroy obstacles or as a weapon.',
      wandMovement: 'Forward thrust',
      color: 'Red',
      icon: <Zap className="h-8 w-8 text-red-500" />
    }
  ];

  const categories = ['all', 'charm', 'curse', 'transfiguration', 'healing', 'dark arts'];

  const filteredSpells = spells.filter(spell => {
    const matchesSearch = spell.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         spell.incantation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || spell.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <FloatingIcons />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold magical-title mb-6">
                Spells & Charms
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Master the art of spellcasting and discover powerful magical incantations
              </p>
            </div>
          </ScrollAnimation>

          {/* Search and Filter */}
          <ScrollAnimation delay={0.2}>
            <div className="mb-12 flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search spells..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/40 backdrop-blur-md border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                />
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-yellow-500 text-black'
                        : 'bg-black/40 text-gray-300 hover:bg-black/60'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Spells Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredSpells.map((spell, index) => (
              <ScrollAnimation key={spell.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedSpell(selectedSpell === spell.id ? null : spell.id)}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    {spell.icon}
                    <div>
                      <h3 className="text-xl font-bold text-white">{spell.name}</h3>
                      <p className="text-gray-400 italic">&ldquo;{spell.incantation}&rdquo;</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{spell.description}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className={`px-3 py-1 rounded-full ${
                      spell.category === 'Charm' ? 'bg-blue-500/20 text-blue-300' :
                      spell.category === 'Curse' ? 'bg-red-500/20 text-red-300' :
                      'bg-purple-500/20 text-purple-300'
                    }`}>
                      {spell.category}
                    </span>
                    <span className="text-gray-400">{spell.difficulty}</span>
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Detailed Spell Information */}
          {selectedSpell && (
            <ScrollAnimation>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-black/60 backdrop-blur-md rounded-lg p-8 border border-yellow-500/30"
              >
                {(() => {
                  const spell = spells.find(s => s.id === selectedSpell);
                  if (!spell) return null;
                  
                  return (
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-4">
                          {spell.icon}
                          <div>
                            <h2 className="text-3xl font-bold text-white">{spell.name}</h2>
                            <p className="text-xl text-gray-400 italic">&ldquo;{spell.incantation}&rdquo;</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedSpell(null)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-2xl font-bold mb-4 text-yellow-400">Spell Details</h3>
                          <div className="space-y-4">
                            <div>
                              <p className="font-semibold">Category:</p>
                              <p className="text-gray-300">{spell.category}</p>
                            </div>
                            <div>
                              <p className="font-semibold">Effect:</p>
                              <p className="text-gray-300">{spell.effect}</p>
                            </div>
                            <div>
                              <p className="font-semibold">Difficulty:</p>
                              <p className="text-gray-300">{spell.difficulty}</p>
                            </div>
                            <div>
                              <p className="font-semibold">Wand Movement:</p>
                              <p className="text-gray-300">{spell.wandMovement}</p>
                            </div>
                            <div>
                              <p className="font-semibold">Color:</p>
                              <p className="text-gray-300">{spell.color}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold mb-4 text-yellow-400">Description</h3>
                          <p className="text-gray-300 leading-relaxed">{spell.description}</p>
                          
                          <div className="mt-6">
                            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Practice Tips</h3>
                            <ul className="space-y-2 text-gray-300">
                              <li>• Focus on proper pronunciation</li>
                              <li>• Master the wand movement</li>
                              <li>• Practice with concentration</li>
                              <li>• Start with simpler spells</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </ScrollAnimation>
          )}
        </div>
      </section>

      {/* Spell Practice Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-black/50 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <div className="bg-black/40 backdrop-blur-md rounded-lg p-8 border border-yellow-500/30">
              <Wand2 className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold magical-title mb-4">
                Practice Your Spells
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Remember: &ldquo;It&apos;s leviOsa, not levioSAR!&rdquo; - Hermione Granger
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
              >
                Start Spell Practice
              </motion.button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
} 
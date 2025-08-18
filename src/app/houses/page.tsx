'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import FloatingIcons from '@/components/FloatingIcons';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Shield, Crown, BookOpen, Heart, Star, Users, Trophy } from 'lucide-react';

export default function HousesPage() {
  const [selectedHouse, setSelectedHouse] = useState<string | null>(null);

  const houses = [
    {
      id: 'gryffindor',
      name: 'Gryffindor',
      color: 'red',
      colors: ['#740001', '#ae0001', '#d3a625', '#eeba30'],
      animal: 'Lion',
      element: 'Fire',
      traits: ['Bravery', 'Courage', 'Chivalry', 'Nerve'],
      founder: 'Godric Gryffindor',
      ghost: 'Nearly Headless Nick',
      commonRoom: 'Gryffindor Tower',
      description: 'Gryffindor values bravery, daring, nerve, and chivalry. Its emblematic animal is the lion, and its colors are scarlet and gold.',
      famousMembers: ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'],
      icon: <Shield className="h-16 w-16 text-red-500" />
    },
    {
      id: 'slytherin',
      name: 'Slytherin',
      color: 'green',
      colors: ['#1a472a', '#2a623d', '#5d5d5d', '#aaaaaa'],
      animal: 'Serpent',
      element: 'Water',
      traits: ['Ambition', 'Cunning', 'Leadership', 'Resourcefulness'],
      founder: 'Salazar Slytherin',
      ghost: 'The Bloody Baron',
      commonRoom: 'Slytherin Dungeon',
      description: 'Slytherin values ambition, cunning, leadership, and resourcefulness. Its emblematic animal is the serpent, and its colors are emerald and silver.',
      famousMembers: ['Tom Riddle', 'Severus Snape', 'Draco Malfoy', 'Bellatrix Lestrange'],
      icon: <Crown className="h-16 w-16 text-green-500" />
    },
    {
      id: 'ravenclaw',
      name: 'Ravenclaw',
      color: 'blue',
      colors: ['#0e1a40', '#222f5b', '#946b2d', '#5d5d5d'],
      animal: 'Eagle',
      element: 'Air',
      traits: ['Intelligence', 'Creativity', 'Learning', 'Wit'],
      founder: 'Rowena Ravenclaw',
      ghost: 'The Grey Lady',
      commonRoom: 'Ravenclaw Tower',
      description: 'Ravenclaw values intelligence, creativity, learning, and wit. Its emblematic animal is the eagle, and its colors are blue and bronze.',
      famousMembers: ['Luna Lovegood', 'Cho Chang', 'Filius Flitwick', 'Garrick Ollivander'],
      icon: <BookOpen className="h-16 w-16 text-blue-500" />
    },
    {
      id: 'hufflepuff',
      name: 'Hufflepuff',
      color: 'yellow',
      colors: ['#ecb939', '#f0c75e', '#726255', '#372e29'],
      animal: 'Badger',
      element: 'Earth',
      traits: ['Hard Work', 'Dedication', 'Patience', 'Loyalty'],
      founder: 'Helga Hufflepuff',
      ghost: 'The Fat Friar',
      commonRoom: 'Hufflepuff Basement',
      description: 'Hufflepuff values hard work, dedication, patience, loyalty, and fair play. Its emblematic animal is the badger, and its colors are yellow and black.',
      famousMembers: ['Cedric Diggory', 'Nymphadora Tonks', 'Newt Scamander', 'Pomona Sprout'],
      icon: <Heart className="h-16 w-16 text-yellow-500" />
    }
  ];

  const getHouseGradient = (house: typeof houses[0]) => {
    const gradients = {
      gryffindor: 'from-red-900 via-red-800 to-yellow-600',
      slytherin: 'from-green-900 via-green-800 to-gray-600',
      ravenclaw: 'from-blue-900 via-blue-800 to-yellow-700',
      hufflepuff: 'from-yellow-600 via-yellow-500 to-black'
    };
    return gradients[house.id as keyof typeof gradients];
  };

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
                The Four Houses
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover your destiny and find your place in the wizarding world
              </p>
            </div>
          </ScrollAnimation>

          {/* Houses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {houses.map((house, index) => (
              <ScrollAnimation key={house.id} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
                    selectedHouse === house.id ? 'ring-4 ring-yellow-400' : ''
                  }`}
                  onClick={() => setSelectedHouse(selectedHouse === house.id ? null : house.id)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${getHouseGradient(house)} opacity-90`} />
                  <div className="relative p-8 text-white">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        {house.icon}
                        <div>
                          <h2 className={`text-3xl font-bold house-${house.id}`}>
                            {house.name}
                          </h2>
                          <p className="text-lg opacity-90">{house.animal}</p>
                        </div>
                      </div>
                      <Star className="h-8 w-8 opacity-60" />
                    </div>
                    
                    <p className="text-lg mb-4">{house.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold">Founder:</p>
                        <p className="opacity-90">{house.founder}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Ghost:</p>
                        <p className="opacity-90">{house.ghost}</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <p className="font-semibold mb-2">Traits:</p>
                      <div className="flex flex-wrap gap-2">
                        {house.traits.map((trait) => (
                          <span
                            key={trait}
                            className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm"
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Detailed House Information */}
          {selectedHouse && (
            <ScrollAnimation>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-black/60 backdrop-blur-md rounded-lg p-8 border border-yellow-500/30"
              >
                {(() => {
                  const house = houses.find(h => h.id === selectedHouse);
                  if (!house) return null;
                  
                  return (
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <h2 className={`text-4xl font-bold house-${house.id}`}>
                          {house.name} House
                        </h2>
                        <button
                          onClick={() => setSelectedHouse(null)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-2xl font-bold mb-4 text-yellow-400">House Information</h3>
                          <div className="space-y-4">
                            <div>
                              <p className="font-semibold">Element:</p>
                              <p className="text-gray-300">{house.element}</p>
                            </div>
                            <div>
                              <p className="font-semibold">Common Room:</p>
                              <p className="text-gray-300">{house.commonRoom}</p>
                            </div>
                            <div>
                              <p className="font-semibold">House Colors:</p>
                              <div className="flex gap-2 mt-2">
                                {house.colors.map((color, index) => (
                                  <div
                                    key={index}
                                    className="w-8 h-8 rounded-full border-2 border-white/30"
                                    style={{ backgroundColor: color }}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold mb-4 text-yellow-400">Famous Members</h3>
                          <div className="grid grid-cols-2 gap-3">
                            {house.famousMembers.map((member) => (
                              <div
                                key={member}
                                className="flex items-center space-x-2 p-3 bg-white/10 rounded-lg backdrop-blur-sm"
                              >
                                <Users className="h-4 w-4 text-yellow-400" />
                                <span className="text-sm">{member}</span>
                              </div>
                            ))}
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

      {/* Sorting Hat Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-black/50 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <div className="bg-black/40 backdrop-blur-md rounded-lg p-8 border border-yellow-500/30">
              <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold magical-title mb-4">
                The Sorting Hat
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                &ldquo;You might belong in Gryffindor, where dwell the brave at heart, their daring, nerve, and chivalry set Gryffindors apart...&rdquo;
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
              >
                Take the Sorting Quiz
              </motion.button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
} 
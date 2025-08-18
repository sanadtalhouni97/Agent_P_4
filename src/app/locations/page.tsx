'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import FloatingIcons from '@/components/FloatingIcons';
import ScrollAnimation from '@/components/ScrollAnimation';
import { MapPin, Castle, Building, Trees, Mountain, Search } from 'lucide-react';

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const locations = [
    {
      id: 'hogwarts',
      name: 'Hogwarts School of Witchcraft and Wizardry',
      type: 'School',
      location: 'Scotland',
      description: 'The most prestigious school of magic in Britain, located in a magnificent castle.',
      features: ['Great Hall', 'Moving Staircases', 'Forbidden Forest', 'Quidditch Pitch'],
      icon: <Castle className="h-8 w-8 text-yellow-400" />
    },
    {
      id: 'diagon-alley',
      name: 'Diagon Alley',
      type: 'Shopping District',
      location: 'London',
      description: 'A magical shopping street hidden behind the Leaky Cauldron pub.',
      features: ['Gringotts Bank', 'Ollivanders', 'Flourish and Blotts', 'Weasleys\' Wizard Wheezes'],
      icon: <Building className="h-8 w-8 text-purple-400" />
    },
    {
      id: 'hogsmeade',
      name: 'Hogsmeade Village',
      type: 'Village',
      location: 'Scotland',
      description: 'The only all-wizarding village in Britain, located near Hogwarts.',
      features: ['Honeydukes', 'The Three Broomsticks', 'Zonko\'s Joke Shop', 'Shrieking Shack'],
      icon: <Building className="h-8 w-8 text-blue-400" />
    },
    {
      id: 'forbidden-forest',
      name: 'Forbidden Forest',
      type: 'Forest',
      location: 'Hogwarts Grounds',
      description: 'A dark and dangerous forest filled with magical creatures.',
      features: ['Centaur Territory', 'Unicorn Habitat', 'Acromantula Colony', 'Thestral Herd'],
      icon: <Trees className="h-8 w-8 text-green-400" />
    },
    {
      id: 'ministry-of-magic',
      name: 'Ministry of Magic',
      type: 'Government',
      location: 'London',
      description: 'The governing body of the British wizarding community.',
      features: ['Department of Mysteries', 'Auror Office', 'Wizengamot', 'Atrium'],
      icon: <Building className="h-8 w-8 text-red-400" />
    },
    {
      id: 'azkaban',
      name: 'Azkaban Prison',
      type: 'Prison',
      location: 'North Sea',
      description: 'A fortress prison guarded by Dementors, used to hold dangerous criminals.',
      features: ['Dementor Guards', 'High Security Cells', 'Impenetrable Walls', 'Isolation'],
      icon: <Building className="h-8 w-8 text-gray-400" />
    },
    {
      id: 'platform-9-3-4',
      name: 'Platform 9¾',
      type: 'Transportation',
      location: 'King\'s Cross Station',
      description: 'The hidden platform where the Hogwarts Express departs.',
      features: ['Hogwarts Express', 'Magical Barrier', 'Trolley Wall', 'Steam Engine'],
      icon: <MapPin className="h-8 w-8 text-orange-400" />
    },
    {
      id: 'burrow',
      name: 'The Burrow',
      type: 'Residence',
      location: 'Ottery St Catchpole',
      description: 'The Weasley family home, a charming and slightly chaotic house.',
      features: ['Magical Extensions', 'Garden Gnomes', 'Flying Car', 'Family Kitchen'],
      icon: <Building className="h-8 w-8 text-red-400" />
    },
    {
      id: 'grimmauld-place',
      name: '12 Grimmauld Place',
      type: 'Residence',
      location: 'London',
      description: 'The ancestral home of the Black family, headquarters of the Order of the Phoenix.',
      features: ['Kreacher the House-Elf', 'Black Family Tapestry', 'Hidden Entrance', 'Dark Magic'],
      icon: <Building className="h-8 w-8 text-black" />
    },
    {
      id: 'godrics-hollow',
      name: 'Godric\'s Hollow',
      type: 'Village',
      location: 'West Country',
      description: 'A village where many famous wizards lived, including the Potters.',
      features: ['Potter Cottage', 'Dumbledore Family Home', 'Church', 'War Memorial'],
      icon: <Building className="h-8 w-8 text-yellow-400" />
    },
    {
      id: 'malfoy-manor',
      name: 'Malfoy Manor',
      type: 'Residence',
      location: 'Wiltshire',
      description: 'The luxurious home of the Malfoy family, a symbol of pure-blood wealth.',
      features: ['Extensive Grounds', 'House-Elf Quarters', 'Dark Artifacts', 'Luxury'],
      icon: <Building className="h-8 w-8 text-green-400" />
    },
    {
      id: 'shell-cottage',
      name: 'Shell Cottage',
      type: 'Residence',
      location: 'Tinworth',
      description: 'Bill and Fleur Weasley\'s home, a safe house during the war.',
      features: ['Beach Location', 'Fidelius Charm', 'Garden', 'Safety'],
      icon: <Building className="h-8 w-8 text-blue-400" />
    }
  ];

  const filteredLocations = locations.filter(location => 
    location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                Magical Locations
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore the enchanting places that make up the wizarding world
              </p>
            </div>
          </ScrollAnimation>

          {/* Search */}
          <ScrollAnimation delay={0.2}>
            <div className="mb-12">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/40 backdrop-blur-md border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                />
              </div>
            </div>
          </ScrollAnimation>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredLocations.map((location, index) => (
              <ScrollAnimation key={location.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedLocation(selectedLocation === location.id ? null : location.id)}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    {location.icon}
                    <div>
                      <h3 className="text-xl font-bold text-white">{location.name}</h3>
                      <p className="text-gray-400">{location.type}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{location.description}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                      {location.location}
                    </span>
                    <span className="text-gray-400">{location.features.length} features</span>
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Detailed Location Information */}
          {selectedLocation && (
            <ScrollAnimation>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-black/60 backdrop-blur-md rounded-lg p-8 border border-yellow-500/30"
              >
                {(() => {
                  const location = locations.find(l => l.id === selectedLocation);
                  if (!location) return null;
                  
                  return (
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-4">
                          {location.icon}
                          <div>
                            <h2 className="text-3xl font-bold text-white">{location.name}</h2>
                            <p className="text-xl text-gray-400">{location.type}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedLocation(null)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-2xl font-bold mb-4 text-yellow-400">Location Details</h3>
                          <div className="space-y-4">
                            <div>
                              <p className="font-semibold">Type:</p>
                              <p className="text-gray-300">{location.type}</p>
                            </div>
                            <div>
                              <p className="font-semibold">Location:</p>
                              <p className="text-gray-300">{location.location}</p>
                            </div>
                            <div>
                              <p className="font-semibold">Description:</p>
                              <p className="text-gray-300">{location.description}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold mb-4 text-yellow-400">Notable Features</h3>
                          <div className="grid grid-cols-1 gap-3">
                            {location.features.map((feature) => (
                              <div
                                key={feature}
                                className="flex items-center space-x-2 p-3 bg-white/10 rounded-lg backdrop-blur-sm"
                              >
                                <MapPin className="h-4 w-4 text-yellow-400" />
                                <span className="text-sm">{feature}</span>
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
    </div>
  );
} 
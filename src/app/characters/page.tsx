'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import FloatingIcons from '@/components/FloatingIcons';
import ScrollAnimation from '@/components/ScrollAnimation';
import { User, Wand2, Shield, Crown, BookOpen, Heart, Search, Filter } from 'lucide-react';

export default function CharactersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHouse, setSelectedHouse] = useState('all');
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  const characters = [
    {
      id: 'harry-potter',
      name: 'Harry Potter',
      house: 'Gryffindor',
      role: 'The Boy Who Lived',
      description: 'The main protagonist, known for his lightning bolt scar and defeating Lord Voldemort.',
      wand: 'Holly, 11", phoenix feather',
      patronus: 'Stag',
      actor: 'Daniel Radcliffe',
      image: '/api/placeholder/300/400',
      traits: ['Brave', 'Loyal', 'Determined', 'Selfless'],
      quotes: ['"It does not do to dwell on dreams and forget to live."', '"I solemnly swear I am up to no good."'],
      icon: <Shield className="h-8 w-8 text-red-500" />
    },
    {
      id: 'hermione-granger',
      name: 'Hermione Granger',
      house: 'Gryffindor',
      role: 'Brightest Witch of Her Age',
      description: 'The most intelligent student at Hogwarts, known for her extensive knowledge and quick thinking.',
      wand: 'Vine wood, 10¾", dragon heartstring',
      patronus: 'Otter',
      actor: 'Emma Watson',
      image: '/api/placeholder/300/400',
      traits: ['Intelligent', 'Logical', 'Loyal', 'Resourceful'],
      quotes: ['"It\'s leviosa, not leviosar!"', '"Books! And cleverness! There are more important things."'],
      icon: <BookOpen className="h-8 w-8 text-red-500" />
    },
    {
      id: 'ron-weasley',
      name: 'Ron Weasley',
      house: 'Gryffindor',
      role: 'Harry\'s Best Friend',
      description: 'Harry\'s loyal best friend, known for his humor and chess skills.',
      wand: 'Willow, 14", unicorn hair',
      patronus: 'Jack Russell Terrier',
      actor: 'Rupert Grint',
      image: '/api/placeholder/300/400',
      traits: ['Loyal', 'Humorous', 'Brave', 'Protective'],
      quotes: ['"Bloody hell!"', '"You\'re a wizard, Harry."'],
      icon: <Shield className="h-8 w-8 text-red-500" />
    },
    {
      id: 'albus-dumbledore',
      name: 'Albus Dumbledore',
      house: 'Gryffindor',
      role: 'Headmaster of Hogwarts',
      description: 'The greatest wizard of all time and headmaster of Hogwarts School of Witchcraft and Wizardry.',
      wand: 'Elder, 15", thestral tail hair',
      patronus: 'Phoenix',
      actor: 'Richard Harris / Michael Gambon',
      image: '/api/placeholder/300/400',
      traits: ['Wise', 'Powerful', 'Kind', 'Strategic'],
      quotes: ['"It does not do to dwell on dreams and forget to live."', '"Happiness can be found even in the darkest of times."'],
      icon: <Crown className="h-8 w-8 text-red-500" />
    },
    {
      id: 'severus-snape',
      name: 'Severus Snape',
      house: 'Slytherin',
      role: 'Potions Master',
      description: 'The complex Potions Master with a mysterious past and deep connection to Harry\'s mother.',
      wand: 'Unknown',
      patronus: 'Doe',
      actor: 'Alan Rickman',
      image: '/api/placeholder/300/400',
      traits: ['Complex', 'Intelligent', 'Loyal', 'Mysterious'],
      quotes: ['"Always."', '"Turn to page 394."'],
      icon: <Crown className="h-8 w-8 text-green-500" />
    },
    {
      id: 'draco-malfoy',
      name: 'Draco Malfoy',
      house: 'Slytherin',
      role: 'Harry\'s Rival',
      description: 'Harry\'s school rival, initially arrogant but later shows complexity and redemption.',
      wand: 'Hawthorn, 10", unicorn hair',
      patronus: 'Unknown',
      actor: 'Tom Felton',
      image: '/api/placeholder/300/400',
      traits: ['Ambitious', 'Complex', 'Redemptive', 'Proud'],
      quotes: ['"My father will hear about this!"', '"I didn\'t know you could read."'],
      icon: <Crown className="h-8 w-8 text-green-500" />
    },
    {
      id: 'luna-lovegood',
      name: 'Luna Lovegood',
      house: 'Ravenclaw',
      role: 'The Dreamy One',
      description: 'A unique and eccentric student known for her belief in magical creatures and conspiracy theories.',
      wand: 'Unknown',
      patronus: 'Hare',
      actor: 'Evanna Lynch',
      image: '/api/placeholder/300/400',
      traits: ['Unique', 'Intelligent', 'Loyal', 'Dreamy'],
      quotes: ['"Things we lose have a way of coming back to us in the end."', '"I\'m not worried, Harry. I\'m with you."'],
      icon: <BookOpen className="h-8 w-8 text-blue-500" />
    },
    {
      id: 'neville-longbottom',
      name: 'Neville Longbottom',
      house: 'Gryffindor',
      role: 'The Underdog Hero',
      description: 'Initially clumsy and forgetful, Neville grows into a brave and capable wizard.',
      wand: 'Cherry, 13", unicorn hair',
      patronus: 'Non-corporeal',
      actor: 'Matthew Lewis',
      image: '/api/placeholder/300/400',
      traits: ['Brave', 'Loyal', 'Determined', 'Growth'],
      quotes: ['"Dumbledore\'s Army!"', '"I\'ll join you when hell freezes over."'],
      icon: <Shield className="h-8 w-8 text-red-500" />
    },
    {
      id: 'cedric-diggory',
      name: 'Cedric Diggory',
      house: 'Hufflepuff',
      role: 'Triwizard Champion',
      description: 'A talented and fair Hufflepuff student who competed in the Triwizard Tournament.',
      wand: 'Ash, 12¼", unicorn hair',
      patronus: 'Unknown',
      actor: 'Robert Pattinson',
      image: '/api/placeholder/300/400',
      traits: ['Fair', 'Talented', 'Honorable', 'Kind'],
      quotes: ['"Take my body back, will you, Harry?"', '"Fair play."'],
      icon: <Heart className="h-8 w-8 text-yellow-500" />
    },
    {
      id: 'voldemort',
      name: 'Lord Voldemort',
      house: 'Slytherin',
      role: 'The Dark Lord',
      description: 'The most powerful dark wizard of all time, Harry\'s nemesis and the main antagonist.',
      wand: 'Yew, 13½", phoenix feather',
      patronus: 'None',
      actor: 'Ralph Fiennes',
      image: '/api/placeholder/300/400',
      traits: ['Powerful', 'Ambitious', 'Fearless', 'Ruthless'],
      quotes: ['"I am Lord Voldemort!"', '"There is no good and evil, there is only power."'],
      icon: <Crown className="h-8 w-8 text-green-500" />
    }
  ];

  const filteredCharacters = characters.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         character.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesHouse = selectedHouse === 'all' || character.house.toLowerCase() === selectedHouse;
    return matchesSearch && matchesHouse;
  });

  const houses = ['all', 'gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff'];

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
                Characters
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the wizards, witches, and magical beings that make the wizarding world come alive
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
                  placeholder="Search characters..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/40 backdrop-blur-md border border-yellow-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                />
              </div>
              <div className="flex gap-2">
                {houses.map((house) => (
                  <button
                    key={house}
                    onClick={() => setSelectedHouse(house)}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      selectedHouse === house
                        ? 'bg-yellow-500 text-black'
                        : 'bg-black/40 text-gray-300 hover:bg-black/60'
                    }`}
                  >
                    {house.charAt(0).toUpperCase() + house.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Characters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredCharacters.map((character, index) => (
              <ScrollAnimation key={character.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedCharacter(selectedCharacter === character.id ? null : character.id)}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    {character.icon}
                    <div>
                      <h3 className="text-xl font-bold text-white">{character.name}</h3>
                      <p className="text-gray-400">{character.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">{character.description}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className={`px-3 py-1 rounded-full ${
                      character.house === 'Gryffindor' ? 'bg-red-500/20 text-red-300' :
                      character.house === 'Slytherin' ? 'bg-green-500/20 text-green-300' :
                      character.house === 'Ravenclaw' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {character.house}
                    </span>
                    <span className="text-gray-400">{character.actor}</span>
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Detailed Character Information */}
          {selectedCharacter && (
            <ScrollAnimation>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-black/60 backdrop-blur-md rounded-lg p-8 border border-yellow-500/30"
              >
                {(() => {
                  const character = characters.find(c => c.id === selectedCharacter);
                  if (!character) return null;
                  
                  return (
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-4">
                          {character.icon}
                          <div>
                            <h2 className="text-3xl font-bold text-white">{character.name}</h2>
                            <p className="text-xl text-gray-400">{character.role}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedCharacter(null)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-2xl font-bold mb-4 text-yellow-400">Character Details</h3>
                          <div className="space-y-4">
                            <div>
                              <p className="font-semibold">House:</p>
                              <p className="text-gray-300">{character.house}</p>
                            </div>
                            <div>
                              <p className="font-semibold">Wand:</p>
                              <p className="text-gray-300">{character.wand}</p>
                            </div>
                            <div>
                              <p className="font-semibold">Patronus:</p>
                              <p className="text-gray-300">{character.patronus}</p>
                            </div>
                            <div>
                              <p className="font-semibold">Actor:</p>
                              <p className="text-gray-300">{character.actor}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold mb-4 text-yellow-400">Traits</h3>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {character.traits.map((trait) => (
                              <span
                                key={trait}
                                className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm"
                              >
                                {trait}
                              </span>
                            ))}
                          </div>
                          
                          <h3 className="text-2xl font-bold mb-4 text-yellow-400">Famous Quotes</h3>
                          <div className="space-y-3">
                            {character.quotes.map((quote, index) => (
                              <blockquote
                                key={index}
                                className="italic text-gray-300 border-l-4 border-yellow-500 pl-4"
                              >
                                "{quote}"
                              </blockquote>
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
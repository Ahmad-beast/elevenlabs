import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { BellIcon, UserCircleIcon, PlayIcon } from '@heroicons/react/24/outline';

function App() {
  const [selectedGeneration, setSelectedGeneration] = useState<number | null>(null);
  const [text, setText] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('');
  const [searchVoice, setSearchVoice] = useState('');

  const generations = [
    {
      id: 1,
      text: "گر پرے بیٹی مے مے کی نا تکرار کے",
      voice: "Sarah",
      model: "eleven_multilingual_v2",
      timestamp: "6/2/2025, 1:19:31 AM"
    },
    {
      id: 2,
      text: "گر پرے بیٹی مے مے کی نا تکرار کے",
      voice: "Aaliyah",
      model: "eleven_multilingual_v2",
      timestamp: "6/2/2025, 1:18:24 AM"
    },
    {
      id: 3,
      text: "کت روز بھوکی کتی چھاتی میں گھسیتے د",
      voice: "Ahmed",
      model: "eleven_multilingual_v2",
      timestamp: "5/31/2025, 9:23:39 PM"
    },
    {
      id: 4,
      text: "As-salamu alaykum sheraz kia",
      voice: "Aaliyah",
      model: "eleven_multilingual_v2",
      timestamp: "5/31/2025, 9:23:39 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-purple-400">User Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-200">
                <BellIcon className="h-6 w-6" />
              </button>
              <Menu as="div" className="ml-3 relative">
                <Menu.Button className="p-2 rounded-full text-gray-400 hover:text-gray-200">
                  <UserCircleIcon className="h-6 w-6" />
                </Menu.Button>
              </Menu>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Generate Speech Section */}
          <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-700">
              <h2 className="text-xl font-semibold text-white">Generate Speech</h2>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Text to Synthesize</label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full h-32 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter text here..."
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Search Voice</label>
                  <input
                    type="text"
                    value={searchVoice}
                    onChange={(e) => setSearchVoice(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Search by name..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Select Voice</label>
                  <select
                    value={selectedVoice}
                    onChange={(e) => setSelectedVoice(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select a voice...</option>
                    <option value="sarah">Sarah</option>
                    <option value="aaliyah">Aaliyah</option>
                    <option value="ahmed">Ahmed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Voice Model</label>
                <select
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="eleven_multilingual_v2">Eleven Multilingual v2</option>
                </select>
              </div>

              <button className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition duration-200 flex items-center justify-center space-x-2">
                <span>Generate Voice</span>
              </button>
            </div>
          </div>

          {/* Generation History */}
          <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-700">
              <h2 className="text-xl font-semibold text-white">Generation History</h2>
            </div>
            <div className="divide-y divide-gray-700">
              {generations.map((gen) => (
                <div 
                  key={gen.id} 
                  className={`p-6 transition-all duration-200 ease-in-out cursor-pointer ${
                    selectedGeneration === gen.id 
                      ? 'bg-gray-700 border-l-4 border-purple-500' 
                      : 'hover:bg-gray-700'
                  }`}
                  onClick={() => setSelectedGeneration(gen.id)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex-1 min-w-0">
                      <p className="text-lg font-medium text-gray-200 mb-2">{gen.text}</p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-600 text-gray-200">
                          {gen.voice}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-600 text-gray-200">
                          {gen.model}
                        </span>
                        <span className="text-gray-400">{gen.timestamp}</span>
                      </div>
                    </div>
                    <button 
                      className="ml-4 p-3 text-purple-400 hover:text-purple-300 rounded-full hover:bg-gray-600 transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Play audio logic here
                      }}
                    >
                      <PlayIcon className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
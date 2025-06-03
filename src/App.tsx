import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { BellIcon, UserCircleIcon, PlayIcon } from '@heroicons/react/24/outline';

function App() {
  const [selectedGeneration, setSelectedGeneration] = useState<number | null>(null);

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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-indigo-600">MyApp</h1>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-500">
                <BellIcon className="h-6 w-6" />
              </button>
              <Menu as="div" className="ml-3 relative">
                <Menu.Button className="p-2 rounded-full text-gray-400 hover:text-gray-500">
                  <UserCircleIcon className="h-6 w-6" />
                </Menu.Button>
              </Menu>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-indigo-500 to-purple-600">
              <h2 className="text-xl font-semibold text-white">Generation History</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {generations.map((gen) => (
                <div 
                  key={gen.id} 
                  className={`p-6 transition-all duration-200 ease-in-out ${
                    selectedGeneration === gen.id 
                      ? 'bg-indigo-50 border-l-4 border-indigo-500' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedGeneration(gen.id)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex-1 min-w-0">
                      <p className="text-lg font-medium text-gray-900 mb-1">{gen.text}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-100">
                          {gen.voice}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-100">
                          {gen.model}
                        </span>
                        <span className="text-gray-400">{gen.timestamp}</span>
                      </div>
                    </div>
                    <button 
                      className="ml-4 p-3 text-indigo-600 hover:text-indigo-700 rounded-full hover:bg-indigo-50 transition-colors duration-200"
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
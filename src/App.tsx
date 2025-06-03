import React from 'react';
import { Menu } from '@headlessui/react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

function App() {
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
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Generation History</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {generations.map((gen) => (
                <div key={gen.id} className="p-6 hover:bg-gray-50 transition-colors duration-150 ease-in-out">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="text-lg font-medium text-gray-900">{gen.text}</p>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <span className="mr-4">Voice: {gen.voice}</span>
                        <span className="mr-4">Model: {gen.model}</span>
                        <span>{gen.timestamp}</span>
                      </div>
                    </div>
                    <button className="ml-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
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
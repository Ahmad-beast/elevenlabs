import React from 'react';
import { Menu } from '@headlessui/react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

function App() {
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Cards */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Card {item}</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    This is a sample card with some content. Click to learn more about this item.
                  </p>
                </div>
                <div className="bg-gray-50 px-4 py-4 sm:px-6">
                  <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Learn more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
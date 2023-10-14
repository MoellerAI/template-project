import { useState } from 'react'
import React from 'react';
import '@/app/globals.css'

import { Fragment } from 'react';
import { Transition } from '@headlessui/react';

const HomePage = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-gradient-to-br from-purple-900 to-blue-800 text-white min-h-screen flex flex-col justify-between">

      {/* Top Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="flex space-x-4">
          <span className="text-purple-200">🔮</span>
          <span>API Studio is now in beta</span>
        </div>
        <div className="flex space-x-4">
          <button className="text-purple-300">Sign in</button>
          <button className="bg-purple-600 p-2 px-4 rounded">Sign up</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-5xl font-bold">The API Security Framework</h1>
        <p>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
        <div className="flex space-x-4">
          <button className="bg-purple-600 p-2 px-4 rounded hover:bg-purple-500 transition duration-300">Get Started</button>
          <button className="text-purple-300 flex items-center space-x-2">
            <span>Read the docs</span>
            <span>📄</span>
          </button>
        </div>
      </div>

      {/* Example of a transition using Headless UI */}
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Element</button>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex justify-center items-center">
          This is an example of a transition using Headless UI!
        </div>
      </Transition>

    </div>
  );
}

export default HomePage;




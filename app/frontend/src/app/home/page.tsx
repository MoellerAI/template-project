import React, { useEffect } from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import { Main } from "tsparticles-engine";
import { BsArrowRight } from 'react-icons/bs';

import Header from "@/components/homepage/header";
import Background from "@/components/homepage/background";

const HomePage: React.FC = () => {
  const particlesInit = async (main: Main) => {
    await loadLinksPreset(main);
  };

  const particlesOptions = {
    preset: "links",
    particles: {
      move: {
        speed: 0.5,
      },
    },
    background: {
      color: {
        value: 'transparent',
      },
    },
  };

  useEffect(() => {}, []);

  return (
    <div className="relative h-screen w-screen bg-black overflow-auto">
      <Background />
      <Header />
      {/* The content should be above the background, so we give it a higher z-index */}
      <div className="relative z-10"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl h-full"> 
        <div className="pt-80 pb-6">
          <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full px-8 py-2 inline-flex items-center space-x-2 shadow-inner shadow-purple-400">
              <span>Go directly to the demo</span>
              <BsArrowRight className="w-5 h-5" />
            </button>
        </div>
          <div className="text-left max-w-2xl">
            <h1 className="text-white text-7xl">Template Project</h1>
            <h2 className="mt-4 pl-2 text-gray-400 text-4xl">Your first step in the template world. This template can be modified according to your needs.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

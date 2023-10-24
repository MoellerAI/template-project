import React, { useEffect, useState, useRef } from 'react';
import { BsChevronRight } from 'react-icons/bs';

import Header from '@/components/homepage/header';
import Background from '@/components/homepage/background';
import Pricing from '@/components/homepage/pricingsection';

const HomePage = () => {
  const [lineHeight, setLineHeight] = useState('0vh');  
  const titleRef = useRef<HTMLDivElement>(null);  

  useEffect(() => {
    const calculateInitialHeight = () => {
      if (titleRef.current) {
        const titleBottom = titleRef.current.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;
        const initialLineHeight = viewportHeight - titleBottom;
    
        setLineHeight(`${initialLineHeight}px`);  
      }
    };

    calculateInitialHeight();

    const handleScroll = () => {
      const fullDocumentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrolledPercentage = (scrollPosition / fullDocumentHeight) * 100;
      const dynamicHeight = window.innerHeight + (fullDocumentHeight * (scrolledPercentage / 100));

      setLineHeight(`${dynamicHeight}px`);  
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateInitialHeight);  

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateInitialHeight);
    };
  }, []);

  return (
    <div className="relative h-screen w-screen bg-black overflow-auto">
      <Background />
      <Header />
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl h-full">
          <div className="pt-80 pb-6">
            <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full px-8 py-2 inline-flex items-center space-x-2 shadow-inner shadow-purple-400">
              <span>Go directly to the demo</span>
              <BsChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="text-left max-w-2xl" ref={titleRef}>  
            <h1 className="text-white text-7xl">Template Project</h1>
            <h2 className="mt-4 pl-2 text-gray-400 text-4xl">Your first step in the template world. This template can be modified according to your needs.</h2>
          </div>
          <div className="relative overflow-hidden" style={{ height: '100vh' }}>
            <div 
              className="absolute top-0 left-1/4 transform -translate-x-1/2 w-1 bg-purple-500 z-20" 
              style={{ 
                boxShadow: '0 0 10px 5px purple', 
                height: lineHeight,  
                transition: 'height 0.3s ease',
              }}
            ></div>
          </div>
          <Pricing />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

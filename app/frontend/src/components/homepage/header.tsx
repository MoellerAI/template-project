import React from 'react';

const Header = () => {
  return (
    <header className="bg-black z-50 relative">
      <div className="mx-auto px-4 lg:px-8"> {/* Add max-width here for large screens */}
        <nav className="flex justify-between items-center border-gray-200 py-2.5">
          {/* Logo Section */}
          <div className="flex justify-start items-center">
            <a href="/" className="flex items-center">
              <img src="/main_icon_white.png" className="mr-3 h-[40px] w-auto" alt="Your Logo" />
              <span className="self-center text-xl font-semibold text-white whitespace-nowrap">Template project</span>
            </a>
          </div>
          
          {/* Navigation Links (center) */}
          <div className="hidden lg:flex justify-center items-center space-x-8" id="navigation-menu">
            <ul className="flex flex-row">
              {/* Your navigation items here */}
              <li>
                <a href="/prices" className="text-white px-3 py-2 rounded-md text-sm font-medium">Prices</a>
              </li>
              <li>
                <a href="/demo" className="text-white px-3 py-2 rounded-md text-sm font-medium">Demo</a>
              </li>
              <li>
                <a href="/contributing" className="text-white px-3 py-2 rounded-md text-sm font-medium">Contributing</a>
              </li>
              <li>
                <a href="/updates" className="text-white px-3 py-2 rounded-md text-sm font-medium">Updates</a>
              </li>
              {/* Repeat for other pages */}
            </ul>
          </div>

          {/* Action Buttons (right side) */}
          <div className="flex justify-end items-center">
            <a href="/signin" className="text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none bg-transparent">Login</a>
            <a href="/signup" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none">Sign up</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

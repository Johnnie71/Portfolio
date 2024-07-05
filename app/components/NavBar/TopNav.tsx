'use client'

import React from 'react'
import ThemeSwitcher from '../Theme/ThemeSwitcher'

const TopNav = () => {

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
  }
  
  return (
    <div className="container flex justify-center items-center fixed bg-white bg-opacity-40 dark:bg-[#20202380] backdrop-blur-md z-10 border-2 border-red-500">
      <div className="container mx-auto flex justify-between items-center p-2">
        <div className="flex items-center">
          <div
            onClick={() => handleScrollTo('header')}
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 dark:bg-gradient-to-l dark:from-purple-500 dark:to-pink-500 cursor-pointer"
          >
            JG
          </div>
        </div>
        <div className="hidden md:flex space-x-4">
          <div onClick={() => handleScrollTo('about')} className="cursor-pointer">
            About
          </div>
          <div onClick={() => handleScrollTo('projects')} className="cursor-pointer">
            Projects
          </div>
          <div onClick={() => handleScrollTo('footer')} className="cursor-pointer">
            Contact
          </div>
        </div>
        <div className="flex items-center">
          <ThemeSwitcher />
          <div className="ml-2 md:hidden">
            <div className="relative">
              <button className="p-2">
                <span className="icon-hamburger">☰</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg">
                <div className="p-2" onClick={() => handleScrollTo('about')}>About</div>
                <div className="p-2" onClick={() => handleScrollTo('projects')}>Projects</div>
                <div className="p-2" onClick={() => handleScrollTo('footer')}>Contact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav
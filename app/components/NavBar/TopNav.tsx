'use client'

import React, { useState } from 'react'
import ThemeSwitcher from '../Theme/ThemeSwitcher'
import { motion } from 'framer-motion'
import StaggeredDropDown from '../menus/DropDown'

const TopNav = () => {

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
    <div className="container flex justify-center items-center fixed backdrop-blur-[5px] z-10 text-lg md:text-xl lg:text-2xl">
      <div className="container mx-auto flex justify-between items-center p-2">
        <div className="flex items-center">
          <div
            onClick={() => handleScrollTo('header')}
            className="font-bold text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary cursor-pointer"
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
        <div className="flex items-center md:hidden">
          {/* <ThemeSwitcher /> */}
          <StaggeredDropDown />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
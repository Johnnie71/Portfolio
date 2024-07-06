'use client'

import React, { useState } from 'react'
import ThemeSwitcher from '../Theme/ThemeSwitcher'
import { motion } from 'framer-motion'
import StaggeredDropDown from '../menus/DropDown'

const TopNav = () => {
  const [open, setOpen] = useState(false)

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleMenu = () => {
    setOpen(!open)
  }

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5
      },
      display: "block"
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3
      },
      transitionEnd: {
        display: "none"
      }
    }
  };
  
  return (
    <div className="container flex justify-center items-center fixed backdrop-blur-[5px] z-10">
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
          <StaggeredDropDown />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
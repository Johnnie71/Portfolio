'use client'

import { useTheme } from "next-themes"
import {useState, useEffect} from 'react'
import { HiMoon, HiSun } from "react-icons/hi"

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <HiSun className="h-8 w-8 text-yellow-500 hover:scale-110" role="button" onClick={() => setTheme('light')} />
      )
    } else {
      return (
        <HiMoon  className="h-8 w-8 text-purple-800 hover:scale-110" role="button" onClick={() => setTheme('dark')}/>
      )
    }
  };

  return (
    <>
      {renderThemeChanger()}
    </>
  )
};

export default ThemeSwitcher;
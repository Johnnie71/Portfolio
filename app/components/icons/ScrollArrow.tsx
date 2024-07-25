'use client'
import React, {useState, useEffect} from 'react'

const ScrollArrow = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleScroll = () => {
    if(window.scrollY > 0) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`fade-container ${isVisible ? 'flex justify-center items-center' : 'hidden'}`}>
      <ul id="downArrow">
          <li className="i-1"></li>
          <li className="i-2"></li>
          <li className="i-3"></li>
      </ul>
    </div>
  )
}

export default ScrollArrow
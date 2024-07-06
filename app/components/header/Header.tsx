import React, { useState } from 'react'
import CanvasContainer from '../ThreeJs/Canvas'

const Header = () => {
  return (
    <section id='header' className='border-2 border-red-600 h-[90vh] mt-20 w-full'>
      <CanvasContainer />
    </section>
  )
}

export default Header
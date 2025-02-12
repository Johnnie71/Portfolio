'use client'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, SoftShadows } from "@react-three/drei";
import AnimatedSphere from './AnimatedSphere'
import Ground from './Ground/ground'
import { motion } from 'framer-motion';

interface Props {
  name?: string;
  welcomeMessage?: string;
}

const CanvasContainer: React.FC<Props> = ({ name, welcomeMessage }) => {

  return (
    // <div className="h-[280px] md:h-[150px] lg:h-[250px] xl:h-[400px] 2xl:h-[500px] w-full">
    <div className="h-[100vh] w-full relative mt-10">
      <div className='absolute w-full h-[50vh] z-200  flex justify-center items-center'>
        <div className='md:pb-20'>
          <motion.h1
              className="bg-clip-text text-transparent text-center bg-gradient-to-br from-primary to-secondary text-3xl sm:text-4xl lg:text-6xl font-extrabold w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {name || "Johnnie Gonzalez"}
            </motion.h1>
            <motion.p
            className="sm:hidden text-xl md:text-2xl lg:text-5xl mt-6 font-extrabold text-center w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {welcomeMessage || "Software Engineer"}
          </motion.p>
        </div>
      </div>
      <div className='hidden sm:flex w-full h-[100vh] z-100 absolute sm:px-10 md:px-20 lg:px-32 justify-between items-center text-white text-3xl'>
        
        <div className="flex flex-col sm:max-w-44 md:max-w-52 lg:max-w-72">
            <h1 className="text-primary text-2xl sm:text-2xl md:text-2xl lg:text-5xl whitespace-nowrap">engineer</h1>
            <p className="text-gray-400 sm:text-base md:text-lg lg:text-2xl break-words text-left max-w-fit">Solving problems, one bug at a time.</p>
        </div>

        <div className="flex flex-col sm:max-w-44 md:max-w-52 lg:max-w-72">
            <h1 className="text-secondary text-2xl sm:text-2xl md:text-2xl lg:text-5xl whitespace-nowrap pl-10">&lt;coder&gt;</h1>
            <p className="text-gray-400 sm:text-base md:text-lg lg:text-2xl break-words text-left max-w-fit pl-10">Crafting logic, making magic.</p>
        </div>
      </div>
      <Canvas shadows camera={{ position: [0.0, 0.0, 8.0] }}>
        <SoftShadows size={20} samples={25} focus={0.9} />
        <OrbitControls enableZoom={false} enableRotate={false} />
        <ambientLight intensity={0.2} />
        <directionalLight
          position={[0, 2, 3]}
          intensity={5}
          castShadow
          shadow-mapSize={[1024, 1024]} // Higher shadow map resolution
          shadow-radius={20} // Softer edges
        />
        <Suspense fallback={null}>
          {/* <TextComponent position={[-5, 0, 0]} color="#ff7504" text="engineer" /> */}
          <AnimatedSphere />
          {/* <TextComponent position={[5, 0, 0]} color="#00bfff" text="<coder>" /> */}
          <Ground />
        </Suspense>
        {/* <axesHelper /> */}
        </Canvas>
    </div>
  )
}

export default CanvasContainer;
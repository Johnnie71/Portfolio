'use client'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls, SoftShadows, useProgress } from "@react-three/drei";
import AnimatedSphere from './AnimatedSphere'
import Ground from './Ground/ground'
import { motion } from 'framer-motion';
import SceneTxt from '../Text/SceneTxt';

interface Props {
  name?: string;
  welcomeMessage?: string;
}

const Loader = () => {
  const { progress } = useProgress();
  
  return (
    <Html center>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.5}}
        className='text-white text-2xl flex flex-col justify-center items-center animate-pulse'
      >
        <h1>{Math.round(progress)}%</h1> 
        <div className="loader border-t-2 rounded-full border-secondary bg-black animate-spin
aspect-square w-10 flex justify-center items-center text-primary"></div>
      </motion.div>
    </Html>
  )
}

const CanvasContainer: React.FC<Props> = ({ name, welcomeMessage }) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartY === null) return;

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY; // Positive if swiping up

      const swipeThreshold = 100; // Adjust the threshold as needed

      if (deltaY > swipeThreshold) {
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
      }

      setTouchStartY(null);
    };

    const canvasElement = canvasRef.current;
    if (canvasElement) {
      canvasElement.addEventListener("touchstart", handleTouchStart);
      canvasElement.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (canvasElement) {
        canvasElement.removeEventListener("touchstart", handleTouchStart);
        canvasElement.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [touchStartY]);

  return (
    <div 
      className="h-[100vh] w-full relative mt-10" 
      ref={canvasRef}
      // style={{ pointerEvents: 'none'}}
    >
      <SceneTxt name={name} message={welcomeMessage} />
      <Canvas 
        shadows 
        camera={{ position: [0.0, 0.0, 8.0] }} 
      >
        <SoftShadows size={20} samples={25} focus={0.9} />
        <OrbitControls 
          enableZoom={false} 
          enableRotate={false} 
          enablePan={false}
        />
        <ambientLight intensity={0.2} />
        <directionalLight
          position={[0, 2, 3]}
          intensity={5}
          castShadow
          shadow-mapSize={[1024, 1024]} // Higher shadow map resolution
          shadow-radius={20} // Softer edges
        />
        <Suspense fallback={<Loader />}>
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
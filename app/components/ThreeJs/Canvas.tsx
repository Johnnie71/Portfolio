'use client'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, SoftShadows } from "@react-three/drei";
import AnimatedSphere from './AnimatedSphere'
import Ground from './Ground/ground'

const CanvasContainer: React.FC = () => {
  
  return (
    // <div className="h-[280px] md:h-[150px] lg:h-[250px] xl:h-[400px] 2xl:h-[500px] w-full">
    <div className="h-[100vh] w-full">
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
          <AnimatedSphere />
          <Ground />
        </Suspense>
        <axesHelper />
        </Canvas>
    </div>
  )
}

export default CanvasContainer;
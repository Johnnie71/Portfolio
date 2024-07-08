'use client'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import AnimatedSphere from './AnimatedSphere'

const CanvasContainer: React.FC = () => {
  
  return (
    <div className="h-[280px] md:h-[150px] lg:h-[250px] xl:h-[400px] 2xl:h-[500px] w-full">
    <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
				<OrbitControls enableZoom={false} />
				<ambientLight intensity={0.5} />
				<directionalLight position={[-2, 5, 2]} intensity={1} />
				<Suspense fallback={null}>
					<AnimatedSphere />
				</Suspense>
				<axesHelper />
			</Canvas>
  </div>
  )
}

export default CanvasContainer;
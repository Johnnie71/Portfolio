import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { useLoader, useThree, useFrame } from "@react-three/fiber";
import {  MeshReflectorMaterial } from '@react-three/drei';

const Ground: React.FC = () => {
  const [roughness, normal, displacement] = useLoader(THREE.TextureLoader, [
    './textures/Ground/Roughness.jpg',
    './textures/Ground/Normal.jpg',
    './textures/Ground/Displacement.jpg'
  ])

  const { viewport, pointer } = useThree();
  const groundRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const height = viewport.width < 6 ? -2 : -2.5

  useFrame(() => {
    if (groundRef.current && isHovered) {
      // Tilt the ground slightly based on pointer movement
      const zRotation = THREE.MathUtils.lerp(groundRef.current.rotation.z, -pointer.x * 0.1, 0.2);
      
      groundRef.current.rotation.set(-Math.PI * 0.5, 0, zRotation);
    }
  })

  const handlePointerOver = () => {
    setIsHovered(true)
  }

  const handlePointerOut = () => {
    setIsHovered(false)
  }
  
  return (
    <mesh 
      ref={groundRef} 
      rotation-x={-Math.PI * 0.5} 
      castShadow 
      receiveShadow 
      position={[0.0, height, 0]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <circleGeometry args={[10, 32]} />
      <MeshReflectorMaterial
          mirror={1} // Lower reflection so it interacts more with light
          normalMap={normal}
          normalScale={new THREE.Vector2(0.0, 0.2)}
          roughnessMap={roughness}
          displacementMap={displacement}
          displacementScale={0.05}
          // mixBlur={5} // Softens reflections
          mixStrength={0.8} // Balances texture and reflection
          depthScale={0.01} // Adds a sense of depth to reflections
          roughness={0.6} // Allows more diffuse light interaction
          metalness={0.4} // Makes it more metallic and light-responsive
          resolution={1024}
          blur={[500, 300]} // Keeps reflections softer
          dithering={true}
          minDepthThreshold={0.4} // Ensures subtle variation
          maxDepthThreshold={1.2} // Enhances the reflection effect
          distortion={0.1} // Small distortion to make it more organic
      />
    </mesh>
  )
}

export default Ground;
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useLoader, useThree } from "@react-three/fiber";
import { Reflector, useTexture, MeshReflectorMaterial } from '@react-three/drei';

const Ground: React.FC = () => {
  const [roughness, normal, displacement] = useLoader(THREE.TextureLoader, [
    './textures/Ground/Roughness.jpg',
    './textures/Ground/Normal.jpg',
    './textures/Ground/Displacement.jpg'
  ])

  const { viewport } = useThree()

  const height = viewport.width < 6 ? -2 : -2.5
  
  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow position={[0.0, height, 0]}>
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
import React, { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Text } from "@react-three/drei";
import * as THREE from 'three';

const TextComponent: React.FC<{ position: [number, number, number], color: string, text: string }> = ({ position, color, text }) => {
  const textRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  // Make the text always face the camera
  useFrame(() => {
    if (textRef.current) {
      textRef.current.lookAt(camera.position);
    }
  });

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={1}
      color={color}
      rotation={[0, 0, 0]} // initial rotation, will be updated by lookAt
      // anchorX="center" // Centers the text horizontally
      // anchorY="middle" // Centers the text vertically
      depthOffset={-1} // Keeps text flat on the plane
    >
      {text}
    </Text>
  );
};

export default TextComponent;
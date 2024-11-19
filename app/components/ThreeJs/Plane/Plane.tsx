import React from 'react'

const Plane: React.FC = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, -2.5, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color={'blue'} roughness={0.5} metalness={0.1}/>
    </mesh>
  )
}

export default Plane
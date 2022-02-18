import React, { useRef } from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const AnimatedSphere = () => {
	return (
		<Sphere rotation={[90, 0, 20]} visible args={[1, 200, 300]} scale={2}>
			<MeshDistortMaterial
				color="#8352fd"
				attach="material"
				distort={0.6}
				speed={5}
				roughness={0}
			/>
		</Sphere>
	);
};

export default AnimatedSphere;

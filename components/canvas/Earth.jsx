import React from "react";
import { Canvas } from "@react-three/fiber";

const Earth = () => {
	return (
		<Canvas>
			<mesh>
				<ambientLight intensity={0.1} />
				<directionalLight color="red" position={[0, 0, 5]} />
				<circleBufferGeometry attach="geometry" args={[2, 200]} />
				<meshStandardMaterial attach="material" />
			</mesh>
		</Canvas>
	);
};

export default Earth;

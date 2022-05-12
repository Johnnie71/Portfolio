import React from "react";
import { Canvas } from "@react-three/fiber";

const Earth = () => {
	return (
		<Canvas>
			<ambientLight intensity={0.1} />
			<directionalLight color="red" position={[0, 0, 5]} />
			<mesh>
				<sphereGeometry args={[1, 16, 16]} />
				<meshStandardMaterial color="hotpink" transparent />
			</mesh>
		</Canvas>
	);
};

export default Earth;

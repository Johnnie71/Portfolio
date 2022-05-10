import React from "react";
import { Canvas } from "@react-three/fiber";

const Earth = () => {
	return (
		<Canvas>
			<mesh>
				<circleBufferGeometry attach="geometry" args={[2, 200]} />
				<meshStandardMaterial attach="material" />
			</mesh>
		</Canvas>
	);
};

export default Earth;

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const CarShow = () => {
	return (
		<>
			<OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
			<PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
			<mesh>
				<boxGeometry args={[1, 1, 1]} />
				<meshBasicMaterial color={"red"} />
			</mesh>
		</>
	);
};

const CarCanvas = () => {
	return (
		<Canvas shadows>
			<Suspense fallback={null}>
				<CarShow />
			</Suspense>
		</Canvas>
	);
};

export default CarCanvas;

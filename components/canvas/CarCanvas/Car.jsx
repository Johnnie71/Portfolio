import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const CarShow = () => {
	return (
		<>
			<OrbitControls />
		</>
	);
};

const CarCanvas = () => {
	return (
		<Suspense fallback={null}>
			<Canvas shadows>
				<CarShow />
			</Canvas>
		</Suspense>
	);
};

export default CarCanvas;

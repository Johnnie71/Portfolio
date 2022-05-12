import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

const CarCanvas = () => {
	return (
		<Suspense fallback={null}>
			<Canvas shadows></Canvas>
		</Suspense>
	);
};

export default CarCanvas;

import React, { Suspense } from "react";
import { Container } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box";

const CanvasContainer = () => {
	return (
		<Container mt={4} h={400} bgColor="red">
			<Canvas className="canvas">
				<OrbitControls />
				<ambientLight intensity={0.5} />
				<directionalLight position={[-2, 5, 2]} intensity={1} />
				<Suspense fallback={null}>
					<Box />
				</Suspense>
			</Canvas>
		</Container>
	);
};

export default CanvasContainer;

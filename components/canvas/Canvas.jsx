import React, { Suspense } from "react";
import { Container, useColorModeValue } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box";
import AnimatedSphere from "./AnimatedSphere";

const CanvasContainer = () => {
	return (
		<Container mt={15} h={300}>
			<Canvas>
				<OrbitControls enableZoom={false} />
				<ambientLight intensity={0.5} />
				<directionalLight position={[-2, 5, 2]} intensity={1} />
				<Suspense fallback={null}>
					<AnimatedSphere />
				</Suspense>
			</Canvas>
		</Container>
	);
};

export default CanvasContainer;

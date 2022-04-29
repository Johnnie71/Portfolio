import React, { Suspense } from "react";
import { Container } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AnimatedSphere from "./AnimatedSphere";

const CanvasContainer = ({ color }) => {
	return (
		<Container
			h={{
				base: "300px",
				md: "200px",
				lg: "340px",
				xl: "400px",
				"2xl": "500px",
			}}
		>
			<Canvas>
				<OrbitControls enableZoom={false} />
				<ambientLight intensity={0.5} />
				<directionalLight position={[-2, 5, 2]} intensity={1} />
				<Suspense fallback={null}>
					<AnimatedSphere color={color} />
				</Suspense>
			</Canvas>
		</Container>
	);
};

export default CanvasContainer;

import React, { Suspense } from "react";
import { Container } from "@chakra-ui/react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AnimatedSphere from "./AnimatedSphere";
import { MathUtils } from "three";

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
			<Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
				<OrbitControls enableZoom={false} />
				<ambientLight intensity={0.5} />
				<directionalLight position={[-2, 5, 2]} intensity={1} />
				<Suspense fallback={null}>
					<AnimatedSphere color={color} />
				</Suspense>
				<axesHelper />
			</Canvas>
		</Container>
	);
};

export default CanvasContainer;

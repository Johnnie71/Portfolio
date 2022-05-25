import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Earth = () => {
	const mesh = useRef(null);
	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
	return (
		<>
			<ambientLight intensity={0.1} />
			<directionalLight color="red" position={[0, 0, 5]} />
			<mesh ref={mesh}>
				<sphereGeometry args={[1, 16, 16]} />
				<meshPhysicalMaterial color="hotpink" transparent />
			</mesh>
		</>
	);
};

export default Earth;

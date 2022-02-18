import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Box = (props) => {
	const mesh = useRef();
	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
	return (
		<mesh {...props} rotation={[90, 0, 20]} ref={mesh}>
			<boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
			<meshNormalMaterial attach="material" />
		</mesh>
	);
};

export default Box;

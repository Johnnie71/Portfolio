import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useColorModeValue } from "@chakra-ui/react";

const AnimatedSphere = () => {
	const colorTheme = useColorModeValue("#1367d4", "#8352fd");

	return (
		<Sphere rotation={[90, 0, 20]} visible args={[1, 200, 300]} scale={2}>
			<MeshDistortMaterial
				color={colorTheme}
				attach="material"
				distort={0.6}
				speed={5}
				roughness={0}
			/>
		</Sphere>
	);
};

export default AnimatedSphere;

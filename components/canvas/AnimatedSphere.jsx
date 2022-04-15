import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimatedSphere = ({ color }) => {
	return (
		<Sphere rotation={[90, 0, 20]} visible args={[1, 200, 300]} scale={2}>
			<MeshDistortMaterial
				color={color}
				attach="material"
				distort={0.6}
				speed={5}
				roughness={0}
			/>
		</Sphere>
	);
};

export default AnimatedSphere;

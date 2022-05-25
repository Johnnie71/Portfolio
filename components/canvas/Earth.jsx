import { Canvas } from "@react-three/fiber";

const Earth = () => {
	return (
		<mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
			<sphereGeometry attach="geometry" args={[2, 32, 32]} />
			<meshBasciMaterial
				attach="material"
				color="white"
				roughness={0.1}
				metalness={1}
			/>
		</mesh>
	);
};

const EarthCanvas = () => {
	return <Canvas></Canvas>;
};

export default EarthCanvas;

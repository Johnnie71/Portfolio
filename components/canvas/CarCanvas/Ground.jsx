import { MeshReflectorMaterial } from "@react-three/drei";

export function Ground() {
	return (
		<mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
			<planeGeometry args={[30, 30]} />
			<MeshReflectorMaterial
				envMapIntensity={0}
				dithering={true}
				color={[0.015, 0.015, 0.015]}
			/>
		</mesh>
	);
}

import { MeshReflectorMaterial } from "@react-three/drei";

export function Ground() {
	return (
		<mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
			<planeGeometry />
			<MeshReflectorMaterial />
		</mesh>
	);
}

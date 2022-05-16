import { MeshReflectorMaterial } from "@react-three/drei";

export function Ground() {
	return (
		<mesh>
			<planeGeometry />
			<MeshReflectorMaterial />
		</mesh>
	);
}

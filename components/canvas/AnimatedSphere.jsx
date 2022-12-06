import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { MathUtils } from "three";
import fragmentShader from "./FragmentShader";
import vertexShader from "./VertexShader";

const AnimatedSphere = ({ color }) => {
	const mesh = useRef();
	const hover = useRef(false);

	const uniforms = useMemo(
		() => ({
			u_intensity: {
				value: 0.3,
			},
			u_time: {
				value: 0.0,
			},
		}),
		[]
	);

	useFrame((state) => {
		const { clock } = state;
		mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

		mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
			mesh.current.material.uniforms.u_intensity.value,
			hover.current ? 0.85 : 0.15,
			0.02
		);
	});
	return (
		<mesh
			ref={mesh}
			rotation={[0, 0, 0]}
			visible
			// args={[1, 200, 300]}
			scale={1.8}
			onPointerOver={() => (hover.current = true)}
			onPointerOut={() => (hover.current = false)}
		>
			<icosahedronGeometry args={[2, 20]} />
			<shaderMaterial
				fragmentShader={fragmentShader}
				vertexShader={vertexShader}
				uniforms={uniforms}
				wireframe={false}
				roughness={0}
			/>
			{/* <MeshDistortMaterial
				color={color}
				attach="material"
				distort={0.6}
				speed={5}
				roughness={0}
			/> */}
		</mesh>
	);
};

export default AnimatedSphere;

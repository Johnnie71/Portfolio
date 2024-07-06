import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Color, MathUtils, Mesh, ShaderMaterial } from "three";
import fragmentShader from "./Shaders/FragmentShader";
import vertexShader from "./Shaders/VertexShader";

const AnimatedSphere: React.FC = () => {
	const mesh = useRef<Mesh>(null);
	const hover = useRef<boolean>(false);

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
		if (mesh.current) {
			mesh.current.rotation.y += 0.01;
			mesh.current.rotation.x += 0.01
      const material = mesh.current.material as ShaderMaterial;
      material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

      material.uniforms.u_intensity.value = MathUtils.lerp(
        material.uniforms.u_intensity.value,
        hover.current ? 0.85 : 0.15,
        0.02
      );
    }
	});

	return (
		<mesh
			ref={mesh}
			position={[0, 0, 0]}
			visible
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
			/>
		</mesh>
	);
};

export default AnimatedSphere;
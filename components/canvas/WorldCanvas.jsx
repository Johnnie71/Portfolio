import { Suspense } from "react";
import { Canvas, useThree, useFrame, CubeCamera } from "@react-three/fiber";
import { WebGLRenderTarget, RGBFormat, LinearMipmapLinearFilter } from "three";
import { OrbitControls } from "@react-three/drei";

const Sphere = () => {
	const { gl, scene } = useThree();

	const cubeRenderTarget = new WebGLRenderTarget(512, {
		format: RGBFormat,
		generateMipamps: true,
		minFilter: LinearMipmapLinearFilter,
	});

	const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
	cubeCamera.position.set(0, 0, 0);
	scene.add(cubeCamera);

	useFrame(() => cubeCamera.update(gl, scene));

	return (
		<mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
			<sphereGeometry attach="geometry" args={[2, 32, 32]} />
			<meshBasicMaterial
				attach="material"
				envMap={cubeCamera.renderTarget.texture}
				color="white"
				roughness={0.1}
				metalness={1}
			/>
		</mesh>
	);
};

const WorldCanvas = () => {
	return (
		<Canvas>
			<OrbitControls enableZoom={false} />
			<Suspense fallback={null}>
				<Sphere />
			</Suspense>
		</Canvas>
	);
};

export default WorldCanvas;

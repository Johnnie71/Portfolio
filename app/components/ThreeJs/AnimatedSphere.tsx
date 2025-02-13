import { useFrame, useThree, ThreeEvent } from "@react-three/fiber";
import React, { useMemo, useRef, useState, useEffect } from "react";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import CustomShaderMaterial from 'three-custom-shader-material'
import WobbelVertexShader from './Shaders/wobble/vertex.glsl'
import WobbleFragmentShader from './Shaders/wobble/fragment.glsl';
import simplexNoise4d from './Shaders/includes/simplexNoise4d.glsl'
import * as THREE from "three";
import GUI from 'lil-gui';

interface Props {
	onInteract: () => void;
	onEndInteract: () => void;
}

const AnimatedSphere: React.FC<Props> = ({ onInteract, onEndInteract }) => {
	const mesh = useRef<THREE.Mesh>(null);
	const materialRef = useRef(null);
	const { size } = useThree();
	const [scale, setScale] = useState<number>(0);
	const [zPosition, setZPosition] = useState<number>(-5);
	const [opacity, setOpacity] = useState<number>(0);
	const [isDragging, setIsDragging] = useState(false);
	const previousMousePosition = useRef({ x: 0, y: 0 });

	const [colorA, setColorA] = useState<string>('#ec9d2e')
	const [colorB, setColorB] = useState<string>('#00bfff')

	const gui = new GUI({ width: 325 })
	gui.domElement.style.display = 'none'

	const debugObject = {
		colorA: colorA,
		colorB: colorB,
	}

	const uniforms = useMemo(() => ({
		uTime: new THREE.Uniform(0),
		uPositionFrequency: new THREE.Uniform(0.5),
		uTimeFrequency: new THREE.Uniform(0.4),
		uStrength: new THREE.Uniform(0.3),

		uWarpPositionFrequency: new THREE.Uniform(0.38),
		uWarpTimeFrequency: new THREE.Uniform(0.12),
		uWarpStrength: new THREE.Uniform(1.7),

		uColorA: new THREE.Uniform( new THREE.Color( colorA )),
		uColorB: new THREE.Uniform( new THREE.Color( colorB )),
		uOpacity: new THREE.Uniform(0),
	}), [colorA, colorB]);

	const geometry = useMemo(() => {
		const baseGeometry = new THREE.IcosahedronGeometry(2.5, 50)
		const mergedGeometry = mergeVertices(baseGeometry)
		mergedGeometry.computeTangents();
		return mergedGeometry;
	}, [])

	useFrame(({ clock }) => {
		uniforms.uTime.value = clock.getElapsedTime();

		if (zPosition < 0) {
			setZPosition((prev) => Math.min(prev + 0.025, 0));
		}

		if (opacity < 1) {
			setOpacity((prev) => Math.min(prev + 0.01, 1));
		}

		uniforms.uOpacity.value = opacity;
	})

	// Tweaks
	useEffect(() => {
    gui.add(uniforms.uPositionFrequency, 'value', 0, 2, 0.001).name('uPositionFrequency');
    gui.add(uniforms.uTimeFrequency, 'value', 0, 2, 0.001).name('uTimeFrequency');
    gui.add(uniforms.uStrength, 'value', 0, 2, 0.001).name('uStrength');
    gui.add(uniforms.uWarpPositionFrequency, 'value', 0, 2, 0.001).name('uWarpPositionFrequency');
    gui.add(uniforms.uWarpTimeFrequency, 'value', 0, 2, 0.001).name('uWarpTimeFrequency');
    gui.add(uniforms.uWarpStrength, 'value', 0, 2, 0.001).name('uWarpStrength');

    gui.addColor(debugObject, 'colorA').onChange((newColor: string) => {
      setColorA(newColor);
      uniforms.uColorA.value.set(newColor);
    });

    gui.addColor(debugObject, 'colorB').onChange((newColor: string) => {
      setColorB(newColor);
      uniforms.uColorB.value.set(newColor);
    });

    // Add material properties to the GUI
    if (materialRef.current) {
      gui.add(materialRef.current, 'metalness', 0, 1, 0.001);
      gui.add(materialRef.current, 'roughness', 0, 1, 0.001);
      gui.add(materialRef.current, 'transmission', 0, 1, 0.001);
      gui.add(materialRef.current, 'ior', 0, 10, 0.001);
      gui.add(materialRef.current, 'thickness', 0, 10, 0.001);
    }

    return () => gui.destroy(); // Cleanup the GUI
  }, [uniforms]);

	// Handle mouse/touch movement
  const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setIsDragging(true);
		onInteract()
    previousMousePosition.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    if (!isDragging || !mesh.current) return;

    const deltaX = event.clientX - previousMousePosition.current.x;
    const deltaY = event.clientY - previousMousePosition.current.y;
    
    // Apply rotation based on drag movement
    mesh.current.rotation.y += deltaX * 0.005; // Rotate left/right
    mesh.current.rotation.x += deltaY * 0.005; // Rotate up/down

    previousMousePosition.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = () => {
    setIsDragging(false);
		onEndInteract()
  };


	// Dynamically adjust scale based on viewport width
	useEffect(() => {
		if (size.width < 768) {
			setScale(0.6); // Mobile
		} else if (size.width < 1024) {
			setScale(0.8); // Tablet
		} else {
			setScale(0.8); // Desktop
		}
	}, [size.width]);

	return (
		<mesh
			ref={mesh}
			position={[0, 0, zPosition]}
			visible
			scale={scale}
			geometry={geometry}
			onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
		>
			<CustomShaderMaterial
				ref={materialRef}
				baseMaterial={THREE.MeshPhysicalMaterial}
				vertexShader={simplexNoise4d + "\n" + WobbelVertexShader}
				fragmentShader={WobbleFragmentShader}
				uniforms={uniforms}
				transparent
				metalness={0.335}
				roughness={0.5}
				transmission={0}
				ior={1.5}
				thickness={1.5}
			/>
		</mesh>
	);
};

export default AnimatedSphere;
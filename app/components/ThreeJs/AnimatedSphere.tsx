import { useFrame } from "@react-three/fiber";
import React, { useMemo, useRef, useState, useEffect } from "react";
import { Mesh, IcosahedronGeometry } from "three";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import CustomShaderMaterial from 'three-custom-shader-material'
import WobbelVertexShader from './Shaders/wobble/vertex.glsl'
import WobbleFragmentShader from './Shaders/wobble/fragment.glsl';
import simplexNoise4d from './Shaders/includes/simplexNoise4d.glsl'
import * as THREE from "three";
import GUI from 'lil-gui';

const AnimatedSphere: React.FC = () => {
	const mesh = useRef<Mesh>(null);
	const materialRef = useRef(null);
	const [colorA, setColorA] = useState<string>('#ec9d2e')
	const [colorB, setColorB] = useState<string>('#ee1010')

	const gui = new GUI({ width: 325 })
	gui.domElement.style.display = 'none'

	const debugObject = {
		colorA: colorA,
		colorB: colorB
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
		uColorB: new THREE.Uniform( new THREE.Color( colorB ))
	}), [colorA, colorB]);

	const geometry = useMemo(() => {
		const baseGeometry = new IcosahedronGeometry(2.5, 50)
		const mergedGeometry = mergeVertices(baseGeometry)
		mergedGeometry.computeTangents();
		return mergedGeometry;
	}, [])

	useFrame(({ clock }) => {
		uniforms.uTime.value = clock.getElapsedTime()
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

	return (
		<mesh
			ref={mesh}
			position={[0, 0, 0]}
			visible
			scale={1.75}
			geometry={geometry}
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
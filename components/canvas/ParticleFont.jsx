import React, { useRef, useEffect } from "react";
import Particle from "./Particle";
import { useColorModeValue } from "@chakra-ui/react";

const ParticleFont = ({ color }) => {
	const canvasRef = useRef(null);
	const contextRef = useRef(null);
	let particleArrayRef = useRef([]);
	let adjustX = useRef(20);
	let adjustY = useRef(20);

	useEffect(() => {
		const canvas = canvasRef.current;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		let context = canvas.getContext("2d");
		contextRef.current = context;

		const mouse = {
			x: null,
			y: null,
			radius: 80,
		};

		window.addEventListener("mousemove", function (event) {
			mouse.x = event.x;
			mouse.y = event.y;
		});

		context.fillStyle = color;
		context.font = "30px Verdana";
		context.fillText("Johnnie Gonzalez", 0, 30);
		const textCoordinates = context.getImageData(0, 0, 100, 100);

		function init() {
			const particleArray = particleArrayRef.current;
			for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
				for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
					if (
						textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] >
						128
					) {
						let positionX = x + adjustX.current;
						let positionY = y + adjustY.current;
						particleArray.push(
							new Particle(positionX * 5, positionY * 5, context, mouse)
						);
					}
				}
			}
		}
		init();

		function animate() {
			let particleArray = particleArrayRef.current;
			context.clearRect(0, 0, canvas.width, canvas.height);
			for (let i = 0; i < particleArray.length; i++) {
				particleArray[i].draw();
				particleArray[i].update();
			}
			requestAnimationFrame(animate);
		}
		animate();
	});

	return <canvas ref={canvasRef}></canvas>;
};

export default ParticleFont;

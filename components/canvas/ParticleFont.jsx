import React, { useRef, useEffect } from "react";
import Particle from "./Particle";

const ParticleFont = (props) => {
	const canvasRef = useRef(null);
	const contextRef = useRef(null);
	let particleArrayRef = useRef([]);

	useEffect(() => {
		const canvas = canvasRef.current;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		let context = canvas.getContext("2d");
		contextRef.current = context;

		const mouse = {
			x: null,
			y: null,
			radius: 150,
		};

		window.addEventListener("mousemove", function (event) {
			mouse.x = event.x;
			mouse.y = event.y;
		});

		context.fillStyle = "white";
		context.font = "30px Verdana";
		const textCoordinates = context.getImageData(0, 0, 100, 100);

		function init() {
			const particleArray = particleArrayRef.current;
			// for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
			// 	for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
			// 		if (textCoordinates.data[1] > 128) {
			// 		}
			// 	}
			// }
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
	}, []);

	return <canvas ref={canvasRef}></canvas>;
};

export default ParticleFont;

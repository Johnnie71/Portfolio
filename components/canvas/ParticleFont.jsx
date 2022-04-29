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

		function init() {
			const particleArray = particleArrayRef.current;
			for (let i = 0; i < 100; i++) {
				let x = Math.random() * canvas.width;
				let y = Math.random() * canvas.height;
				particleArray.push(new Particle(x, y, context, mouse));
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
	}, []);

	return <canvas ref={canvasRef}></canvas>;
};

export default ParticleFont;

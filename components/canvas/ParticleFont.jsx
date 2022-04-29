import React, { useRef, useEffect } from "react";
import Particle from "./Particle";

const ParticleFont = (props) => {
	const canvasRef = useRef(null);
	const contextRef = useRef(null);
	let particleArrayRef = useRef([]);

	useEffect(() => {
		const canvas = canvasRef.current;
		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;

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
			particleArray.push(new Particle(50, 50, context));
			particleArray.push(new Particle(80, 50, context));
			console.log(particleArray);
		}
		init();
	}, []);

	return <canvas ref={canvasRef}></canvas>;
};

export default ParticleFont;

import React, { useRef, useEffect } from "react";

const ParticleFont = (props) => {
	const canvasRef = useRef(null);
	const contextRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;

		let context = canvas.getContext("2d");
		contextRef.current = context;

		context.fillStyle = "white";
		context.font = "30px Verdana";

		const mouse = {
			x: null,
			y: null,
			radius: 150,
		};

		window.addEventListener("mousemove", function (event) {
			mouse.x = event.x;
			mouse.y = event.y;
			console.log(mouse.x, mouse.y);
		});
	}, []);

	let particleArray = [];

	return <canvas ref={canvasRef}></canvas>;
};

export default ParticleFont;

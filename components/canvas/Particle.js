export default class Particle {
	constructor(x, y, context, mouse) {
		this.x = x;
		this.y = y;
		this.context = context;
		this.mouse = mouse;
		this.size = 3;
		this.baseX = this.x;
		this.baseY = this.x;
		this.density = Math.random() * 30 + 1;
	}

	draw() {
		this.context.fillStyle = "red";
		this.context.beginPath();
		this.context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		this.context.closePath();
		this.context.fill();
	}

	update() {
		let dx = this.mouse.x - this.x;
		let dy = this.mouse.y - this.y;
		let distance = Math.sqrt(dx * dx + dy * dy);
		if (distance < 300) {
			this.size = 30;
		} else {
			this.size = 3;
		}
	}
}

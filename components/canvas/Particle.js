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
		let forceDirectionX = dx / distance;
		let forceDirectionY = dy / distance;
		let maxDistance = this.mouse.radius;
		let force = (maxDistance - distance) / maxDistance;
		let directionX = forceDirectionX * force * this.density;
		let directionY = forceDirectionY * force * this.density;
		if (distance < this.mouse.radius) {
			this.x -= directionX;
			this.y -= directionY;
		} else {
			this.size = 3;
		}
	}
}

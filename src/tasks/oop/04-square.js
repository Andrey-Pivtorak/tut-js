/**
 * написать все недостающие методы и конструктор
 *
 */
class Square extends Shape {
	constructor(...points) {
		super(...points);
	}

	getWidth() {
		const [p1, p2] = this.getPoints();
		const x1 = p1.getX();
		const x2 = p2.getX();
		const y1 = p1.getY();
		const y2 = p2.getY();

		return Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2);
	}

	getPerimeter() {
		return this.getWidth() * 4;
	}

	getSquare() {
		return this.getWidth() ** 2;
	}

	getName() {
		return 'square';
	}
}

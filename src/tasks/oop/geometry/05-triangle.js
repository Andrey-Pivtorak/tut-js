/**
 * написать все недостающие методы и конструктор
 *
 */
class Triangle extends Shape {
	constructor(...points) {
		super(...points);
	}

	getPerimeter() {
		const [p1, p2] = this.getPoints();
		const x1 = p1.getX();
		const x2 = p2.getX();
		const y1 = p1.getY();
		const y2 = p2.getY();
		const sideLength = Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2);

		return sideLength * 3;
	}

	getSquare() {
		const perimeter = this.getPerimeter();
		const s = Math.sqrt(perimeter * (perimeter - perimeter / 3) ** 3);

		return s.toFixed(2);
	}

	getName() {
		return 'triangle';
	}
}

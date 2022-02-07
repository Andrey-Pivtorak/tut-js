/**
 * написать все недостающие методы и конструктор
 *
 */
class Circle extends Shape {
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
		const perimeter = 2 * Math.PI * sideLength;

		return perimeter.toFixed(2);
	}

	getSquare() {
		const square = Math.PI * this.getPerimeter() ** 2;

		return square.toFixed(2);
	}

	getName() {
		return 'circle';
	}
}

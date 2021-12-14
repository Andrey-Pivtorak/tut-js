/**
 * не совсем корректно наследовать отрезок от фигуры, но всё же...)
 * написать все недостающие методы и конструктор
 * можно считать, что площадь отрезка равна 0 а периметр равен длине
 */
class LineSegment extends Shape {
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

		return sideLength;
	}

	getSquare() {
		return 0;
	}

	getName() {
		return 'line';
	}
}

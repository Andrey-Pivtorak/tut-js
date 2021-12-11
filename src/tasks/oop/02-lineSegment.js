/**
 * не совсем корректно наследовать отрезок от фигуры, но всё же...)
 * написать все недостающие методы и конструктор
 * можно считать, что площадь отрезка равна 0 а периметр равен длине
 */
class LineSegment extends Shape {
	constructor(...points) {
		super(...points);
		this.points = points;
	}

	getPerimeter() {
		// const arrayPoints = super.getPoints();
		const arrayPoints = this.points;
		const x1 = arrayPoints[0].getX();
		const x2 = arrayPoints[1].getX();
		const y1 = arrayPoints[0].getY();
		const y2 = arrayPoints[1].getY();

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

// const line = new LineSegment(new Point(0, 0), new Point(0, 11));
// console.log(line.toString());

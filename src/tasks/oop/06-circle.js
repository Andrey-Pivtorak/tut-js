/**
 * написать все недостающие методы и конструктор
 *
 */
class Circle extends Shape {
	constructor(...points) {
		super(...points);
	}

	getPerimeter() {
		const arrayPoints = super.getPoints();
		const x1 = arrayPoints[0].getX();
		const x2 = arrayPoints[1].getX();
		const y1 = arrayPoints[0].getY();
		const y2 = arrayPoints[1].getY();

		const sideLength = Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2);
		const perimeter = 2 * Math.PI * sideLength;

		return perimeter.toFixed(2);
	}

	getSquare() {
		const arrayPoints = super.getPoints();
		const x1 = arrayPoints[0].getX();
		const x2 = arrayPoints[1].getX();
		const y1 = arrayPoints[0].getY();
		const y2 = arrayPoints[1].getY();

		const sideLength = Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2);

		const square = Math.PI * sideLength ** 2;
		return square.toFixed(2);
	}

	getName() {
		return 'circle';
	}
}

// const circle = new Circle(new Point(0, 0), new Point(0, 5));
// console.log(circle.toString());

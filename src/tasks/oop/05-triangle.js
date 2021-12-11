/**
 * написать все недостающие методы и конструктор
 *
 */
class Triangle extends Shape {
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

		return sideLength * 3;
	}

	getSquare() {
		const perimeter = this.getPerimeter();
		// const s = Math.sqrt(
		// 	perimeter *
		// 		(perimeter - perimeter / 3) *
		// 		(perimeter - perimeter / 3) *
		// 		(perimeter - perimeter / 3),
		// );

		const s = Math.sqrt(perimeter * (perimeter - perimeter / 3) ** 3);

		return s.toFixed(2);
	}

	getName() {
		return 'triangle';
	}
}

// const triangle = new Triangle(new Point(0, 0), new Point(0, 7));
// console.log(triangle.toString());

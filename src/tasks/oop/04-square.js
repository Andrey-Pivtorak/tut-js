/**
 * написать все недостающие методы и конструктор
 *
 */
class Square extends Shape {
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

		return sideLength * 4;
	}

	getSquare() {
		return (this.getPerimeter() / 4) ** 2;
	}

	getName() {
		return 'square';
	}
}

// const square = new Square(new Point(0, 0), new Point(0, 10));
// console.log(square.toString());

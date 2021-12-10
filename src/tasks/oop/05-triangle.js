/**
 * написать все недостающие методы и конструктор
 *
 */
class Triangle extends Shape {
	constructor(name, ...sides) {
		super(name, sides);
		this.name = name;
		this.sides = sides;
	}

	getPerimeter() {
		return this.sides.reduce((sum, el) => (sum += el));

	}

	getSquare() {
		const perimeter = this.getPerimeter();
		const s = Math.sqrt(
			perimeter *
				(perimeter - this.sides[0]) *
				(perimeter - this.sides[1]) *
				(perimeter - this.sides[2])
		);

		return s.toFixed(2);
	}

	getName() {
		return this.name;
	}
}

const triangle = new Triangle('triangle', 2, 3, 4);
console.log(triangle.toString());

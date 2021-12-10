/**
 * написать все недостающие методы и конструктор
 *
 */
class Circle extends Shape {
	constructor(name, radius) {
		super(name, radius);
		this.name = name;
		this.radius = radius;
	}

	getPerimeter() {
		const perimeter = 2 * Math.PI * this.radius;
		return perimeter.toFixed(2);
	}

	getSquare() {
		const square = Math.PI * this.radius ** 2;
		return square.toFixed(2);
	}

	getName() {
		return this.name;
	}
}

const circle = new Circle('circle', 5);
console.log(circle.toString());

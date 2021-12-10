/**
 * написать все недостающие методы и конструктор
 *
 */
class Square extends Shape {
	constructor(name, length) {
		super(name, length);
		this.name = name;
		this.length = length;
	}

	getPerimeter() {
		return this.length * 4;
	}

	getSquare() {
		return this.length ** 2;
	}

	getName() {
		return this.name;
	}
}

const square = new Square('square', 4);
console.log(square.toString());

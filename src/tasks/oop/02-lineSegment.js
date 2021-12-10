/**
 * не совсем корректно наследовать отрезок от фигуры, но всё же...)
 * написать все недостающие методы и конструктор
 * можно считать, что площадь отрезка равна 0 а периметр равен длине
 */
class LineSegment extends Shape {
	constructor(name, length) {
		super(name, length);
		this.name = name;
		this.length = length;
	}

	getPerimeter() {
		return this.length;
	}

	getSquare() {
		return 0;
	}

	getName() {
		return this.name;
	}
}

const line = new LineSegment('line', 25);
console.log(line.toString());

const GeometryUtils = {
	createLine(l) {
		return new LineSegment(new Point(0, 0), new Point(0, l));
	},

	/**
	 * ф-ция должна уметь создавать равносторонний треугольник со стороной длиной l,
	 * координаты вершин можно задавать как удобно, можно так что-бы одна вершина была в начале координат, как вариант
	 * ф-ция должна вернуть созданный треугольник
	 */
	createTriangle(l) {
		return new Triangle(new Point(0, 0), new Point(0, l));
	},

	/**
	 * ф-ция должна уметь создавать квадрат со стороной длиной l,
	 * координаты вершин можно задавать как удобно, можно как с труегульником
	 * ф-ция должна вернуть созданный квадрат
	 */
	createSquare(l) {
		return new Square(new Point(0, 0), new Point(0, l));
	},

	/**
	 * ф-ция должна уметь создавать круг радиуса r
	 * координаты центра можно взять любые
	 * ф-ция должна вернуть созданный круг
	 */
	createCircle(r) {
		return new Circle(new Point(0, 0), new Point(0, r));
	},

	/**
	 * написать ф-цию, которая сгенерирует список из n случайных фигур
	 */
	createRandomShapes(n) {
		const value = 8;
		const arrayShapes = [
			this.createLine(value),
			this.createTriangle(value),
			this.createSquare(value),
			this.createCircle(value),
		];

		const outArray = [];

		for (let i = 0; i < n; i++) {
			let shape = [Math.floor(Math.random() * arrayShapes.length)];
			// console.log(arrayShapes[shape].toString());
			outArray.push(arrayShapes[shape].toString());
		}

		return outArray;
	},
};

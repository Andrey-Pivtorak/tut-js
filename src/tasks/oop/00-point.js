class Point {
	#x;
	#y;

	constructor(x, y) {
		this.#x = x;
		this.#y = y;
	}

	getX() {
		return this.x;
	}

	setX(value) {
		this.x = value;
	}
}

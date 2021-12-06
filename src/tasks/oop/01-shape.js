/**
 * можно сказать, что это есть абстракция нашей геометрической фигуры в которой есть вершины
 *  у любой геометрической фигуры есть периметр и площадь
 */
class Shape {
    #points;

    constructor(...points) {
        this.#points = points;
    }

    getPoints() {
        return this.#points;
    }

    setPoints(points) {
        this.#points = points;
    }

    getPerimeter() {
        throw new Error('Not implemented');
    }

    getSquare() {
        throw new Error('Not implemented');
    }

    getName() {
        throw new Error('Not implemented');
    }

    toString() {
        return `${this.getName()}: s=${this.getSquare()}, p=${this.getPerimeter()}`;
    }
}
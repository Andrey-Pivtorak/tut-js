class Point3d extends Point {
    #z;
    constructor(x, y, z) {
        super(x, y);
        this.#z = z;
    }

    getZ() {
        return this.#z;
    }

    setZ(z) {
        this.#z = z;
    }
}
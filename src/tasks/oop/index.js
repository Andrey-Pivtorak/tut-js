/**
 * надо заполнить классы требуемой логикой, так что-бы этот код выполнялся без ошибок
 * этот код менять нельзя=)
 *
 */
const main = () => {
    const shapes = GeometryUtils.createRandomShapes(10);
    shapes.forEach((shape) => {
			console.log(shape);
    });
};

main();

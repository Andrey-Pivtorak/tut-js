const objectsTask = {
    //на вход всегда приходит просто объект в котором ключи и значения - строки
    //вернуть новый объект, что-бы в нём ключи и значения были поменяны местами
    //swapKeysWithValues({a: 'aa', b: 'bb'}) => { aa: 'a', bb: 'b' };
    swapKeysWithValues(obj) {
		return Object.fromEntries(Object
		.entries(obj)
		.map(([key, value]) => [value, key]));

	// const arrayObj = [];
	// for (const key in obj) {
	// 	arrayObj.push([key, obj[key]]);
	// }

	// const result = arrayObj.map(item => [item[0], item[1]] = [item[1], item[0]]);
	// const finalObj = Object.fromEntries(result);

	// return finalObj;
    },

    /**
     * на вход подается объект
     * функция должна сделать и вернуть тн глубокую копию этого объекта
     * вся логика должна быть написана самостоятельно, так же нужно учесть что некоторые свойства копируемого объекта могут быть массивами
     */
	deepCopy(obj) {
		let objCopy = {};

		for( let value in obj ) {
			if (typeof obj[value] === 'object') {
				objCopy[value] = deepCopy(obj[value]);
			} else {
				objCopy[value] = obj[value];
			}
		}

		return objCopy;
	}

	// const objIn = {
		// 	str: 'asd',
		// 	bool: true,
		// 	num: 123,
		// 	arr: [
		// 		'programer', {
		// 			arr3: [1, 2, null]
		// 		}
		// 	],
		// 	obj1: {
		// 		str: 'jhg',
		// 		nullProp: null,
		// 		bool: false,
		// 		arr1: [1, 2, { stage: '1'}]
		// 	}
		// }

	// console.log(deepCopy(objIn));
};


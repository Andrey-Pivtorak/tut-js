const objectsTask = {
    //на вход всегда приходит просто объект в котором ключи и значения - строки
    //вернуть новый объект, что-бы в нём ключи и значения были поменяны местами
    //swapKeysWithValues({a: 'aa', b: 'bb'}) => { aa: 'a', bb: 'b' };
    swapKeysWithValues(obj) {
		return Object.fromEntries(
			Object .entries(obj)
				.map(([key, value]) => [value, key]));

		// const newObj = {};

		// for (const key in obj) {
		// 	const value = obj[key];
		// 	newObj[value] = key;
		// }

		// return newObj;
    },

    /**
     * на вход подается объект
     * функция должна сделать и вернуть тн глубокую копию этого объекта
     * вся логика должна быть написана самостоятельно, так же нужно учесть что некоторые свойства копируемого объекта могут быть массивами
     */
	deepCopy(obj) {
		const objCopy = {};

		for (let key in obj) {
			if (Array.isArray(obj[key])) {
					objCopy[key] = obj[key];
			} else if (typeof obj[key] === 'object') {
					objCopy[key] = deepCopy(obj[key]);
			}
			objCopy[key] = obj[key];
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


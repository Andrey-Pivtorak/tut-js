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
		const newCopy = {};

		for (let key in obj) {
			const value = obj[key];

			if (typeof value !== 'object') {
				newCopy[key] = value;
			} else if (value === null) {
				newCopy[key] = null;
			} else if (Array.isArray(value)) {
				const copyArray = [];
				newCopy[key] = copyArray;

				for (let i = 0; i < value.length; i++) {
					const valueElement = obj[key];

					if (typeof valueElement[i] === 'object' && valueElement[i] !== null) {
						copyArray.push(deepCopy(valueElement[i]));
					} else {
						copyArray.push(valueElement[i]);
					}
				}
			} else {
				newCopy[key] = deepCopy(value)
			}
		}

		return newCopy;
	}

	// const objIn = {
	// 		str: 'asd',
	// 		bool: true,
	// 		num: 123,
	// 		arr: [
	// 			'programer', {
	// 				arr3: [1, 2, null]
	// 			}
	// 		],
	// 		obj1: {
	// 			str: 'jhg',
	// 			nullProp: null,
	// 			bool: false,
	// 			arr1: [1, 2, { stage: '1'}]
	// 		}
	// 	}

	// console.log(deepCopy(objIn));
	// const objOut = deepCopy(objIn);

	// console.log(JSON.stringify(objIn) === JSON.stringify(objOut));

	// function ensureRefsDistinct(obj, b) {
	// 	for (const key in obj) {
	// 		if (obj[key] === null) {
	// 			continue;
	// 		}

	// 		if (typeof obj[key] === 'object' && obj[key] !== null) {
	// 			if (obj[key] !== b[key]) {
	// 				return false;
	// 			}
	// 			ensureRefsDistinct(obj[key], b[key]);
	// 		}
	// 	}
	// }

	// console.log(ensureRefsDistinct(objIn, objOut));
};


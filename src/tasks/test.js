/**
 * на вход подается объект
 * функция должна сделать и вернуть тн глубокую копию этого объекта
 * вся логика должна быть написана самостоятельно, так же нужно учесть что некоторые свойства копируемого объекта могут быть массивами
 */
function deepCopy(obj) {
	const newCopy = {};

	for (let key in obj) {
		if (typeof obj[key] !== 'object' && !Array.isArray(obj[key])) {
			newCopy[key] = obj[key];
		} else if (obj[key] === null) {
			newCopy[key] = null;
		} else if (Array.isArray(obj[key])) {
			const copyArray = [];
			newCopy[key] = copyArray;

			for (let i = 0; i < obj[key].length; i++) {
				const value = obj[key];

				if (typeof value[i] === 'object' && value[i] !== null) {
					copyArray.push(deepCopy(value[i]));
				} else {
					copyArray.push(value[i]);
				}
			}
		} else if (typeof obj[key] === 'object') {
			newCopy[key] = deepCopy(obj[key])
		}
	}

	return newCopy;
}

const objIn = {
		str: 'asd',
		bool: true,
		num: 123,
		arr: [
			'programer', {
				arr3: [1, 2, null]
			}
		],
		obj1: {
			str: 'jhg',
			nullProp: null,
			bool: false,
			arr1: [1, 2, { stage: '1'}]
		}
	}

console.log(deepCopy(objIn));
const objOut = deepCopy(objIn);
console.log(JSON.stringify(objIn) === JSON.stringify(objOut));


function ensureRefsDistinct(objIn, objOut) {
	for (const key in objIn) {
		if (objIn[key] === null) {
			continue;
		}

		if (typeof objIn[key] === 'object' && objIn[key] !== null) {
			if (objIn[key] !== objOut[key]) {
				return false;
			}
			ensureRefsDistinct(objIn[key], objOut[key]);
		}
	}
}

console.log(ensureRefsDistinct(objIn, objOut));

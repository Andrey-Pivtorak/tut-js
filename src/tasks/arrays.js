const arraysTask = {
	/**
   * 
   * @param array - массив, где могут быть не только числа
   * нужно посчитать и вернуть сумму всех чисел
   */
	totalSum: function (array) {
		return array
			.filter(item => typeof item === 'number')
			.reduce((sum, item) => sum + item, 0);
	},

	/**
	 * на вход ф-ция получает 2 массива
	 * нужно вернуть новый массив, в котором будут скомбинированы элементы из 2 массивов таким образом:
	 * сначала будут идти первые элементы, потом вторые и тд, если в одном из массивов элементов больше не осталось то просто заполнять элементами из другого массива
	 * пример: combine([1, 2, 3], ['a', 'b', 'c', 'd']) => [1, 'a', 2, 'b', 3, 'c', 'd']
	 */
	combine: function (array1, array2) {
		const maxLength = Math.max(array1.length, array2.length);

		const result = [];
		for (let i = 0; i < maxLength; i++) {

			if (i < array1.length) {
				result.push(array1[i]);
			}

			if (i < array2.length) {
				result.push(array2[i]);
			}
		}

		return result;
	},

	//вернуть массив, состоящий из идущих подряд чисел, начиная со start, и до end включительно
	//range(0, 3) => [0, 1, 2, 3]
	range(start, end) {
		if (start > end) {
			[start, end] = [end, start];
		}

		if (typeof start !== 'number' || typeof end !== 'number') {
			return 'Error. Input a correct values!';
		}

		const result = [];
		for (let i = start; i <= end; i++) {
			result.push(i);
		}

		return result;
	},

	//ф-ция должна вернуть последние n элементов массива
	//если n > array.length то вернуть копию массива

	lastN(array, n) {
		if (n > array.length) {
			return [...array];
			// return array.slice();
		}

		return array.slice(array.length - n);
	},

	//ф-ция должна вернуть новый массив, в котором будут все элементы исоходного массива, но без дубликатов
	//unique([1, 2, 3, 3]) => [1, 2, 3]
	unique(array) {
		const result = [];
		array.forEach(element => {
			if (!result.includes(element)) {
				result.push(element);
			}
		});

		return result;
	},

	/**
	 * разбить исходный массив на несколько подмассивов длиной chunkSize
	 * chunk([1, 2, 3, 4, 5], 3) => [[1, 2, 3], [4, 5]]
	 */
	chunk: function (arr, chunkSize) {
		const result = [];
		for (let i = 0; i < arr.length; i += chunkSize) {
			result.push(arr.slice(i, i + chunkSize));
		}

		return result;
	},

	//вернуть новый массив из элементов, для которых ф-ция cb вернёт true
	//аналог родного array.filter
	filter(array, cb) {
		const result = [];
		for (let i = 0; i < array.length; i++) {
			if (cb(array[i])) {
				result.push(array[i]);
			}
		}

		return result;
	},
	// функція, що передається на вхід у функцію filter
	// function isEven(number) {
	// 	if (number % 2 === 0) {
	// 		return true;
	// 	}
	// }

	//эта ф-ция должна работать как array.forEach, но если cb возвращает false то обход цикла должен прикратиться
	breakableForEach(array, cb) {
		for (let i = 0; i < array.length; i++) {
			if (!cb(array[i])) {
				break;
			}
		}
	},
	// функція, що передається на вхід у функцію breakableForEach
	// function isEven(element) {
	// 	if (typeof element === 'string') {
	// 		return true;
	// 	}
	// }

	//ф-ция должна вернуть true если в обеих массивах одинаковые элементы, иначе false
	//areArraysEqual([1, 2, 3], [2, 3, 1]) => true
	//areArraysEqual([1, 2, 2], [1, 2]) => false
	areArraysEqual(arr1, arr2) {
		if (arr1.length !== arr2.length) {
			return false;
		}

		arr1.sort();
		arr2.sort();

		return arr1.every((item, i) => item === arr2[i]);
	},

	/**
	 * На вход подается массив чисел, 2 числа min/max и необязательный булевый параметр strict, который по-умолчанию будет true
	 * может быть быть так что min > max, те сначала надо убедиться и обеспечить min>=max
	 * параметр strict надо помнимать так: если true то сравнивать числа через ><, иначе сравнивать через >=, <=
	 * ф-ция должна вернуть новый массив в котором все элементы будут находиться между min и max
	 */
	selectIntervalFromArray(array, min, max, strict = true) {

		if (min > max) {
			[min, max] = [max, min];
		}

		const result = strict
			? elem => elem > min && elem < max
			: elem => elem >= min && elem <= max;

		return array.filter(result);
	}
};

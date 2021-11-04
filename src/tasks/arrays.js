const arraysTask = {
	/**
   * 
   * @param array - массив, где могут быть не только числа
   * нужно посчитать и вернуть сумму всех чисел
   */
	totalSum: function (array) {
		if (array.length > 0 && array.some(item => typeof item === 'number')) {
			let result = array.filter(item => typeof item === 'number').reduce((sum, item) => sum + item);

			return result;
		}

		return 0;
	},

	/**
	 * на вход ф-ция получает 2 массива
	 * нужно вернуть новый массив, в котором будут скомбинированы элементы из 2 массивов таким образом:
	 * сначала будут идти первые элементы, потом вторые и тд, если в одном из массивов элементов больше не осталось то просто заполнять элементами из другого массива
	 * пример: combine([1, 2, 3], ['a', 'b', 'c', 'd']) => [1, 'a', 2, 'b', 3, 'c', 'd']
	 */
	combine: function (array1, array2) {
		let result = [];
		const maxLength = Math.max(array1.length, array2.length);

		for (let i = 0; i < maxLength; i++) {
			if (array1[i]) result.push(array1[i]);
			if (array2[i]) result.push(array2[i]);
		}

		return result;
	},

	//вернуть массив, состоящий из идущих подряд чисел, начиная со start, и до end включительно
	//range(0, 3) => [0, 1, 2, 3]
	range(start, end) {
		let result = [];

		if (start > end) {
			let temp = start;
			start = end;
			end = temp;
		}

		if (typeof start !== 'number'
			|| typeof end !== 'number')
			return 'Error. Input a correct values!';

		for (let i = start; i < end + 1; i++) {
			result.push(i);
		}

		return result;
	},

	//ф-ция должна вернуть последние n элементов массива
	//если n > array.length то вернуть копию массива
	lastN(array, n) {
		if (n > array.length) return array;

		return array.slice(array.length - n, array.length);
	},

	//ф-ция должна вернуть новый массив, в котором будут все элементы исоходного массива, но без дубликатов
	//unique([1, 2, 3, 3]) => [1, 2, 3]
	unique(array) {
		let result = [];
		array.forEach(element => {
			if (!result.includes(element)) result.push(element);
		});

		return result;
	},

	/**
	 * разбить исходный массив на несколько подмассивов длиной chunkSize
	 * chunk([1, 2, 3, 4, 5], 3) => [[1, 2, 3], [4, 5]]
	 */
	chunk: function (arr, chunkSize) {
		let result = [];
		for (let i = 0; i < arr.length; i += chunkSize) {
			result.push(arr.slice(i, i + chunkSize));
		}

		return result;
	},

	//вернуть новый массив из элементов, для которых ф-ция cb вернёт true
	//аналог родного array.filter
	filter(array, cb) {
		let result = [];
		for (let i = 0; i < array.length; i++) {
			if (cb(array[i])) result.push(array[i]);
		}

		return result;
	},
	// функція, що передається на вхід у функцію filter
	// function isEven(number) {
	// 	if (number % 2 === 0) return true;
	// }

	//эта ф-ция должна работать как array.forEach, но если cb возвращает false то обход цикла должен прикратиться
	breakableForEach(array, cb) {
		for (let i = 0; i < array.length; i++) {
			if (!cb(array[i])) break;
		}
	},
	// функція, що передається на вхід у функцію breakableForEach
	// function isEven(element) {
	// 	if (typeof element === 'string') return true;
	// }

	//ф-ция должна вернуть true если в обеих массивах одинаковые элементы, иначе false
	//areArraysEqual([1, 2, 3], [2, 3, 1]) => true
	//areArraysEqual([1, 2, 2], [1, 2]) => false
	areArraysEqual(arr1, arr2) {
		if (arr1.length === arr2.length
			&& arr2.every(item => arr1.includes(item)))
			return true;

		return false;
	},

	/**
	 * На вход подается массив чисел, 2 числа min/max и необязательный булевый параметр strict, который по-умолчанию будет true
	 * может быть быть так что min > max, те сначала надо убедиться и обеспечить min>=max
	 * параметр strict надо помнимать так: если true то сравнивать числа через ><, иначе сравнивать через >=, <=
	 * ф-ция должна вернуть новый массив в котором все элементы будут находиться между min и max
	 */
	selectIntervalFromArray(array, min, max, strict = true) {
		if (strict && min > max) {
			let temp = min;
			min = max;
			max = temp;
		}

		if (!strict && min >= max) {
			return [array[min]];
		}

		return array.slice(min, max);
	}
};

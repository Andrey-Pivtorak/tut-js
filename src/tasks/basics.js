const basicsTask = {
	/**
	 * на вход ф-ция получает 3 числа, нужно вернуть сумму этих чисел
	 */
	sum(a, b, c) {
		let sum = 0;
		//ваш код тут
		sum = a + b + c;

		return sum;
	},

	/**
	 * аргументами могут быть не только числа
	 * нужно вернуть сумму только чисел
	 * 
	 */

	// safeSum(a, b, c) - я зробив через остаточні параметри
	safeSum(...args) {
		let sum = 0;
		//ваш код тут;
		for (let arg of args) {
			if (typeof arg === 'number') sum += arg;
		}

		return sum;
	},

	/**
	 * на входе есть 3 числа
	 * нужно найти максимальное
	 */
	max(a, b, c) {
		let m = a;
		//ваш код тут

		// m = Math.max(a, b, c);
		// або
		if (b > a) m = b;
		if (c > a && c > b) m = c;

		return m;
	},

	/**
	 * 
	 * на входе есть 3 числа
	 * нужно найти минимальное
	 */

	min(a, b, c) {
		let m = a;
		//ваш код тут

		// m = Math.min(a, b, c);
		// або
		if (b < a) m = b;
		if (c < a && c < b) m = c;

		return m;
	},

	//если n целое число то вернуть true, иначе false
	isIntegerNumber(n) {
		// return n % 1 === 0;
		// або
		return Number.isInteger(n);
	},

	//ф-ция должна уметь округлить число n до l знаков после запятой, 1 <= l <= 10
	//roundNumber(0.66666666, 2) => 0.67
	//roundNumber(1, 1) => 1.0
	roundNumber(n, l) { // *** ПЕРЕРОБЛЮВАВ ***
		// return n.toFixed(l);
		let m = Math.pow(10, l);

		return Math.round(n * m) / m;


	},

	//на входе массив чисел
	//ф-ция должна вернуть массив процентов, т.е. сколько процентов занимает каждое число от общей суммы
	//percentage([1, 1]) => [0.5, 0.5]
	//percentage([1, 2, 3]) => [0.17, 0.33, 0.6]
	percentage(numbers) {
		const sum = numbers.reduce((sum, item) => sum + item, 0);
		if (sum !== 0) {
			const percent = numbers.map(element => element = Math.round((element / sum) * 100) / 100);
			return percent;
		}

		return 'The array has only zero elements. Try again!';
	},
};

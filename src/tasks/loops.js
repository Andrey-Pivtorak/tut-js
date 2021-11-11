const loopsTasks = {
	/**
	 *
	 * @param {} n - целое число
	 * нужно посчитать и вернуть сумму всех чисел начиная с 1 и до n
	 */
	sumFromOneToN: function (n) {
		let sum = 0;

		for (let i = 1; i <= n; i++) {
			sum += i;
		}

		return sum;
	},

	/**
	 * вывести не консоль строку посимвольно всеми доступными циклами. for, for of, while, do .. while
	 */
	printString(str) {
		// 	for (let i = 0; i < str.length; i++) {
		// 		console.log(str[i]);
		// 	}

		// for (let item of str) {
		// 	console.log(item);
		// }

		// let i = 0;

		// while (i < str.length) {
		// 	console.log(str[i]);
		// 	i++;
		// }

		// do {
		// 	console.log(str[i]);
		// 	i++;
		// } while (i < str.length);
	},

	/**
	 * на вход ф-ция получет 2 числа n, maxAttempts
	 * n - максимальное число, maxAttemps - максимальное кол-во попыток угадывания
	 * ф-ция генерирует псевдослучайное счисло между 1 и n
	 * далее у пользователя есть maxAttemps попыток это число угадать
	 * ф-ция должна запрашивать у пользователя число, через prompt
	 * если пользователь угадал число - вернуть true, если все попытки использованы и число не угадано - false
	 * использовать цикл do ... while
	 */
	guessNumber(n, maxAttempts) {
		const randomNumber = Math.ceil(Math.random() * n);
		let countAttempts = maxAttempts;

		do {
			let userNumber = Number(prompt(`Введи число. Є спроб: ${countAttempts}`));
			if (isNaN(userNumber)) {
				continue;
			}

			if (userNumber === randomNumber) {
				alert('Ти вгадав число!');
				break;
			}

			alert('Ти не вгадав число, спробуй ще...');

			countAttempts--;
		} while (countAttempts);
	},
};

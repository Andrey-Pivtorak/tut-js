/**
 * на вход ф-ция получет 2 числа n, maxAttempts
 * n - максимальное число, maxAttemps - максимальное кол-во попыток угадывания
 * ф-ция генерирует псевдослучайное счисло между 1 и n
 * далее у пользователя есть maxAttemps попыток это число угадать
 * ф-ция должна запрашивать у пользователя число, через ./components/promptModal
 * если пользователь угадал число - вернуть true, если все попытки использованы и число не угадано - false
 */

const asyncLoop = {
	async guessNumber(n, maxAttempts) {
		let randomNumber = Math.floor(Math.ceil(Math.random()) * n);
		console.log(randomNumber);
		let i = maxAttempts;
		while (i > 0) {
			const inputNumber = await prompt('Put your number, please!');
			if (+inputNumber === randomNumber) {
				return alert('You guessed the number!');
			}
			i--;
			alert(`False!!! You have ${i} attempts yet!`);
		}
	},
};

asyncLoop.guessNumber(3, 3);

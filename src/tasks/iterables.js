/**
 * на вход ф-ция получает 3 числа, from - начало интервала(входит в интервал, to - конец интервала, не входит в интервал
 * step - шаг, по-умолчанию = 1, необязательный параметр
 * ф-ция должна создать объект, сделать его итерируемым(iterable) и вернуть
 */
const createIterable = (from, to, step = 1) => {
	let current = from;

	return {
		[Symbol.iterator]() {
			return {
				next() {
					const value = current;
					current += step;

					return value > to
						? {
							done: true
						} : {
							done: false,
							value
						}

				}
			}
		}
	}


};

for (let num of createIterable(1, 5)) {
	console.log(num);
	console.log(typeof num);
}



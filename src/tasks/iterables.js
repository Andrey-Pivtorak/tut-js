/**
 * на вход ф-ция получает 3 числа, from - начало интервала(входит в интервал, to - конец интервала, не входит в интервал
 * step - шаг, по-умолчанию = 1, необязательный параметр
 * ф-ция должна создать объект, сделать его итерируемым(iterable) и вернуть
 */
const createIterable = (from, to, step = 1) => {
	const obj = {
		from,
		to,
		step,

		[Symbol.iterator] () {
			return {
				current: this.from - 1,
				last: this.to,
				step: this.step,
				next() {
					this.current += this.step;

					return {
						done: this.current >= this.last,
						value: this.current
					};
				}
			};
		}
	}

	return obj;
};

for (let num of createIterable(1, 5)) {
	console.log(num);
	console.log(typeof num);
}



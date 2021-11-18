const datesTask = {
    //вывести на консоль текущую дату в формате DD.MM.YYYY hh:mm:ss
	printCurrentDateAndTime() {
		const format = (element) => {
			return element < 10 ? `0${element}` : element;
		}

		const date = new Date();
		const dateArray = [date.getDate(), date.getMonth() + 1, date.getFullYear()]
			.map(d => format(d));
		const timeArray = [date.getHours(), date.getMinutes(), date.getSeconds()]
			.map(t => format(t));

		return dateArray.join('.') + ' ' + timeArray.join('.');
	},

   //на вход ф-ция получается объект Date. Вывести на консоль сколько времени прошло от даты в прошлом до сейчас
    //длительность надо вывести в формате '1 years 2 months 3 days 4 hours 5 minutes 6 seconds ago'.
    //если какая=то часть равна 0 то её не нужно выводить
    fromNow(d) {
		const currentDate = new Date();

		let years = currentDate.getFullYear() - d.getFullYear();

		let months = (currentDate.getMonth() + 1) - d.getMonth();
		if ((currentDate.getMonth() + 1) < (d.getMonth())) {
			years -= 1;
			months = currentDate.getMonth();
		}

		let days = currentDate.getDate() - d.getDate()
		if (currentDate.getDate() < d.getDate()) {
			months -= 1;
			days = currentDate.getDate() + (31 - d.getDate() + 1)
		}

		let hours = currentDate.getHours() - d.getHours();
		if (currentDate.getHours() < d.getHours()) {
			days -= 1;
			hours = currentDate.getHours() + (24 - d.getHours());
		}

		let minutes = currentDate.getMinutes() - d.getMinutes();
		if (currentDate.getMinutes() < d.getMinutes()) {
			hours -= 1;
			minutes = currentDate.getMinutes() + (60 - d.getMinutes());
		}

		let seconds = currentDate.getSeconds() - d.getSeconds();
		if (currentDate.getSeconds() < d.getSeconds()) {
			minutes -= 1;
			seconds = currentDate.getSeconds() + (60 - d.getSeconds());
		}

		function checkValue(value, name) {
			if (value > 0) {
				return `${value} ${name}`
			}
		}

		return [checkValue(years, 'years'), checkValue(months, 'months'),
				checkValue(days, 'days'), checkValue(hours, 'hours'),
				checkValue(minutes, 'minutes'),	checkValue(seconds, 'seconds'), 'ago']
				.join(' ');
	}

	// const oldDate = new Date(2020, 12, 13, 23, 41, 45);
	// console.log(fromNow(oldDate));

	// ===================================================================

	// function fromNow(d) {
	// 	const currentDate = new Date().getTime();
	// 	const oldDate = d.getTime();
	// 	const agoDate = currentDate - oldDate;
	// 	const daySize = 86400000;
	// 	const hourSize = 3600000;
	// 	const minuteSize = 60000;

	// 	const years = Math.floor(agoDate / (daySize * 365));

	// 	const months = Math.floor
	// 		((agoDate - (daySize * 365 * years)) / (daySize * 30));

	// 	const days = Math.floor
	// 		((agoDate - ((daySize * 365 * years)
	// 			+ (daySize * 30 * months))) / daySize);

	// 	const hours = Math.floor
	// 		((agoDate - ((daySize * 365 * years)
	// 			+ (daySize * 30 * months) + (daySize * days))) / hourSize);

	// 	const minutes = Math.floor
	// 		((agoDate - ((daySize * 365 * years)
	// 			+ (daySize * 30 * months) + (daySize * days)
	// 			+ (hourSize * hours))) / minuteSize);

	// 	const seconds = Math.floor
	// 		((agoDate - ((daySize * 365 * years)
	// 			+ (daySize * 30 * months) + (daySize * days)
	// 			+ (hourSize * hours) + (minuteSize * minutes))) / 1000);

	// 	function checkValue(value, name) {
	// 			if (value > 0) {
	// 				return `${value} ${name}`
	// 			}
	// 		}

	// 	return [checkValue(years, 'years'), checkValue(months, 'months'),
	// 			checkValue(days, 'days'), checkValue(hours, 'hours'),
	// 			checkValue(minutes, 'minutes'),	checkValue(seconds, 'seconds'), 'ago']
	// 			.join(' ');
	// }

	// const oldDate = new Date(2019, 10, 14, 23, 12, 45);
	// console.log(fromNow(oldDate));

};

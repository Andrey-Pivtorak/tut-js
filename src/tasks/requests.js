/*
 * используя браузерный XmlHttpRequest реализовать 2 ф-ции
 * */
const requests = {
	/*
	 * данная ф-ция должна выполнять GET запрос используя аргументы
	 * @param {string} url - адрес запроса
	 * @params {object} params - параметры запроса, это объект с параметрами, которые должны добавиться к url
	 * @params {object} options - опции для запроса, headers, timeout, sync, возможно что-то ещё добавим
	 * @param {function(error, response)} cb - callback который должен быть вызван после успешного выполнения запроса или ошибки
	 * если всё выполнилось хорошо, тогда надо вызвать cb(null, response) если была ошибка - cb(error)
	 * */
	httpGet(url, params, options, cb) {
		try {
			const xhr = new XMLHttpRequest();

			xhr.onload = () => {
				if (xhr.status >= 300) {
					const error = `Error! Status code: ${xhr.status}`;
					return cb(error);
				}

				const response = JSON.parse(xhr.responseText);
				cb(null, response);
			};

			xhr.onerror = (error) => {
				cb(error);
			};

			// const urlSend = new URL(url);
			// for (let paramName in params) {
			// 	urlSend.searchParams.set(
			// 		encodeURIComponent(paramName),
			// 		encodeURIComponent(params[paramName]),
			// 	);
			// }

			const urlSend = `${url}?${objectToQuery(params)}`;

			xhr.open('GET', urlSend, options.async);
			xhr.send();
		} catch (error) {
			cb(error);
		}
	},

	// const requestURL = 'https://jsonplaceholder.typicode.com/users';

	// const data = {
	// 	login: 'programmer',
	// 	password: 12345,
	// };

	// const valueOptions = {
	// 	method: 'GET',
	// 	async: true,
	// 	header: 'myRequest',
	// 	timeout: 5000,
	// };

	// function getParamsAsString(dataObj) {

	// first way ==========
	// const result = []
	// for (let key in dataObj) {
	// 	result.push(`${encodeURIComponent(key)}=${encodeURIComponent(dataArr[key])}`);
	// }

	// return result.join('&');

	// second way ==========
	// 	return Object.entries(dataObj)
	// 		.map(([name, value]) => {
	// 			return `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
	// 		})
	// 		.join('&');
	// }

	// function checkStatus(err, res) {
	// 	if (err) {
	// 		console.log(err);
	// 		return;
	// 	}

	// 	console.log(res);
	// }

	// httpGet(requestURL, data, valueOptions, checkStatus);

	/**
	 * смотреть описание httpGet
	 * метод будет делать почти то же самое только данные будут отправляться через POST
	 */
	httpPost(url, params, options, cb) {
		try {
			const xhr = new XMLHttpRequest();

			xhr.onload = () => {
				if (xhr.status >= 300) {
					const error = `Error! Status code: ${xhr.status}`;
					return cb(error);
				}

				const response = JSON.parse(xhr.responseText);
				cb(null, response);
			};
			xhr.onerror = (error) => {
				cb(error);
			};
			xhr.timeout = options.timeout;

			xhr.open('POST', url, options.async);

			if (options.headers) {
				Object.entries(options.headers).forEach(([key, value]) => {
					xhr.setRequestHeader(key, value);
				});
			}

			xhr.send(JSON.stringify(params));
		} catch (error) {
			cb(error);
		}
	},

	// const requestURL = 'https://jsonplaceholder.typicode.com/users';

	// const data = {
	// 	name: 'Ivan',
	// 	age: 30,
	// 	isMarried: true
	// };

	// const valueOptions = {
	// 	async: true,
	// 	headers: { 'Content-Type': 'application/json', 'x-auth': 'myRequestIsDone' },
	// 	timeout: 1000,
	// };

	// function checkStatus(err, res) {
	// 	if (err) {
	// 		console.log(err);
	// 		return;
	// 	}

	// 	console.log(res);
	// }

	// httpPost(requestURL, data, valueOptions, checkStatus);

	/**
	 * ф-ция на вход получает объект {key1: value1, key2: value2,.... } и возваращет строку в виде key1=value1&key2=value2....
	 */
	objectToQuery(obj) {
		return Object.entries(dataObj)
			.map(([name, value]) => {
				return `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
			})
			.join('&');
	},

	// const data = {
	// 	car: 'Audi',
	// 	model: 'A4',
	// 	year: '2020',
	// 	'price($)': 20000,
	// };

	// console.log(objectToQuery(data));

	/**
	 * ф-ция на вход получает строку в виде key1=value1&key2=value2.... и возваращет объект {key1: value1, key2: value2,.... }
	 */
	queryToObject(query) {
		const arrayElements = query.split('&').map((el) => el.split('='));

		return Object.fromEntries(arrayElements);
	},

	// const str = 'car=Audi&model=A4&year=2020&price($)=20000';

	// console.log(queryToObject(str));
};

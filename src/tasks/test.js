// ЧОРНОВИК, НЕ ПЕРЕВІРЯТИ
// const p = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		console.log('Preparing data...');
// 		const backendData = {
// 			server: 'aws',
// 			port: 2000,
// 			status: 'working',
// 		};
// 		resolve(backendData);
// 	}, 2000);
// });

// p.then((data) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			data.modified = true;
// 			resolve(data);
// 		}, 2000);
// 	});
// })
// 	.then((clientData) => {
// 		clientData.fromPromise = true;
// 		return clientData;
// 	})
// 	.then((data) => {
// 		console.log('Modified', data);
// 	})
// 	.catch((err) => console.error('Error: ', err))
// 	.finally(() => console.log('Finally...'));

// const sleep = ms => {
// 	return new Promise(resolve => {
// 		setTimeout(() => resolve(), ms)
// 	})
// }

// sleep(2000).then(() => console.log('After 2 seconds...'));
// sleep(3000).then(() => console.log('After 3 seconds...'));

// Promise.all([sleep(2000), sleep(5000)])
// 	.then(() => {
// 		console.log('All promises');
// 	});

// Promise.race([sleep(2000), sleep(5000)]).then(() => {
// 	console.log('Race promises');
// });

// function createPromise() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			reject('hello from promise');
// 		}, 2000);
// 	});
// }

// createPromise()
// 	.then((response) => {
// 		console.log(response);
// 		return response + '!';
// 	})
// 	.then(console.log)
// 	.catch(console.error)
// 	.finally(() => {
// 		console.log('operation complete');
// 	})

// Error example
// reject(new Error('ошибка!!!'));
// ...
// .catch ((err) => {
// 	console.log(err.toString());
// })

const requestURL = 'https://jsonplaceholder.typicode.com/users';

const request = {
	createRequest(url, params, options, cb) {
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

			if (options.timeout) {
				xhr.timeout = options.timeout;
			}

			if (options.method === 'GET') {
				const userParams = objectToQuery(params);
				const urlSend = `${url}?${userParams}`;
				xhr.open('GET', urlSend, options.async);
			} else {
				xhr.open('POST', url, options.async);
			}

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

	httpRequest(url, params, options) {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();

			xhr.onload = () => resolve(JSON.parse(xhr.responseText));
			xhr.onerror = () => reject(new Error('Error: ', xhr.statusText));

			if (options.timeout) {
				xhr.timeout = options.timeout;
			}

			if (options.method === 'GET') {
				const userParams = objectToQuery(params);
				const urlSend = `${url}?${userParams}`;
				xhr.open('GET', urlSend, options.async);
			} else {
				xhr.open('POST', url, options.async);
			}

			if (options.headers) {
				Object.entries(options.headers).forEach(([key, value]) => {
					xhr.setRequestHeader(key, value);
				});
			}

			xhr.send(JSON.stringify(params));
		});
	},
};

function objectToQuery(obj) {
	return Object.entries(obj)
		.map(([name, value]) => {
			return `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
		})
		.join('&');
}

function checkStatus(err, res) {
	if (err) {
		console.log(err);
		return;
	}

	console.log(res);
}

const dataGet = {
	login: 'programmer',
	password: 12345,
};

const dataPost = {
	name: 'Ivan',
	age: 30,
	isMarried: true,
};

const valueOptionsGet = {
	method: 'GET',
	async: true,
	headers: { 'Content-Type': 'application/json' },
	timeout: 5000,
};

const valueOptionsPost = {
	method: 'POST',
	async: true,
	headers: { 'Content-Type': 'application/json' },
	timeout: 5000,
};

// request.createRequest(requestURL, dataGet, valueOptionsGet, checkStatus);
// request.createRequest(requestURL, dataPost, valueOptionsPost, checkStatus);

// request.httpRequest(requestURL, dataGet, valueOptionsGet)
// 	.then((data) => {
// 		checkStatus(null, data);
// 	})
// 	.catch((err) => {
// 		console.log(err.toString());
// 	});

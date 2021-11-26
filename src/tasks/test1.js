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
}

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


request.createRequest(requestURL, dataGet, valueOptionsGet, checkStatus);
request.createRequest(requestURL, dataPost, valueOptionsPost, checkStatus);

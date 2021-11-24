function httpGet(url, params, options, cb) {
	try {
		const xhr = new XMLHttpRequest();

		xhr.onload = () => {
			if (xhr.status > 300) {
				const error = `Error! Status code: ${xhr.status}`;
				return cb(error);
			}

			const response = JSON.parse(xhr.responseText);
			cb(null, response);

			const list = document.querySelector('.out__users-list');
			response.forEach((user, i) => {
				list.innerHTML += `<li>${i + 1}.
						 ${user.name} <button class="comments">comments</button></li>`;

				for (let i = 0; i < response.length; i++) {
					const obj = response[i];
					for (const key in obj) {
						if (key === 'id') {
							let objPost = {};
							objPost.key = key;
							objPost.value = obj[key];
							console.log(objPost);

							document
								.querySelector('.comments')
								.addEventListener('click', function () {
									httpPost(
										postUrl,
										JSON.stringify(objPost),
										valueOptions,
										checkStatus,
									);
									const userPosts = document.querySelector(
										'.out__comments-list',
									);
									response.forEach((post) => {
										userPosts.innerHTML += `<li>${post.title}</li>`;
									});
								});
						}
					}
				}
			});
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
}

document.querySelector('.users-list').addEventListener('click', function () {
	httpGet(requestURL, data, valueOptions, checkStatus);
});

const requestURL = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts';

const data = {
	login: 'programmer',
	password: 12345,
};

const valueOptions = {
	method: 'GET',
	async: true,
	header: 'myRequest',
	timeout: 5000,
};

function objectToQuery(obj) {
	return Object.entries(obj)
		.map(([name, value]) => {
			return `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
		})
		.join('&');
}

function getParamsAsString(dataObj) {
	// const result = []
	// for (let key in dataObj) {
	// 	result.push(`${encodeURIComponent(key)}=${encodeURIComponent(dataArr[key])}`);
	// }

	// return result.join('&');

	return Object.entries(dataObj)
		.map(([name, value]) => {
			return `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
		})
		.join('&');
}

function checkStatus(err, res) {
	if (err) {
		console.log('Request is unsuccessful');
		return;
	}
	console.log(res);

	// document.querySelector('.users-list').addEventListener('click', function () {
	// 	const list = document.querySelector('.out__users-list');
	// 	res.forEach((user, i) => {
	// 		list.innerHTML += `<li>${i + 1}.
	// 		 ${user.name} <button class="comments">comments</button></li>`;
	// 	});
	// });
}

// httpGet(requestURL, data, valueOptions, checkStatus);

// ========================================================

function httpPost(url, params, options, cb) {
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
}

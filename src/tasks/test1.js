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


// request.createRequest(requestURL, dataGet, valueOptionsGet, checkStatus);
// request.createRequest(requestURL, dataPost, valueOptionsPost, checkStatus);
console.log();


// файл test.js
// window.addEventListener('DOMContentLoaded', () => {
// 	main();
// });

// function main() {
// 	request.createRequest(
// 		requestURL,
// 		dataGetMethod,
// 		valueOptions,
// 		function (err, res) {
// 			if (err) {
// 				return console.error(err);
// 			}
// 			checkStatus(res);
// 		},
// 	);
// }

// // добавив
// const usersArray = [{}, {}];

// function reply_click(event) {
// 	const button = event.target;
// 	const userId = button.dataset.id;

// 	request.createRequest(
// 		`https://jsonplaceholder.typicode.com/users/${userId}/posts`,
// 		dataGetMethod,
// 		valueOptions,
// 		function (err, posts) {
// 			document.querySelector('.out__comments-list').innerHTML = posts
// 				.map(
// 					(p, i) =>
// 						`<p style="color: white; background: black;">${i + 1}. ${
// 							p.title
// 						}</p>`,
// 				)
// 				.join('');

// 			// добавив
// 			if (users.length) {
// 				next(users.shift());
// 			}
// 		},
// 	);
// }

// function objectToQuery(obj) {
// 	return Object.entries(obj)
// 		.map(([name, value]) => {
// 			return `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
// 		})
// 		.join('&');
// }

// function checkStatus(res) {
// 	const list = document.querySelector('.out__users-list');
// 	res.forEach((user, i) => {
// 		list.innerHTML += `<li>${i + 1}.
// 						 ${user.name} <button data-id=${
// 			user.id
// 		} onClick="reply_click(event)" class="comments">comments</button></li>`;
// 	});
// }

// const dataGetMethod = {
// 	login: 'programmer',
// 	password: 12345,
// };

// const valueOptions = {
// 	method: 'GET',
// 	async: true,
// 	headers: { 'Content-Type': 'application/json' },
// 	timeout: 5000,
// };

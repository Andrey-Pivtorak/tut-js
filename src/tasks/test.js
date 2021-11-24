'use strict';

const requestURL = 'https://jsonplaceholder.typicode.com/users';
// const postUrl = 'https://jsonplaceholder.typicode.com/users/1/posts';

function httpGet(url, params, options, cb) {
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

		// const urlSend = `${url}?${objectToQuery(params)}`;

		xhr.open('GET', url, options.async);
		xhr.send();
	} catch (error) {
		cb(error);
	}
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

const valueOptions = {
	async: true,
	headers: { 'Content-Type': 'application/json' },
	timeout: 5000,
};

function getParamsAsString(dataObj) {
	// first way ==========
	// const result = []
	// for (let key in dataObj) {
	// 	result.push(`${encodeURIComponent(key)}=${encodeURIComponent(dataArr[key])}`);
	// }

	// return result.join('&');

	// second way ==========
	return Object.entries(dataObj)
		.map(([name, value]) => {
			return `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
		})
		.join('&');
}

// ===============================================================
// ===============================================================

function checkStatus(err, res) {
	if (err) {
		console.log(err);
		return;
	}

	console.log(res);

	const list = document.querySelector('.out__users-list');
	res.forEach((user, i) => {
		list.innerHTML += `<li>${i + 1}.
						 ${user.name} <button id=${i + 1} onClick="reply_click(this.id)" class="comments">comments</button></li>`;

// 	// let elem = document.querySelector('[data-id]');
// 	// console.log(elem.dataset.id);


	});



// httpGet(
// 			`https://jsonplaceholder.typicode.com/users/${id}/posts`,
// 			dataGet,
// 			valueOptions,
// 			checkStatus,
// 		);

}

function reply_click(clicked_id) {
	// alert(clicked_id);
	document.querySelector('.out__comments-list').innerHTML += httpGet(
		`https://jsonplaceholder.typicode.com/users/${clicked_id}/posts`,
		dataGet,
		valueOptions,
		checkStatus,
	);
}


document.querySelector('.users-list').addEventListener('click', function () {
	httpGet(requestURL, dataGet, valueOptions, checkStatus);
});


// ===============================================================
// ===============================================================

// ====================== POST =========================

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

// httpPost(postUrl, dataPost, valueOptions, checkStatus);

function objectToQuery(obj) {
	return Object.entries(obj)
		.map(([name, value]) => {
			return `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
		})
		.join('&');
}

function queryToObject(query) {
	const arrayElements = query.split('&').map((el) => el.split('='));

	return Object.fromEntries(arrayElements);
}

// =========================================================

function showData() {}

showData();

// =========================================================

// httpGet(requestURL, dataGet, valueOptions, result);

// document.querySelector('.users-list').addEventListener('click', function () {
// 	function checkStatus(err, res) {
// 		if (err) {
// 			console.log(err);
// 			return;
// 		}

// 		console.log(res);
// 		const list = document.querySelector('.out__users-list');
// 		res.forEach((user, i) => {
// 			list.innerHTML += `<li>${i + 1}.
// 						 ${user.name} <button class="comments">comments</button></li>`;
// 		});
// 	}
// });

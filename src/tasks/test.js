// const requestURL = 'https://jsonplaceholder.typicode.com/users';

window.addEventListener('DOMContentLoaded', () => {
	main();
});

function main() {
	// requests.httpGet(requestURL, dataGet, valueOptions, function (err, res)
	request.createRequest(
		requestURL,
		dataGetMethod,
		valueOptions,
		function (err, res) {
			if (err) {
				return console.error(err);
			}
			checkStatus(res);
		},
	);
}

function reply_click(event) {
	const button = event.target;
	const userId = button.dataset.id;

	request.createRequest(
		`https://jsonplaceholder.typicode.com/users/${userId}/posts`,
		dataGetMethod,
		valueOptions,
		function (err, posts) {
			document.querySelector('.out__comments-list').innerHTML = posts
				.map(
					(p, i) =>
						`<p style="color: white; background: black;">${i + 1}. ${
							p.title
						}</p>`,
				)
				.join('');
		},
	);
}

function objectToQuery(obj) {
	return Object.entries(obj)
		.map(([name, value]) => {
			return `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
		})
		.join('&');
}

function checkStatus(res) {
	const list = document.querySelector('.out__users-list');
	res.forEach((user, i) => {
		list.innerHTML += `<li>${i + 1}.
						 ${user.name} <button data-id=${
			user.id
		} onClick="reply_click(event)" class="comments">comments</button></li>`;
	});
}

const dataGetMethod = {
	login: 'programmer',
	password: 12345,
};

const valueOptions = {
	method: 'GET',
	async: true,
	headers: { 'Content-Type': 'application/json' },
	timeout: 5000,
};

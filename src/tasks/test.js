window.addEventListener('DOMContentLoaded', () => {
	main();
});

function main() {
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

function reply_server(usersArray, usersIdArray) {
	
	const users = usersArray;
	const usersId = usersIdArray;

	if (users.length) {
		const userName = document.createElement('div');
		userName.className = 'figure';
		userName.innerHTML = users[0];
		document.body.append(userName);

		let userPosts = document.createElement('div');
		userPosts.className = 'figure2';

		request.createRequest(
			`https://jsonplaceholder.typicode.com/users/${usersId[0]}/posts`,
			dataGetMethod,
			valueOptions,
			function (err, posts) {
				userPosts.innerHTML = posts
					.map(
						(p, i) =>
							`<p style="color: white; background: black;">${i + 1}. ${
								p.title
							}</p>`,
					)
					.join('');
			},
		);
		document.body.append(userPosts);

		next(users, usersId);
	}
}

function next(usersArray, usersIdArray) {
	reply_server(usersArray.splice(1), usersIdArray.splice(1));
}

function objectToQuery(obj) {
	return Object.entries(obj)
		.map(([name, value]) => {
			return `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
		})
		.join('&');
}

function checkStatus(res) {

	const users = [];
	const usersId = [];

	res.forEach((user) => {
		users.push(user.name);
		usersId.push(user.id);
	});

	reply_server(users, usersId);
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

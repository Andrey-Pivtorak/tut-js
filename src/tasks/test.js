window.addEventListener('DOMContentLoaded', () => {
	main();
});

function main() {
	// request.createRequest(
	// 	requestURL,
	// 	dataGetMethod,
	// 	valueOptions,
	// 	function (err, res) {
	// 		if (err) {
	// 			return console.error(err);
	// 		}
	// 		checkStatus(res);
	// 	},
	// );

	request
		.httpRequest(requestURL, dataGetMethod, valueOptions)
		.then((data) => {
			reply_server(data);
		})
		.catch((err) => {
			console.log(err.toString());
		});
}

function reply_server(users) {
	// const user = users.shift();

	// if (!user) {
	// 	return;
	// }

	users.map((user) => {
		request
			.httpRequest(
				`https://jsonplaceholder.typicode.com/users/${user.id}/posts`,
				dataGetMethod,
				valueOptions,
			)
			.then((posts) => {
				const userNameElem = functionsLibrary.createHtmlElement({
					tag: 'div',
					classNames: ['figure'],
					attributes: {
						style:
							'width: 300px;	height: 20px;	border: 1px solid #000;background: red; color: white;	margin: 0px 0px 5px 0px;',
					},
					transferData: user.name,
				});
				document.body.append(userNameElem);

				const userPosts = functionsLibrary.createHtmlElement({
					tag: 'div',
					classNames: ['figure2'],
					attributes: {
						style:
							'width: 800px; height: 100px; border: 1px solid #000; background: green; color: white; margin: 0px 0px 20px 0px;	overflow: auto;',
					},
					transferData: ``,
					children: [
						{
							tag: 'p',
							classNames: [],
							attributes: {
								style: 'color: white; background: black; hover: blue;',
							},
							transferData: posts
								.map((p, i) => `${i + 1}. ${p.title}<br>`)
								.join(''),
						},
						{
							tag: 'div',
							classNames: [],
							attributes: {
								style:
									'height: 20px; margin-bottom: 5px; border: 2px solid red; background: blue; color: white; text-align: center; cursor: pointer;',
							},
							transferData: `This is a second childElement!`,
						},
					],
				});
				document.body.append(userPosts);
			})
			.catch((err) => {
				console.log(err.toString());
			});
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

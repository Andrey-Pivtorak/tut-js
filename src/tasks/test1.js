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
		.then((data) => {reply_server(data);})
		.catch((err) => {console.log(err.toString());});
}

function reply_server(users) {
	const user = users.shift();

	if (!user) {
		return;
	}

	request.createRequest(
		`https://jsonplaceholder.typicode.com/users/${user.id}/posts`,
		dataGetMethod,
		valueOptions,
		function (err, posts) {
			const userNameElem = createHtmlElement({
				tag: 'div',
				classNames: ['figure'],
				attributes: {
					style:
						'width: 300px;	height: 20px;	border: 1px solid #000;background: red; color: white;	margin: 0px 0px 5px 0px;',
				},
				transferData: user.name,
			});
			document.body.append(userNameElem);

			const userPosts = createHtmlElement({
				tag: 'div',
				classNames: ['figure2'],
				attributes: {
					style:
						'width: 800px; height: 100px; border: 1px solid #000; background: green; color: white; margin: 0px 0px 20px 0px;	overflow: auto;',
				},
				transferData: ``,
				children: {
					tag: 'p',
					classNames: [],
					attributes: { style: 'color: white; background: black;' },
					transferData: posts
						.map((p, i) => `${i + 1}. ${p.title}<br>`)
						.join(''),
				},
			});
			document.body.append(userPosts);
		},
	);

	next(users);
}

function createHtmlElement(elemProperty) {
	const elem = document.createElement(elemProperty.tag);
	const classElem = elemProperty.classNames;
	classElem.forEach((cls) => {
		elem.classList.add(cls);
	});
	elem.innerHTML = elemProperty.transferData;
	setAttributes(elem, elemProperty.attributes);

	const childElemList = elemProperty.children;
	if (childElemList && childElemList.tag !== '') {
		const childElem = createHtmlElement(childElemList);
		elem.appendChild(childElem);
	}

	return elem;
}

function setAttributes(element, attributes) {
	for (let key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
}

function next(usersArray) {
	reply_server(usersArray);
}

function objectToQuery(obj) {
	return Object.entries(obj)
		.map(([name, value]) => {
			return `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
		})
		.join('&');
}

function checkStatus(res) {
	reply_server(res);
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

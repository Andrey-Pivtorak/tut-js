const requestURL = 'https://jsonplaceholder.typicode.com/users';

// const xhr = new XMLHttpRequest();
// xhr.open('GET', requestURL);

// xhr.responseType = 'json';

// xhr.onload = () => {
// 	if (xhr.status >= 400) {
// 		console.error(xhr.response);
// 	} else {
// 		console.log(xhr.response);
// 	}
// }

// xhr.onerror = () => {
// 	console.log(xhr.response);
// }

// xhr.send();

// ================================================================
// const requestURL = 'https://jsonplaceholder.typicode.com/users';

// function sendRequest(method, url, body = null) {
// 	return new Promise((resolve, reject) => {
// 		const xhr = new XMLHttpRequest();
// 		xhr.open(method, url);

// 		xhr.responseType = 'json';
// 		xhr.setRequestHeader('Content-Type', 'application/json');

// 		xhr.onload = () => {
// 			if (xhr.status >= 400) {
// 				reject(xhr.response);
// 			} else {
// 				resolve(xhr.response);
// 			}
// 		}

// 		xhr.onerror = () => {
// 			reject(xhr.response);
// 		}

// 		xhr.send(JSON.stringify(body));
// 	})
// }

// // sendRequest('GET', requestURL)
// // 	.then(data => console.log(data))
// // 	.catch(err => console.log(err));

// const body = {
// 	name: 'petro',
// 	age: 40
// }

// sendRequest('POST', requestURL, body)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err));


// let xhttp = new XMLHttpRequest();
// xhttp.open('POST', requestURL, true);

// xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
// xhttp.send('name = semen');



function ajax(url, method, functionName, dataArray) {
	let xhttp = new XMLHttpRequest();
	xhttp.open(method, url, true);
	xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhttp.send(dataArray);

	xhttp.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			functionName(this);
		}
	}
}

function requestData(dataArr) {
	let out = '';
	for (let key in dataArr) {
		out += `${key}=${dataArr[key]}&`;
	}

	return out;
}

function result(data) {
	console.log(data);
}

let obj = {
	'name': 'petro',
	'age': 53
}

ajax(requestURL, 'post', result, requestData(obj));

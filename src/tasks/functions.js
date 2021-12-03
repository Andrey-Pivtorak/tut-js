const functionsLibrary = {
	objectToQuery(obj) {
		return Object.entries(obj)
			.map(([name, value]) => {
				return `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
			})
			.join('&');
	},

	checkStatus(err, res) {
		if (err) {
			console.log(err);
			return;
		}
		console.log(res);
	},

	createHtmlElement(elemProperty) {
		const elem = document.createElement(elemProperty.tag);
		const classElem = elemProperty.classNames;
		classElem.forEach((cls) => {
			elem.classList.add(cls);
		});
		elem.innerHTML = elemProperty.transferData;
		functionsLibrary.setAttributes(elem, elemProperty.attributes);

		const childElemList = elemProperty.children;
		if (childElemList) {
			childElemList.forEach((element) => {
				if (element.tag) {
					elem.appendChild(functionsLibrary.createHtmlElement(element));
				}
			});
		}

		return elem;
	},

	setAttributes(element, attributes) {
		for (let key in attributes) {
			element.setAttribute(key, attributes[key]);
		}
	},
};

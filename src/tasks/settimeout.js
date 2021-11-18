for (var i = 0; i < 5; i += 1) {
	// console.log(i); - друкує 0, 1, 2, 3, 4
	const id = setTimeout(function () {
		///
		console.log(i);
		///
	}, 0);

	clearTimeout(id);
	console.log(i);
}

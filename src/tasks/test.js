//на вход всегда приходит просто объект в котором ключи и значения - строки
    //вернуть новый объект, что-бы в нём ключи и значения были поменяны местами
    //swapKeysWithValues({a: 'aa', b: 'bb'}) => { aa: 'a', bb: 'b' };
function swapKeysWithValues(obj) {
	// return Object.fromEntries(
	// 	Object.entries(obj)
	// 		.map(([key, value]) => [value, key]));

	const newObj = {};

	for (const key in obj) {
		const value = obj[key];
		newObj[value] = key;
	}
	
	return newObj;

}

console.log(swapKeysWithValues({a: 'aa', b: 'bb'}));

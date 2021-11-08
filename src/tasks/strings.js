const stringTasks = {
	/**
	 * вернуть строку, где все слова из исходной строки будут начинаться с заглавных букв
	 */
	capitalizeWords(srcStr) {
		const array = srcStr
			.replace(/ +/g, ' ').trim()
			.split(' ').map(item => item.split(''));

		array.map(item => item[0] = item[0].toUpperCase());

		return array.map(item => item.join('')).join(' ');
	},

	/**
	 *
	 * на вход подается строка со словами разделенными пробелами
	 * вернуть строку в camelCase
	 * 'just a string' => 'justAString'
	 */
	toCamelCase(srcStr) {
		const array = srcStr
			.replace(/ +/g, ' ').trim()
			.split(' ').map(item => item.split(''));

		const [firstWord, ...rest] = array;
		rest.map(item => item[0] = item[0].toUpperCase());

		const completedRest = rest.map(item => item.join('')).join('');

		return `${firstWord.join('')}${completedRest}`;
	},

	/**
	 * на вход подается строка в camelCase
	 * вернуть строку в snake_case
	 * 'camelCaseString' => 'camel_case_string'
	 */
	camelToSnake(srcStr) {
		const array = srcStr
			.trim()
			.split('');

		for (let i = 0; i < array.length; i++) {
			if (array[i] === array[i].toUpperCase()) {
				array[i] = '_' + array[i].toLowerCase();
			}
		}

		return array.join('');
	},

	/**
	   * 
	   * вернуть строку, в которой все слова будут начинаться с большой буквы
	   * считать что на вход подается строка, в которой все слова разделены одним пробелом
	   * capitalize('this string will be capitalized') => 'This String Will Be Capitalized'
	   */
	capitalizeWords: function (str) {
		const array = str
			.trim()
			.split(' ').map(item => item.split(''));

		array.map(item => item[0] = item[0].toUpperCase());

		return array.map(item => item.join('')).join(' ');
	},

	/*на входе строка @srcString, в которой слова разделены пробелами, и ch - символ, из которого будем "рисовать" рамку
	  вывести строку на консоль, так что-бы каждое слово было в новой строке а весь вывод был в текстовой псевдорамке
	  например
	  printInFrame('This string will be printed in frame', '*');
	  ***********
	  * This    *
	  * string  *
	  * will    *
	  * be      *
	  * printed *
	  * in      *
	  * frame   *
	  * *********
	   */
	printInFrame: function (srcString, ch) {
		const array = srcString
			.replace(/ +/g, ' ').trim()
			.split(' ').map(item => item.split(' '));
		const maxLengthOfElements = Math.max(...array.map(item => item[0].length));

		const border = `${ch.repeat(maxLengthOfElements + 4)}`;

		const mainText = array.map(item => `${ch}` + ' ' + (item + ' '.repeat(maxLengthOfElements - item[0].length)) + ' ' + `${ch}`).join('\n');

		return border + '\n' + mainText + '\n' + border;
	},

	/**
	 * вернуть строку, в которой все символы будут идти в обратном порядке
	 * reverseString('abc') => 'cba';
	 */
	reverseString(str) {
		const newStr = str
			.replace(/ +/g, ' ')
			.trim();

		let result = '';
		for (let i = newStr.length - 1; i >= 0; i--) {
			result += newStr[i];
		}

		return result;
	},

	/**
	 * вернуть число, в котором цифры будут идти в обратном порядке
	 * обратить внимание и правильно обработать случай когда число со знаком -
	 */
	/*
	reverseNumber(2) => 2
	reverseNumber(12345) => 54321
	reverseNumber(543210) => 12345
	reverseNumber(1020) => 201
	reverseNumber(-345) => -543
	 */
	reverseNumber: function (n) {
		const str = n.toString();

		let newStr = '';
		for (let i = str.length - 1; i >= 0; i--) {
			if (str[i] === '-') {
				continue;
			}
			newStr += str[i];
		}

		return Number(n < 0 ? newStr = '-' + newStr : newStr);
	},
	/**
	 * нужно посчитать кол-во каждого символа в строке
	 * считать 'a' и 'A' разными символами
	 * вывести результат в любом удобном виде
	 */
	charCount: function (str) {
		const array = str.split('');
		const collection = {};

		for (let i = 0; i < array.length; i++) {
			if (collection[array[i]] === undefined) {
				collection[array[i]] = 1;
			} else {
				collection[array[i]]++;
			}
		}

		return collection;
	},

	/**
	 * 
	 * проверить являются ли строки анаграмами и вернуть true если да, иначе - вернуть false
	 * пробелы игнорировать
	 * примеры
	 * areAnagrams('anagram', 'nag a ram') => true;
	 * areAnagrams('Eleven plus two', 'Twelve plus one'); => true;
	 * areAnagrams('O, Draconian devil', 'Leonardo da Vinci') => true;
	 */
	areAnagrams: function (str1, str2) {
		function transform(str) {
			return str.replace(/\W+/g, '').toLowerCase().split('').sort().join('');
		}

		const result1 = transform(str1);
		const result2 = transform(str2);

		return (result1 === result2) ? true : false;

	// 	function transformStr(str) {
	// 		let correctedStr = '';
	// 		const lowerStr = str.toLowerCase();

	// 		for (let i = 0; i < lowerStr.length; i++) {
	// 			if (lowerStr.charAt(i) >= 'a' && lowerStr.charAt(i) <= 'z') {
	// 				correctedStr += lowerStr[i];
	// 			}
	// 		}

	// 		return correctedStr;
	// 	}

	// 	const result1 = transformStr(str1).split('').sort().join('');
	// 	const result2 = transformStr(str2).split('').sort().join('');

	// 	return (result1 === result2) ? true : false;
	},

	/**
	 * 
	 * проверить, является ли строка палиндромом
	 * палиндром - это такая строка, которая одинаково читается в обе стороны
	 * примеры:
	 * isPalindrome('a') => true;
	 * isPalindrome('abc') => false;
	 * isPalindrome('aabbaa') => true;
	 */
	isPalindrome: function (str) {
		const outStr = str.trim();
		const middleStr = Math.floor(outStr.length / 2);

		for (let i = 0; i < middleStr; i++) {
			if (outStr[i] === outStr[outStr.length - 1 - i]) {
				return true;
			}
		}

		return false;

		// const outStr = str.trim();

		// return outStr === outStr.split('').reverse().join('');
	},
};

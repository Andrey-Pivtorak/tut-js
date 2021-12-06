const stringTasks = {
	/**
	 * вернуть строку, где все слова из исходной строки будут начинаться с заглавных букв
	 */
	capitalizeWords(srcStr) {
		return srcStr
			.trim()
			.split(/\s/g).map(item => {
				return item[0].toLowerCase() + item[0].slice(1);
			}).join(' ');
	},

	/**
	 *
	 * на вход подается строка со словами разделенными пробелами
	 * вернуть строку в camelCase
	 * 'just a string' => 'justAString'
	 */
	toCamelCase(srcStr) {
		return srcStr
			.trim()
			.split(/\s/g).map((item, i) => {
				if (i === 0) {
					return item;
				}
				return item[0].toLowerCase() + item[0].slice(1);
			}).join('');
	},

	/**
	 * на вход подается строка в camelCase
	 * вернуть строку в snake_case
	 * 'camelCaseString' => 'camel_case_string'
	 */
	camelToSnake(srcStr) {
		const arrayStr = srcStr
			.trim()
			.split('');

		for (let i = 0; i < arrayStr.length; i++) {
			if (arrayStr[i] === arrayStr[i].toUpperCase()) {
				arrayStr[i] = '_' + arrayStr[i].toLowerCase();
			}
		}

		return arrayStr.join('');
	},

	/**
	   *
	   * вернуть строку, в которой все слова будут начинаться с большой буквы
	   * считать что на вход подается строка, в которой все слова разделены одним пробелом
	   * capitalize('this string will be capitalized') => 'This String Will Be Capitalized'
	   */
	capitalizeWords: function (str) {
		return str
			.trim()
			.split(/\s/g).map(item => {
				return item[0].toLowerCase() + item[0].slice(1);
			}).join(' ');
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
		const words = srcString
			.replace(/ +/g, ' ').trim()
			.split(' ');

		const maxLengthOfWord = Math.max(...words.map(w => w.length));

		const border = ch.repeat(maxLengthOfWord + 4);

		const mainText = words.map(word => {
			const emptySpace = ' '.repeat(maxLengthOfWord - word.length);
			return `${ch} ${word}${emptySpace} ${ch}`;
		});

		return [border, ...mainText, border].join('\n');
	},

	/**
	 * вернуть строку, в которой все символы будут идти в обратном порядке
	 * reverseString('abc') => 'cba';
	 */
	reverseString(str) {

		const result = [];
		for (let i = str.length - 1; i >= 0; i--) {
			result.push(str[i]);
		}

		return result.join('');
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

		// return Number(n < 0 ? '-' + newStr : newStr);
		return (n < 0 ? -1 : 1) * Number(newStr);
	},

	/**
	 * нужно посчитать кол-во каждого символа в строке
	 * считать 'a' и 'A' разными символами
	 * вывести результат в любом удобном виде
	 */
	charCount: function (str) {
		const collection = {};

		for (let i = 0; i < str.length; i++) {
			if (collection[str[i]] === undefined) {
				collection[str[i]] = 1;
			} else {
				collection[str[i]]++;
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

		return result1 === result2;

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
		for (let i = 0, j = str.length; i < j; i++, j--) {
			if (str[i] !== str[j]) {
				return false;
			}
		}

		return true;


		// let i = 0;
		// let j = str.length - 1;

		// while (i < j) {
		// 	if (str[i] !== str[j]) {
		// 		return false;
		// 	}

		// 	i++;
		// 	j--;
		// }

		// return true;

		// const outStr = str.trim();
		// const middleStr = Math.floor(outStr.length / 2);

		// for (let i = 0; i < middleStr; i++) {
		// 	if (outStr[i] === outStr[outStr.length - 1 - i]) {
		// 		return true;
		// 	}
		// }

		// return false;

		// const outStr = str.trim();

		// return outStr === outStr.split('').reverse().join('');
	},
};

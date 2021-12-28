/* function toReadable(number) {
//   const numbToArr = number.toString().split('');

//   const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
//     'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
//     'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
//   const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty',
//     'seventy', 'eighty', 'ninety'];

//   function getUnits(num) {
//     return units[num];
//   }

//   function getDozens(num) {
//     if (+numbToArr[1] === 0) {
//       return dozens[(num / 10)];
//     }
//     return `${dozens[Math.floor(num / 10)]} ${units[numbToArr[1]]}`;
//   }

//   function getHundreds(num) {
//     if (num % 100 === 0) {
//       return `${units[(num / 100)]} hundred`;
//     }
//     if (Number(numbToArr[1]) === 0) {
//       return `${units[Math.floor(num / 100)]} hundred ${units[numbToArr[2]]}`;
//     }
//     if (Number(numbToArr[1] + numbToArr[2]) >= 10 && Number(numbToArr[1] + numbToArr[2]) < 20) {
//       return `${units[Math.floor(num / 100)]} hundred ${units[Number(numbToArr[1] + numbToArr[2])]}`;
//     }
//     numbToArr.shift();
//     return `${units[Math.floor(num / 100)]} hundred ${getDozens(Number(numbToArr[0] + numbToArr[1]))}`;
//   }

//   if (number > 0 && number < 20) {
//     return getUnits(number);
//   }
//   if (number >= 20 && number <= 99) {
//     return getDozens(number);
//   }
//   if (number >= 100 && number <= 999) {
//     return getHundreds(number);
//   }

//   return 'zero';
// }

console.log(toReadable(975)); */

// ===================================



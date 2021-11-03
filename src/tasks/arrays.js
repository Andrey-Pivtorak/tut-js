const arraysTask = {
    /**
   * 
   * @param array - массив, где могут быть не только числа
   * нужно посчитать и вернуть сумму всех чисел
   */
    totalSum: function (array) {
		console.log('Hello Vova!');
    },

    /**
     * на вход ф-ция получает 2 массива
     * нужно вернуть новый массив, в котором будут скомбинированы элементы из 2 массивов таким образом:
     * сначала будут идти первые элементы, потом вторые и тд, если в одном из массивов элементов больше не осталось то просто заполнять элементами из другого массива
     * пример: combine([1, 2, 3], ['a', 'b', 'c', 'd']) => [1, 'a', 2, 'b', 3, 'c', 'd']
     */
    combine: function (array1, array2) {

    },
    //вернуть массив, состоящий из идущих подряд чисел, начиная со start, и до end включительно
    //range(0, 3) => [0, 1, 2, 3]
    range(start, end) {

    },
    //ф-ция должна вернуть последние n элементов массива
    //если n > array.length то вернуть копию массива
    lastN(array, n) {

    },
    //ф-ция должна вернуть новый массив, в котором будут все элементы исоходного массива, но без дубликатов
    //unique([1, 2, 3, 3]) => [1, 2, 3]
    unique(array) {

    },
    /**
     * разбить исходный массив на несколько подмассивов длиной chunkSize
     * chunk([1, 2, 3, 4, 5], 3) => [[1, 2, 3], [4, 5]]
     */
    chunk: function (arr, chunkSize) {

    },
    //вернуть новый массив из элементов, для которых ф-ция cb вернёт true
    //аналог родного array.filter
    filter(array, cb) {

    },
    //эта ф-ция должна работать как array.forEach, но если cb возвращает false то обход цикла должен прикратиться
    breakableForEach(array, cb) {

    },
    //ф-ция должна вернуть true если в обеих массивах одинаковые элементы, иначе false
    //areArraysEqual([1, 2, 3], [2, 3, 1]) => true
    //areArraysEqual([1, 2, 2], [1, 2]) => false
    areArraysEqual(arr1, arr2) {

    },

    /**
     * На вход подается массив чисел, 2 числа min/max и необязательный булевый параметр strict, который по-умолчанию будет true
     * может быть быть так что min > max, те сначала надо убедиться и обеспечить min>=max
     * параметр strict надо помнимать так: если true то сравнивать числа через ><, иначе сравнивать через >=, <=
     * ф-ция должна вернуть новый массив в котором все элементы будут находиться между min и max
     */
    selectIntervalFromArray(array, min, max, strict=true) {

    }
};

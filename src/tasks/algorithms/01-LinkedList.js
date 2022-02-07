/**
 * Имплементировать связный список
 * optional - значит, что параметр может быть, а может и не быть передан
 * индексы начинаются с 0
 */

class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
    /**
     * values(optional) - массив значений, которыми нужно заполнить созданный список
     *
     */
    constructor(values) {
        this.head = null;
        this.length = 0;
    }

    /**
     * метод добавляет значение в конец списка
     * @param value
     */
    add(value) {
      if (this.length === 0) {
        this.head = new Node(value);
      } else {
        let current = this.head;

        while (current.next) {
          current = current.next;
        }

        current.next = new Node(value);
      }
      this.length++;
    }

    /**
     * метод вставляет значение в заданную позицию списка
     * если i < 0 или i > size  - бросить ошибку
     * @param i
     * @param value
     */
  insert(i, value) {
    if (i < 0 || this.length < i) {
      throw 'Wrong position. Game over!';
    }

    let node = new Node(value);

    if (i === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let prev = null;
      let index = 0;

      while (index < i) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = node;
      node.next = current;
    }
    this.length++;
  }

    /**
     * метод возвращает значение с заданным индексом
     * если i < 0 или i > size  - бросить ошибку
     * @param i
     */
    get(i) {
      if (this.length === 0) {
        throw 'Error! The list is empty!';
      }

      let current = this.head;
      let index = 0;

      while (index < i) {
        current = current.next;
        index++;
      }

      return current.value;
    }

    /**
     * метод удаляет значение в заданной позиции и возвращает его
     * если i < 0 или i > size  - бросить ошибку
     * @param i
     */
    removeAt(i) {
      if (i < 0 || this.length < i) {
        throw 'Wrong position. Game over!';
      }

      let current = this.head;

      if (i === 0) {
        this.head = current.next;
      } else {
        let prev = null;
        let index = 0;

        while (index < i) {
          prev = current;
          current = current.next;
          index++;
        }

        prev.next = current.next;
      }

      this.length--;
      return current.value;
    }

    /**
     * возвращает самое первое значение в списке
     */
    getFirst() {
      return this.get(0);
    }

    /**
     * возвращает самое последнее значение в списке
     */
    getLast() {
      return this.get(this.length - 1);
    }

    /**
     * удаляет значение в начале списка и возвращает его
     * если список пустой - бросить ошибку
     */
    removeFirst() {
      if (this.length === 0) {
        throw 'Error! The list is empty!';
      }
     return this.removeAt(0);
    }

    /**
     * удаляет значение в конце списка и возвращает его
     * если список пустой - бросить ошибку
     */
    removeLast() {
      if (this.length === 0) {
        throw 'Error! The list is empty!';
      }
      return this.removeAt(this.length - 1);
    }

    /**
     * возвращает размер списка
     */
    size() {
      return this.length;
    }
}



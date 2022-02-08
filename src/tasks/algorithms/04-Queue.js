
class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
    /**
     * предусмотреть возвожность создание стэка со значениями, если values передали
     * использовать внутри DoubleLinkedList
     * @param values
     */
    constructor(values) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    /**
     * возвращает значение с вершины с стэка
     * элемент при этом не удаляется
     */
    enqueue() {
      return this.head.value;
    }

    /**
     * добавляет элемент в стэк
     * @param value
     */
    dequeue(value) {
      const node = new Node(value);

      if (this.head) {
        this.tail.next = node;
        this.tail = node;
        node.prev = this.tail;
      } else {
        this.head = node;
        this.tail = node;
        node.prev = null;
      }
      this.length++;
    }

    /**
     * возвращает размер стэка
     */
    size() {
      return this.length;
    }
}


class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Stack {
    /**
     * предусмотреть возможность создание стэка со значениями, если values передали
     * внутри использовать DoubleLinkedList
     * @param values
     */
  constructor (values) {
      this.head = null;
      this.length = 0;
    }

    /**
     * возвращает значение с вершины с стэка
     * элемент при этом не удаляется
     */
    peak() {
      return this.head.value;
    }

    /**
     * добавляет элемент в стэк
     * @param value
     */
    push(value) {
      const node = new Node(value);

      if (this.head) {
        node.next = this.head;
        this.head = node;
        node.prev = null;
        node.next.prev = node;
      } else {
        this.head = node;
        node.prev = null;
      }
      this.length++;
    }

    /**
     * удаляет элемент из стэка и возвращает значение
     * если стэк пустой - бросает ошибку
     */
    pop() {
      if (this.length === 0) {
        throw 'Error! The list is empty!';
      }

      const current = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      this.head.next.prev = this.head;
      this.length--;

      return current.value;
    }

    /**
     * возвращает размер стэка
     */
    size() {
      return this.length;
    }
}


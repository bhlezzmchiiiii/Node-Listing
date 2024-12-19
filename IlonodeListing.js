class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
    this.print();
  }

  print() {
    let current = this.head;
    let output = "";
    while (current) {
      output += current.value + " ";
      current = current.next;
    }
    console.log("Linked List: " + output);
  }
}


// Example usage:
const list = new LinkedList();
list.append("Data Structures - Array");
list.append("Variable Type - Integer");
list.append("Sorting Algorithm - Bubble Sort");

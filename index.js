console.log("hello there");

class AnimalStack {
  constructor() {
    this.stack = [];
  }
  get length() {
    return this.stack.length;
  }
  push(item) {
    return this.stack.push(item);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.length - 1];
    // return this.stack.at(-1);
  }
}

const stack = new AnimalStack();
stack.push("fox");
stack.push("goose");
stack.push("lizard");
console.log(stack.pop()); // 'lizard'
console.log(stack.peek()); // 'goose'
console.log(stack.pop()); // 'goose'
stack.push("llama");
console.log(stack.pop()); // 'llama'
console.log(stack.peek()); // 'fox'
console.log(stack.pop()); // 'fox'
console.log(stack.pop()); // null

class AnimalQueue {
  #list = [];
  #index = 0;

  enqueue(item) {
    this.#list.push(item);
  }
  dequeue() {
    // return this.#list.shift();
    const item = this.#list[this.#index];
    this.#index++;
    return item;
  }
  hasNext() {
    return !!(this.#list.length - this.#index);
  }
}

const queue = new AnimalQueue();
queue.enqueue("fox");
queue.enqueue("goose");
queue.enqueue("lizard");
console.log(queue.dequeue()); // 'fox'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'goose'
queue.enqueue("llama");
console.log(queue.dequeue()); // 'lizard'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'llama'
console.log(queue.hasNext()); // false
console.log(queue.dequeue()); // null

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;

    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        const node = new Node(data)
        if (this.first === null) {
            this.first = node;
        }
        if (this.last) {
        node.next = this.last;
        this.last.prev = node
        }
        this.last = node;
    }

    dequeue() {
        if (this.first === null) {
            return;
        }
        const node = this.first;
        this.first = node.prev;
        if (node === this.last) {
            this.last = null;
        }
        return node.data;
    }

    peek() {
        if (this.last === null) {
            return;
        }
        return this.last.data;

    }

    display() {
        if (this.first === null) {
            throw new Error("Can't display empty queue");
    }
        let current = this.first;
        while (current) {
            console.log(current.data)
            current = current.prev;
        }
}
}

module.exports = Queue;
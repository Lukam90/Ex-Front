class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        return this.items.pop()
    }

    size() {
        return this.items.length
    }

    peek() {
        return this.items[this.size() - 1]
    }

    isEmpty() {
        return this.size() === 0
    }

    print() {
        console.log(this.items.toString())
    }
}

const stack = new Stack()

console.log(stack.isEmpty())

stack.push(20)
stack.push(10)
stack.push(30)

console.log(stack.size())

stack.print()

console.log(stack.pop())
console.log(stack.peek())

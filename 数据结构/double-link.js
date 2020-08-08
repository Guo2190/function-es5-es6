function Node(element) {
    this.element = element
    this.next = null
    this.prev = null
}

function DoubleLink() {
    this.head = null
    this._length = 0
    this.tail = null

    this.add = (element) => {
        let node = new Node(element)
        if (this._length) {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        } else {
            this.head = node
            this.tail = node
        }
        this._length++
    }
    this.find = (element) => {
        let curent = this.head
        while (curent.next !== null) {
            if (curent.element === element) {
                break
            }
            curent = curent.next
        }
        return curent
    }
    this.insert = (curent, element) => {
        let node = new Node(element)
        let cur = this.find(curent)
        console.log(cur)
        node.next = cur.next
        node.prev = cur
        cur.next.prev = node
        cur.next = node
    }
    this.display = () => {
        let cur = this.head
        console.log(cur.element, '->')

        while (!(cur.next == null)) {
            console.log(cur.next.element, '->')
            cur = cur.next
        }
    }
    this.remove = (element) => {
        let cur = this.find(element)
        let prevNode = cur.prev
        let nextNode = cur.next
        prevNode.next = nextNode
        nextNode.prev = prevNode
    }
    this.reverseDisplay = () => {
        let lastNode = this.tail
        console.log(lastNode.element)
        while (lastNode.prev !== null) {
            console.log(lastNode.prev.element)
            lastNode = lastNode.prev
        }
    }
}
let a = new DoubleLink()
a.add('A')
a.add('B')
a.add('C')
a.add('D')
a.add('F')
a.insert('D', 'E')

a.display()
a.remove('B')
console.log('----')
a.display()

console.log('----')
a.reverseDisplay()
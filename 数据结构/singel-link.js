function Node(element) {
    this.element = element
    this.next = null
}

function List() {
    this.head = new Node('head')
    this.find = find
    this.add = add
    this.findPrev = findPrev
    this.insert = insert
        // this.remove = remove
    this.display = display
}

function findPrev(item) {
    let curNode = this.head
    while (curNode.next !== null && (curNode.next.element !== item)) {
        curNode = curNode.next
    }
    return curNode

}

function add(item) {
    let node = new Node(item)
    let head = this.head
    while (head.next !== null) {
        head = head.next
        if (head.next == null) {
            break
        }
    }
    head.next = node
    node.next = null

}

function find(item) {
    let curNode = this.head
    while (curNode.element !== item) {
        curNode = curNode.next
    }
    return curNode
}

function insert(element, item) {
    let node = new Node(element)
    let curNode = this.find(item)
    node.next = curNode.next
    curNode.next = node
}

function display() {
    let node = this.head
    while (node.next !== null) {
        console.log(node.next.element)
        node = node.next

    }
}
let singelList = new List()
singelList.insert('apple', 'head')
singelList.insert('pinple', 'apple')
singelList.add('A')
singelList.add('C')
singelList.add('D')
singelList.insert('B', 'A')
console.log(singelList.display())
console.log('Prev', singelList.findPrev('B'))
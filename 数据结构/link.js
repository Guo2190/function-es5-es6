// 单向链表
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkList {
    constructor(val = null) {
        this.head = new Node('head')
    }
    insert(newElement, item) {// 插入节点
        var newNode = new Node( newElement );
        var currNode = this.find( item );
        newNode.next = currNode.next;
        currNode.next = newNode;
    } 
    find(item) { 
        let currNode = this.head
        while(currNode.element != item) {
            currNode = currNode.next 
        }
        return currNode
    }
    display() {
        var currNode = this.head;
        while ( !(currNode.next == null) ){
            console.log( currNode.next.element );
            currNode = currNode.next;
        }
    }
}
let a = new LinkList('head')
a.insert('Apple', 'head')
a.insert('Banana', 'Apple')
a.insert('Pear', 'Banana')
console.log(a.display())
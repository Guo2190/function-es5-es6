/*
 * @Author: your name
 * @Date: 2020-08-08 13:45:01
 * @LastEditTime: 2020-08-08 14:13:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /study/数据结构/stack.js
 */
class Stack {
    constructor() {
        this.items = []
    }
    isEmpty() {
        return this.items.length === 0
    }
    size() {
        return this.items.length
    }
    clear() {
        this.items = []
    }
    push(value) {
        return this.items.push(value)
    }
    pop() {
        return this.items.pop()
    }
    peek() {
        let lenght = this.items.length - 1
        return this.items[lenght - 1]
    }
}

function toDouble(item) {
    let stack = new Stack()
    let n
    while (item > 0) {
        yushu = item % 2
        stack.push(yushu)
        item = Math.floor(item / 2)
    }
    console.log(stack.items.reverse().join(''))
}
toDouble(222)
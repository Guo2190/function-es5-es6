/*
 * @Author: your name
 * @Date: 2020-08-08 14:43:59
 * @LastEditTime: 2020-08-08 15:18:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /study/数据结构/queue.js
 */
class Queue {
    constructor() {
            this.items = []
        }
        // 入列
    enqueue(value) {
            this.items.push(value)
        }
        // 出列
    outqueue() {
        return this.items.shift()
    }
    font() {
        return this.items[0]
    }
    size() {
        return this.items.length
    }
    isEmpty() {
        return this.items.length === 0
    }
}

function chuanhua(name, number) {
    let queue = new Queue()
    queue.items = name
    while (queue.size() > 1) {
        console.log(1212)
        for (let i = 0; i < number; i++) {

            if (i == 2) {
                let a = queue.outqueue()
                console.log('taotai', a)
            } else {
                queue.enqueue(queue.outqueue())
            }
        }

    }
    let a = queue.outqueue()
    console.log('剩余', a)
}

//chuanhua(['a', 'b', 'c', 'd', 'e', 'f'], 3)
class QueueItem {
    constructor(element, priority) {
        this.element = element
        this.priority = priority
    }
}

class priorityQueue {
    constructor() {
        this.items = []
    }
    enqueue(element, priority) {
        let queueItem = new QueueItem(element, priority)

    }
}
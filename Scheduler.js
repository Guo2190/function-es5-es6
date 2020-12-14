/*
 * @Author: your name
 * @Date: 2020-09-25 16:01:58
 * @LastEditTime: 2020-09-25 16:55:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /study/Scheduler.js
 */
class Scheduler {
    constructor() {
        this.list = []
        this.maxCount = 2
        this.index = 0
    }
    add(promiseCreator) {
        this.list.push(promiseCreator)
    }
    taskStart() {
        for (var i = 0; i < this.maxCount; i++) {

            this.requst.bind(this)()

        }


    }
    requst()

    {
        if (!this.list || !this.list.length || this.index >= this.maxCount) {
            return
        } else {
            this.index++
                this.list.shift()().then(() => {
                    this.index--
                        this.requst()
                })
        }

    }


}

function timeOut(time) {
    return new Promise(resolve => {

        setTimeout(resolve, time)
    })
}
let scheduler = new Scheduler()

function addTask(time, order) {
    scheduler.add(() => timeOut(time).then(() => { console.log(order) }))
}
addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)
scheduler.taskStart()
/*
 * @Author: your name
 * @Date: 2020-03-25 13:33:24
 * @LastEditTime: 2020-08-26 13:54:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /study/es6函数实现/promise.js
 */

// 定义Promise的三种状态常量
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
const isFuction = v => typeof v === 'function'

class MyPromise {
    constructor(handle) {
        if (!isFuction(handle)) {
            throw new Error('handle must be function')
        }
        this._value = undefined
        this._status = PENDING
        this._fuilfilledQuenes = []
        this._rejectedQuenes = []
        try {
            handle(this._resolve.bind(this), this._reject.bind(this))
        } catch (error) {
            this._reject(error)
        }
    }
    _resolve(val) {
        console.log(this)
        if (this._status !== PENDING) return
        const run = () => {
            let cb
            this._value = val
            this._status = FULFILLED
            while (cb = this._fuilfilledQuenes.shift()) {
                cb(val)
            }
        }
        setTimeout(() => run(), 0)
    }
    _reject(err) {
        if (this._status !== PENDING) return
        const run = () => {
            let cb
            this._value = err
            this._status = REJECTED
            while (cb = this._rejectedQuenes.shift()) {
                cb(err)
            }
        }
        setTimeout(() => run(), 0)
    }
    then(onFulfiled, onRejected) {
        const { _status, _value } = this
        return new MyPromise((onFulfillenNext, onRejectenNext) => {
            let fulfiled = (val) => {
                try {
                    if (!isFuction(onFulfiled)) {
                        onFulfillenNext(val)
                    } else {
                        // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调

                        let res = onFulfiled(val)
                        if (res instanceof MyPromise) {
                            res.then((onFulfillenNext, onRejectenNext))
                        } else {
                            //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
                            onFulfillenNext(res)
                        }
                    }
                } catch (error) {
                    onRejectenNext(error)
                }
            }
            let rejected = (val) => {
                try {
                    if (!isFuction(onRejected)) {
                        onRejectenNext(val)
                    } else {
                        let res = onRejected(val)
                        if (res instanceof MyPromise) {
                            res.then(onFulfillenNext, onRejectenNext)
                        } else {
                            onRejectenNext(res)
                        }
                    }
                } catch (error) {
                    onRejectenNext(error)
                }
            }
            switch (_status) {
                case PENDING:
                    this._fuilfilledQuenes.push(fulfiled)
                    this._rejectedQuenes.push(rejected)
                    break;
                case REJECTED:
                    rejected(_value)
                    break;
                case FULFILLED:
                    fulfiled(_value)
                    break;

                default:
                    break;
            }
        })

    }
    catch (onRejected) {
        return this.then(undefined, onRejected)
    }
    static reselove(value) {
        if (value instanceof MyPromise) return value
        return new MyPromise((resolve) => resolve(value))
    }
    static reject(err) {
        if (err instanceof MyPromise) return err
        return new MyPromise((resolve, reject) => reject(value))
    }
    all(list) {
        return new MyPromise((resolve, reject) => {
            let values = []
            let count = 0
            for (let [i, p] of list.entries()) {
                this.reselove(p).then(res => {
                    values[i] = res
                    count++
                    if (count === list.length) resolve(values)
                }, err => {
                    reject(err)
                })
            }
        })
    }
}

// let a = new MyPromise((reselove, reject) => {
//     setTimeout(() => {
//         reselove('5s')
//     }, 2000)
// }).then(res => {
//     console.log(res)

//     return 11
// }).then(res => {
//     console.log(res)
// })
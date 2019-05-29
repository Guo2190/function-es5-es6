

// const State = {
//     pending: Symbol('pendding'),
//     resolved: Symbol('resolved'),
//     rejected: Symbol('rejected')
// }
// class Promises {
//     constructor(executor) {
//         this._state = State.pending
//         this._value = undefined
//         this._callbacks = []
//         if (typeof executor === 'function') {
//             let resolve = value => {
//                 this._transition(State.resolved, value);
//             }
//             let reject = value => {
//                 this._transition(State.rejected, value);
//             }
//             executor(resolve, reject);
//         } else {
//             throw new Error('Promises must accept a function as a parameter')
//         }
//     }
//     // 状态转移
//     _transition(state, value) {        
//         if (this._state === State.pending) {    
//             this._state = state;               
//             this._value = value;
//             this._callbacks.forEach(callback => callback());
//         } 
//     }
//     then(onFulfilled, onRejected) {
//         const { _state, _value } = this
//         switch (_state) {
//             // 当状态为pending时，将then方法回调函数加入执行队列等待执行
//             case State.pending:
//               this._fulfilledQueues.push(onFulfilled)
//               this._rejectedQueues.push(onRejected)
//               break
//             // 当状态已经改变时，立即执行对应的回调函数
//             case State.resolved:
//               onFulfilled(_value)
//               break
//             case State.rejected:
//               onRejected(_value)
//               break
//         }
//         return new Promises((onFulfilledNext, onRejectedNext) => {
//         })    
//     }
//     static resolve() {
//         console.log(11212)
//     }
//     static reject() {
//         console.log(11212)
//     }
// }
function allSettled(promises) {
    let wrappedPromises = promises.map(p => Promise.resolve(p)
        .then(
            val => ({ state: 'fulfilled', value: val }),
            err => ({ state: 'rejected', reason: err })));
    return Promise.all(wrappedPromises);
}
function b() {
    setTimeout(()=> {
        console.log(1000)
    },1000)
}
function c() {
    setTimeout(()=> {
        console.log(1000)
    },2000)
}
let a = [b, c] 
let d = allSettled(a)
console.log(d.then(v => v).then(v => v))
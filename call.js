/**
 * 自定义实现call函数  
 * 指定函数内部的指向this 并给一个或多个参数
 * @param {call2} obj 
 */
function call1(obj) {
    console.log(this)
    let ctx = obj || window
    ctx.fn = this
    let args = []
    for(let i = 1; i < arguments.length; i++) {
        args.push('arguments['+ i +']')
    }
    eval('ctx.fn('+ args +')')
    delete ctx.fn
}
Function.prototype.call1 = call1
let obj = {a: 1}
function a(b) {
    console.log(this.a + b)
}
a.call1(obj, 11)

function call2(obj, ...rest){
    let ctx = obj || window
    let fn = Symbol('fn')
    ctx[fn] = this
    ctx[fn](...rest);
    delete ctx[fn]
}
Function.prototype.call2 = call2

console.log(a.call2(obj, 22))
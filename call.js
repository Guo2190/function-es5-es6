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
    console.log(this)
    console.log(this.a + b)
}
//a.call1(obj, 11)

function call2(ctx, ...rest){
    ctx || (ctx = window)
    let fn = Symbol('fn')
    ctx[fn] = this
    let res = ctx[fn](...rest);
    delete ctx[fn]
    return res
    
}
Function.prototype.call2 = call2
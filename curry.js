let slice = [].slice
function sub_curry(fn){
    let args = slice.call(arguments,1)
    return function(){
        let arr = args.concat(slice.call(arguments))
        return fn.apply(this, arr)
    }
}
function sCurry(fn, length){
    length = length || fn.length
    return function(){
        let args = [fn].concat(slice.call(arguments))
        if(arguments.length<length){
            return sCurry(sub_curry.apply(this, args), length-arguments.length)
        }else {
            return fn.apply(this,arguments)
        }
    }
}

const curry1 = fn => judge = (...args) => fn.length === args.length ? fn(...args) : arg => judge(...args, arg)

function add(a, b,c,d) {
    return a + b+c+d;
}

let f = sCurry(add)
//console.log(f())
console.log('f-->',f(1,3)(121)(1))
const curry1 = fn => judge = (...args) => fn.length === args.length? fn(...args) : (arg) => judge(...args,arg)
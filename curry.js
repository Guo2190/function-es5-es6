let slice = [].slice
function sub_curry(fn){
    
    let args = slice.call(arguments,1)
    return function(){
        let arg = args.concat(slice.call(arguments))
        return fn.apply(this, arg)
    }
}
function sCurry(fn, length){
    length = length || fn.length;

    var slice = Array.prototype.slice;

    return function() {
        if (arguments.length < length) {

            var combined = [fn].concat(slice.call(arguments));
            return sCurry(sub_curry.apply(this, combined), length - arguments.length);
        } else {
            return fn.apply(this, arguments);
        }
    };
}

const curry1 = fn => judge = (...args) => fn.length === args.length ? fn(...args) : arg => judge(...args, arg)

function add(a, b,c,d) {
    return a + b+c+d;
}

let f = sCurry(add)
//console.log(f())
console.log('f-->',f(1,3)(121)(1))

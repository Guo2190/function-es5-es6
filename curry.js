function curry(fn) {
    let args = [].slice.call(arguments, 1)
    return function () {
        let arg = args.concat([].slice.call(arguments))
        return fn.apply(this, arg)
    }
}

let add = function(a, b) {
    return a+b
}
function curry(fn, args) {
    var length = fn.length;

    args = args || [];

    return function() {

        var _args = args.slice(0),

            arg, i;

        for (i = 0; i < arguments.length; i++) {

            arg = arguments[i];

            _args.push(arg);

        }
        if (_args.length < length) {
            return curry.call(this, fn, _args);
        }
        else {
            return fn.apply(this, _args);
        }
    }
}



let currys = fn => 
        judge = (...args) => 
            args.length === fn.length ?
                fn(...args)
                : arg => judge(...args, arg)


let curryss = (fn) =>
        judge = (...args) =>
        args.length === fn.length ?
            fn(...args)
            : (arg) => judge(...args, arg)
let c = currys(add)
let adds = function(a, b, c, d) {
    return a+b+c+d
}
let f = curryss(adds)
console.log('f-->',f(1,3)(121)(1))

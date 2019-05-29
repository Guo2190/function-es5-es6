function add(...args) { // 更简洁的add 累加方法
    let fn = function(...args_fn) {
        return add.apply(null, args.concat(args_fn))
    }
    fn.valueOf = function () {
        return args.reduce((a, b) => a + b)
    }
    return fn
}
//sconsole.log( + add(1, 2)(1)(3)(1,2,3))

function sum(a) {
    let s = a
    function b(d) {
        s += d
        return sum(s)
    }
    b.toString = function() {
        return s
    }
    return b
}
console.log(+ sum(1)(2)(2))
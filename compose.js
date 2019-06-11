/**
 * 函数组合
 */
let a = function (x) {
    return x / 2
}
let b = function(b) {
    return b + 13
}
let c = function(h) {
    return h+10
}
let d = function(h) {
    return h+10
}

 var compose = function(f, g, c) {
     return function(x) {
         return f(g(c(x)))
     }
 }
 let k = compose(a, b,c)
console.log(k(22))


 let composes = function() {
    let args = [].slice.call(arguments)
    let start = args.length - 1
    return function () {
        let i = start
        let results = args[start].apply(this, arguments)
        while(i--) {
            results = args[i].call(this, results)
        }
        return results
    }
 }

 let Es6Compose = (...fn) => {
     //console.log(fn)
    return (arg) => {
        return fn.reduceRight((compose, f) => {
            console.log(`${f.name}(${compose})`)
            return f(compose)
        }, arg)
    }
 }
 const composesss = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
a(b())
 a(b(c(11)))
 let h = composes(a, b)
 console.log('composes-->',h(90))

 let es = Es6Compose(a, b, c)
 console.log('es6compose--->', es(10))
 let ess = composesss(a,b,c,d)
 console.log('composesss-->', ess(10))
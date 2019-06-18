/**
 * 函数组合
 */
let a = function (x) {
    console.log('a')
    return x / 2
}
let b = function(b) {
    console.log('b')

    return b + 13
}
let c = function(h) {
    console.log('c')

    return h+10
}
let d = function(h) {
    console.log('d')

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
 }                  // a,b,c,d
 const composesss = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))
 //console.log('oo-->',ooo(10))
 let h = composes(a, b)
 console.log('composes-->',h(90))

 let es = Es6Compose(a, b, c)
 console.log('es6compose--->', es(10))
  let ess = composesss(a,b,c,d)
  console.log('composesss-->', ess(10))
let l = function(...fn) {
    return fn.reduce(function(f,g) {
        return function hhh(...args) {
            return f(g(...args))
        }
    })
}
let esss = l(a,b,c,d)
//console.log('esss->', esss(111))
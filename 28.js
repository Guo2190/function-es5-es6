/**
 * 判断对象的数据类型
 * @param {} type 
 */
let isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)
let isArray = isType('Array')
let isSymbol = isType('Symbol')
/**
 * ES5 实现Map方法
 * map方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回。
 */
function selfMap(fn, ctx){
    let arr = Array.prototype.slice.call(this)
    let mapArr = []
    for(let i = 0; i < arr.length; i++) {
        if(!arr.hasOwnProperty(i)) continue
        mapArr.push(fn.call(ctx, arr[i], i, this))
    }
    return mapArr
}
 Array.prototype.selfMap = selfMap
 let a = [1,,,,,2]
 let l = ['a', 'b', 'c', 'd']
 let b = a.selfMap(function(ele, i, arr){
    return ele + 1
 })

/**
 * 使用reduce实现Map方法
 * map方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回。
 */

function selfMap2(fn, ctx) {
    let arr = Array.prototype.slice.call(this)
    return arr.reduce((sum, ele, index, arr) => {
        return [...sum, fn.call(ctx, ele, index, this)]
    }, [])
}

Array.prototype.selfMap2 = selfMap2
let a1 = [1,2]
let l1 = ['a', 'b', 'c', 'd']
let b1 = a1.selfMap2(function(ele, i, arr){
   return this[ele]
}, l1)

//console.log('b1', b1)

/**
 * 使用ES5实现filter方法
 * filter方法用于过滤数组成员，满足条件的成员组成一个新数组返回。
 */

 function filter1(fn, ctx) {
    let arr = Array.prototype.slice.call(this)
    let filArr = []
    for(let i = 0; i < arr.length; i++) {
        if(!arr.hasOwnProperty(i)) continue
        fn.call(ctx, arr[i], i, arr) && filArr.push(arr[i])
    }
    return filArr
 }
 /**
 * 使用reduce实现filter方法
 * filter方法用于过滤数组成员，满足条件的成员组成一个新数组返回。
 */
function filter2(fn, ctx) {
    let arr = Array.prototype.slice.call(this)
    return arr.reduce(function(sum, ele, index, arr) {
        //console.log(sum)
        return fn.call(ctx,  ele, index, arr) ? [...sum, ele] : [...sum]
    }, [])
 }

 let o = [1,2,3,4,5]
 Array.prototype.filter1 = filter1
 Array.prototype.filter2 = filter2
 let pp = o.filter2(function(ele)  {
     return ele > this.max
 }, {max: 3})

 /**
 * 使用ES5实现reduce方法
 *  reduce方法依次处理数组的每个成员
 */

 function reduce1(fn, initvalue) {
    let arr = Array.prototype.slice.call(this)
    let startIndex = 0
    let res 
    if (initvalue === undefined) {
        for(let i = 0; i < arr.length; i++) {
            if(!arr.hasOwnProperty(i)) continue
            startIndex = i
            res = arr[i]
            break
        }
    } else {
        res = initvalue
    }
    for(let i = ++startIndex || 0; i< arr.length; i++) {
        if(!arr.hasOwnProperty(i))continue
        res = fn.call(null, res, arr[i], i, arr)
    }
    return res
 }
 Array.prototype.reduce1 = reduce1
 let jj = [1,2,3].reduce1((res, ele, i, arr)=>{
     return res+ele
 })
 console.log(jj)

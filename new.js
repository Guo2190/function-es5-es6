function MyNew() {
    let constructor = [].shift.call(arguments, 1)
    let obj = Object.create(constructor.prototype) // 创造一个实例 已括号内为原型
    let ret = constructor.apply(obj, [].slice.call(arguments)) // 将构造函数的this 指向obj
    return (typeof ret === 'object' && ret !== null) ? ret : obj
    // notice 如果构造函数内部有return语句，而且return后面跟着一个对象，
    // new命令会返回return语句指定的对象；否则，就会不管return语句，返回this对象。
}

function P(k) {
    console.log(k)
    this.a = '11'
    return 'sssss'
}

let a = MyNew(P,'kkkk')
console.log(a.__proto__.ass = 'ssss')
console.log(P.prototype)
// 1new  开辟一个新对象
// 2 将新对象的原型指向构造函数的原型
// 3 将新对象的值赋值给构造函数内部的this
// 4 开始执行函数内部的代码
// notice 如果构造函数内部有return语句，而且return后面跟着一个对象，
// new命令会返回return语句指定的对象；否则，就会不管return语句，返回this对象。

function myNew () {
    let constructor = [].shift.call(arguments, 1)
    let obj = Object.create(constructor.prototype)
    let ret = constructor.apply(obj, [].slice.call(arguments))
    return (typeof ret !== 'object' && ret !== null) ? ret : obj
}
function ObjectFactory(){
 
    var obj = {},

    Constructor = Array.prototype.shift.call( arguments );

    obj.__proto__ =  typeof Constructor.prototype === 'number'  ? Object.prototype :  Constructor.prototype;

    var ret = Constructor.apply( obj, arguments );

    return typeof ret === 'object' ? ret : obj;

}
// 1寄生组合继承
function SuperType(x, y){
    this.x = x
    this.y = y
}
SuperType.prototype.say = function() {
    console.log(this.x + this.y)
}

function SubType(x,y,z) {
    SuperType.call(this, x, y)
    this.z = z
}
inheritAttrs(SubType, SuperType)
SubType.prototype.h = function() {
    console.log('z')
}
function inheritAttrs(sub, sup) {
    let prototype = Object(sup.prototype)
    prototype.consturctor = sub
    sub.prototype = prototype
}
let a = new SubType(1,2,3)
//console.log(a.say())
//console.log(a.h())
// 2原型继承
// 原型链继承多个实例的引用类型属性指向相同，存在篡改的可能
// 不能传递参数
// function Parent() {
//     this.a = 1
//     this.b = 1
//     this.share = [1,2,3]
// }
// Parent.prototype.cll = 'c'

// function Child () {
//     this.z = 'z'
// }
// Child.prototype  = new Parent()

// //let c = new Child()
// let k = new Child()
// c.share.push(4)
// //console.log(c.share)
// console.log(k.share)

//console.dir(c instanceof Child)
//console.dir(c instanceof Parent)
//console.dir(c instanceof Object)
// Call继承 借用构造函数继承
// 缺陷：
// 只能继承父类的实例属性和方法，不能继承原型属性/方法
// 无法实现复用，每个子类都有父类实例函数的副本，影响性能
function Parent() {
	this.x = 100;
	this.y = 199;
}
Parent.prototype.fn = function() {
    console.log(111)
}
Parent.prototype.fns = 'fns'
 
function Child() {
	this.d = 100;
    Parent.call(this); //构造函数中的this就是当前实例
    
}

console.log('fn-->', p.fns)



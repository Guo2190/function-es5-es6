// 借用构造函数继承
// 核心: 借用父类构造函数增强子类实例 等于复制父类实例属性给子类
// 优点：实例之间独立
//      创造实例 可以向父类传参
//      实例之间不共享父类构造函数的引用属性
// 缺点： 
//       父类的方法不能复用 于方法在父构造函数中定义，导致方法不能复用(因为每次创建子类实例都要创建一遍方法)。比如say方法。(方法应该要复用、共享)
//       子类实例 继承不了父类原型上的属性  （因为没用到原型）
function Parent(){
  this.names = ['a','b']
  this.arr = ['1','2']
}
function Child(){
  Parent.call(this)
}

let a = new Child()
a.names.push('da')
let b = new Child()
console.log(a.names)
console.log(b.names)
// 原型链继承 

/**
 *  核心:  将父类实例作为子类原型
 *  优点： 共享父类原型的属性及方法
 *  缺点： 不能向父类传递参数
 *        子类实例共享了父类构造函数的引用属性 比如arr 属性  
 * 
 */
function Parent() {
  this.name = '父亲'; // 实例基本属性 (该属性，强调私有，不共享)
  this.arr = [1]; // (该属性，强调私有)
}
Parent.prototype.say = function() { // -- 将需要复用、共享的方法定义在父类原型上 
  console.log('hello')
}
function Child(like) {
  this.like = like;
}
Child.prototype = new Parent() // 核心

let boy1 = new Child()
let boy2 = new Child()

// 优点：共享了父类构造函数的say方法
console.log(boy1.say(), boy2.say(), boy1.say === boy2.say); // hello , hello , true

// 缺点1：不能传参数
// 缺点2：
console.log(boy1.name, boy2.name, boy1.name===boy2.name); // 父亲，父亲，true

boy1.arr.push(2); // 修改了boy1的arr属性，boy2的arr属性，也会变化，因为两个实例的原型上(Child.prototype)有了父类构造函数的实例属性arr；所以只要修改了boy1.arr,boy2.arr的属性也会变化。  ----  原型上的arr属性是共享的。
console.log(boy2.arr); // [1,2]

//注意：修改boy1的name属性，是不会影响到boy2.name。因为name是基本属性，不是引用属性。

// 组合继承
/**
 * 核心：通过调用父类构造函数 继承父类属性并保留传参的优点 并用父类实例作为子类原型 实现共享方法
 *  
 * 优点：保留构造函数的有点 调用父类可以传参
 *      保留原型链继承的优点 方法定义在父类原型上 子类可以共享
 *      不共享父类的构造函数的引用属性
 * 缺点：调用了2次构造函数  会生成多一分父类属性
 * 
 * 
 * 
 */
// function Parent (name) {
//   this.name = name;
//   this.colors = ['red', 'blue', 'green'];
// }

// Parent.prototype.getName = function () {
//   console.log('12')
//   console.log(this.name)
// }

// function Child (name, age) {

//   Parent.call(this, name);
  
//   this.age = age;

// }

/**
 * bind函数 方法创建一个新的函数，在调用时设置this关键字为提供的值。并在调用新函数时，将给定参数列表作为原函数的参数序列的前若干项。
 * 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
 * @param {*} ctx 
 */

function bind1 (context) {
    let self = this
    let args = [].slice.call(arguments, 1)
    let FNop = function(){}
    let Fun = function () {
        return self.apply(this instanceof FNop ? this : context, args.concat([].slice.call(arguments)))
    }
    console.log(this)
    if(self.prototype) {
        FNop.prototype = self.prototype
    }
    Fun.prototype = new FNop() // 1{} 2 {}.__proto__  3{}赋值给构造函数的this 4执行函数内部的代码
    return Fun
}

 Function.prototype.bind1 = bind1

 var value = 2;

 var foo = {
     value: 1
 };
 
 function bar(name, age) {
     this.habit = 'shopping';
     console.log('value-->',this.value);
     console.log(name);
     console.log(age);
 }
 
 bar.prototype.friend = 'kevin';
 
 var bindFoo = bar.bind1(foo, 'daisy');
 bindFoo.prototype.hh = 'hh'
 console.log('hh--->', bar.prototype)
 var obj =   new bindFoo('18');
 // undefined
 // daisy
 // 18
 console.log(obj.habit);
 console.log(obj.friend);
 // shopping
 // kevin

 // 特殊案例调用形式
 // 对象的方法简写模式  方法没有prototype  
 // 普通写法是有prototype的
//  var o = {
//     val: 123,
//     getValue() {
//       return this.val;
//     },
//     f:function() {

//     }
//   };
//   var b = {
//     val: 456,
//   };
//   var getValue = o.getValue;
//   var myBind = getValue.bind1(b);
//   console.log(myBind());
//   console.log('o.getValue',o.getValue.prototype)
//   console.log('o.f',o.f.prototype)
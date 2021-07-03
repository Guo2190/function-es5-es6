/**
 * bind函数 方法创建一个新的函数，在调用时设置this关键字为提供的值context。并在调用新函数时，将给定参数列表作为原函数的参数序列的前若干项。
 * 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
 * @param {*} ctx 
 */

function bind1 (context) {
    let self = this
    let args = [].slice.call(arguments, 1)
    let FNop = function(){}
    let Fun = function () {
        // 如果使用new  this 指向 FNop实例  为true    
        // 如果作为普通函数使用 this指向window  此时结果为false  将绑定函数this绑定到context
        return self.apply(this instanceof FNop ? this : context, args.concat([].slice.call(arguments)))
    }
    console.log(this)
    if(self.prototype) { // 当调用着没有原型时  构造函数不继承调用着原型
        FNop.prototype = self.prototype
    }
    Fun.prototype = new FNop() // 1{} 2 {}.__proto__  3{}赋值给构造函数的this 4执行函数内部的代码
    return Fun
}
/**
 * bind函数 创建一个新的函数   调用新函数时this会绑定到 
 * 
 * 
 * 
 */
 Function.prototype.bind1 = bind1


 





var o = {
    val: 123,
    getValue() {
      return this.val;
    }
  };
  var b = {
    val: 456,
  };
  var val = 466
  var getValue = o.getValue;
  var myBind = getValue._bind(b);
  console.log(myBind());

  
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
        return self.apply(this instanceof Fun ? this : context, args.concat([].slice.call(arguments)))
    }
    console.log(this)
    if(self.prototype) {
        FNop.prototype = self.prototype
    }
    Fun.prototype = new FNop()
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
 
 var obj =   new bindFoo('18');
 // undefined
 // daisy
 // 18
 console.log(obj.habit);
 console.log(obj.friend);
 // shopping
 // kevin
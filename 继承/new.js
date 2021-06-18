// 模拟new对象实现过程 
function _new(){
  let arg = [].slice.call(arguments)
  console.log(arg)
  let constructor = arg.shift()
  let obj = Object.create(constructor.prototype)
  let result = constructor.apply(obj, arg)
  return (typeof result === 'object' && result != null) ? result : obj
}




function Person(name, age){
  console.log(name)
}
_new(Person, 'name', 12)
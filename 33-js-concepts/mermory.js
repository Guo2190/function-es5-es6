function Memoize(func, obj){
  var obj = obj || window,
      func = obj[func],
      cache = {};
  return function(){
      var key = Array.prototype.join.call(arguments, "_");
      if (!(key in cache))
          cache[key] = func.apply(obj, arguments);

      return cache[key];
  }
}

var fib = {
  fib: function(n){
       if (n == 0 || n == 1)
           return 1;
      return this.fib(n-1) + this.fib(n-2);
  },
  fib_memo: function(n){
       if (n == 0 || n == 1)
           return 1;
      return this.fib_memo(n-1) + this.fib_memo(n-2);
  }
}

fib.fib_memo = Memoize('fib_memo', fib);
console.time()
console.log(fib.fib_memo(10))
console.timeEnd()
setTimeout(()=>{
  console.time()
console.log(fib.fib_memo(10))
console.timeEnd()

},3000)
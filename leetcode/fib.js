console.time('1')
function fib(n){
  if(n==0||n==1){
    return n
  }
  let arr = new Array(n+1).fill(0)
  console.log(arr)
  arr[0]=0
  arr[1]=1

  for(let i = 2; i <=n; i++){
    arr[i]=arr[i-1]+arr[i-2]
  }
  console.log(arr)
  return arr[n]
}
console.log(fib(5))

console.timeEnd('1')
console.time('211')

function fiba(n) {
  if(n==0||n==1){
    return n
  } else {
    return fiba(n-1)+fiba(n-2)
  }
}
console.timeEnd('211')

console.log(fiba(30))
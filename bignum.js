function sum(a, b){
  let aLength = a.length
  let bLength = b.length
  let lenght = Math.max(aLength,bLength)
  a = a.padStart(lenght,0)
  b = b.padStart(lenght,0)
  let c = 0, d= 0, sum = ''
  for(let i = lenght-1; i--; i>=0){
    c = parseInt(a[i])+parseInt(b[i])+d
    d = Math.floor(c/10)
    sum = c%10+sum
  }
  if(d == 1){
    sum = '1'+sum
  }
  return sum
}
console.log(sum('111111111111111111111111','222222222222222222222'))
console.log(111111111111111111111111+222222222222222222222)
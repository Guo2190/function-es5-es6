let a = [1,2,3,4,5,6]
let c = a.reduce((a,b) =>{
    console.log(a)
    return  a+b
}, 1)
console.log(c)
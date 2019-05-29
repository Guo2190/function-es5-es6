function createIterator(items) {
    let i = 0
    return {
        next() {
            let done =  i >= items.length
            let value = !done ? items[i++] : undefined
            return {
                done,
                value
            }
        }

    }
}
let a = [1,2,3]
let b = createIterator(a)
const obj = {
    value: 1
};

obj[Symbol.iterator] = function() {
    return createIterator([1, 2, 3]);
};
for(let k of obj) {
    console.log(k)
}
 function * f() {
    let [next, curr] = [0, 1]
    for(;;) {
        yield next;
        [next, curr] = [curr, next + curr]
    }
    
 }
 for(let i of f()) {
     if(i > 1000) break
     console.log(i)
 }
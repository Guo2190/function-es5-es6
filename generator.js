function * f() {
    let a = yield 'ssss';
    console.log('111',a)
    yield 3;
    return 4;
}
let a = f()
console.log(a.next())
console.log(a.next())
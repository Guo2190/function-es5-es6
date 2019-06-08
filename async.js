
function spawn(g) {
    let gen = g()
    return new Promise((resolve, reject) => {
        function step(genf) {
            let next
            try {
                next = genf()
            } catch (error) {
                return reject(error)
            }
            if(next.done) {
                return resolve(next.value)
            }
            Promise.resolve(next.value).then(r=>{
                step(()=> gen.next(r))
            }, e=>{
                step(() => gen.throw(e))
            })
        }
        step(() => gen.next(undefined))
    })
}
function fn(args) {
    return spawn(args)
}
function* helloWorldGenerator() {
    let a = yield 'hello';
    console.log(a)
    let b = yield 'world'; 
    throw Error('出错拉')
    console.log(b);
    let c = yield 'I am tired'
    console.log(c)
    return 'ending';
  }
  let j = helloWorldGenerator()

fn(helloWorldGenerator).then( v => console.log(v))



// 第一步 先返回一个new Promise 来处理 resolve or reject 情况
// 第二步 写一个自执行函数 step(() => gen.next(underfine))
// 第三步 step  try catch获取到参数  catch（reject） 判断done是否为true  true 就resolve
//  判断done => false   然后继续Promise.resolve().next() 在里面执行step函数(gen.next())  

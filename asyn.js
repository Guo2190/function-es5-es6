
function spawn(genf) {
    return new Promise((rs, rj) => {
        let gen = genf()
        function step(g) {
            let next 
            try {
                next = g()
            } catch (e) {
                rj(e)
            }
            if (next.done) return rs(next.value)
            Promise.resolve(next.value).then(v => {
                step(() => gen.next(v))
            }, e => {
                step(() => gen.throw(e))
            })
        }
        step(() => gen.next(undefined))
    })
}
function fn(args) {
    return spawns(args)
}
function* helloWorldGenerator() {
    let a = yield 'hello';
    let b = yield 'world'; console.log(b);
    

    let c = yield 'I am tired'
    return 'ending';
  }
  let j = helloWorldGenerator()

fn(helloWorldGenerator).then( v => console.log(v))

function spawns(genf) {
    let gen = genf() 
    return new Promise((resolve, reject) => {
        function step(f) {
            let x 
            try {
                x = f()
            } catch (e) {
               reject(e)
            }
            if(x.done) return resolve(x.value)
            Promise.resolve(x.value).then(r => {
                step(() => gen.next(r))
            }, e => {
                step(() => gen.throw(e))
            })
        } 
        step(() => gen.next(undefined))
    })
}

// 第一步 先返回一个new Promise 来处理 resolve or reject 情况
// 第二步 写一个自执行函数 step(() => gen.next(underfine))
// 第三步 step  try catch获取到参数  catch（reject） 判断done是否为true  true 就resolve
//  判断done => false   然后继续Promise.resolve().next() 在里面执行step函数(gen.next())  
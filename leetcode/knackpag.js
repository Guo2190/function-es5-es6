function kanck(N, W) {
    let arr = new Array()
    for (let i = 0; i < N; i++) {
        let a = new Array()
        arr[i] = a
        for (let j = 0; j < W; j++) {
            a[j] = 0
        }
    }
    return arr
}

console.log(kanck(5, 6))
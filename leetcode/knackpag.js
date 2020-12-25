// 背包问题


function knapsack(weights, values, W) {
    const n = weights.length
    const f = new Array(n)
        // for (let j = 0; j <= W; j++) {
        //     if (j < weights[0]) {
        //         f[0][j] = 0
        //     } else {
        //         f[0][j] = values[0]
        //     }
        // }
    for (let i = 0; i < n; i++) {
        f[i] = []
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= W; j++) {

            if (i === 0) { // 第一行
                f[i][j] = j < weights[i] ? 0 : values[i]
            } else {
                if (j < weights[i]) {
                    f[i][j] = f[i - 1][j]
                } else {
                    f[i][j] = Math.max(f[i - 1][j], f[i - 1][j - weights[i]] + values[i])
                }
            }

        }
    }
    return f
}
console.log(knapsack([2, 2, 6, 5, 4], [6, 3, 5, 4, 6], 10))
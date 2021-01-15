// 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。

// 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 
// j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩
// 子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。



var findContentChildren = function(g, s) {
    let child = g.sort((a, b) => a - b)
    let cookie = s.sort((a, b) => a - b)
    let childNum = 0
    let cookieNum = 0
    while (childNum < child.length && cookieNum < cookie.length) {
        console.log(childNum, cookieNum)
        if (child[childNum] <= cookie[cookieNum]) {
            childNum++
        }
        cookieNum++

    }
    return childNum
};

console.log(findContentChildren([1, 2, 3, 1, 3, 2, 188, 5, 1], [1, 1, 12, 33, 1111, 2]))
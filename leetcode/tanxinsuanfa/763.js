// // ababcbacadefegdehijhklij
var partitionLabels = function(S) {
    let map = new Map()
    for (let i = 0; i < S.length; i++) {
        map.set(S[i], i)
    }
    let start = 0
    let end = 0
    const res = []
    for (let i = 0; i < S.length; i++) {
        end = Math.max(end, map.get(S[i]))
        if (i === end) {
            res.push(end - start + 1)
            start = i + 1
        }
    }
    return res
};

console.log(partitionLabels('ababcbacadefegdehijhklij'))
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * tag 贪心算法 动态规划 
 * 
 * 
 */
var isMatch = function(s, p) {
    let i = 0
    let j = 0
    let iStart = -1
    let jStart = -1
    while (i < s.length) {
        if (j < p.length && s[i] == p[j] || p[j] === '?') {
            ++i
            ++j
        } else if (j < p.length && p[j] == '*') {
            jStart = j++ // 记录星号的位置
                iStart = i;
        } else if (iStart >= 0) { // 如果此时p[j]不匹配s[i] 就要用*匹配
            i = ++iStart
            j = jStart + 1
        } else {
            return false
        }

    }
    while (j < p.length && p[j] == '*') ++j;
    return j == p.length;
};

console.log(isMatch('gxsadsadf', 'g*f'))
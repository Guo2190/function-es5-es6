/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * 
 * 
 * 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。

'?' 可以匹配任何单个字符。
'*' 可以匹配任意字符串（包括空字符串）。
两个字符串完全匹配才算匹配成功。

说明:

s 可能为空，且只包含从 a-z 的小写字母。
p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。
示例 1:

 * 
 * 
 * 
 * 
 */
var isMatch = function(s, p) {
    let i = 0, j = 0
    while(i<s.length){
        console.log(s[i], p[j])
        if(s[i]==p[j]){
           
            i++
            j++
        }else{
            return false
        }
    }
    return i===j
};

console.log(isMatch('aaaaaa','a'))
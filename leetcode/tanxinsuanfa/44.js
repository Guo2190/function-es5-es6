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
 * 杜均
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
/**
 * 
 * @param {*} s 
 * @param {*} p
 *  动态规范 考察点
 * 
 * 
 * 
 * 
 * 
 * 
 *  
 */
var isMatchs = function(s, p) {
    if (p === "*" || s === p) return true;
    let dp = Array.from(Array(s.length+1),_=>Array(p.length+1).fill(false))
    dp[0][0] = true
   for(let j = 1; j<=p.length; j++){ // 当s为空 p为星号
       if(p[j-1] === '*'){
        dp[0][j]=dp[0][j-1]
       }
   }
    for(let i = 1; i<=s.length; i++){
        for(let j = 1; j<=p.length;j++){
            if(s[i-1]===p[j-1]|| p[j-1] === '?'){
                dp[i][j] = dp[i-1][j-1]
             }
              else if(p[j-1] === '*'){
                 dp[i][j] = dp[i-1][j]|| dp[i][j-1]
             }
        }
    }
    return dp[s.length][p.length]
};


console.log(isMatchs('aa',"a"))
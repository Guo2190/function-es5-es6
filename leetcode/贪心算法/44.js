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
    let iStart = -1 // 记录开始匹配星号的位置
    let jStart = -1 // 记录星号的位置
    while(i<s.length){// 判断i是否大于s长度
        if(s[i]===p[j] || p[j] === '?'){ // 如果相等 或者p[j]是？  说明匹配 
            ++i
            ++j
            
        } else if(j<p.length&&p[j] === '*') // 如果不相登  p.j是星号 说明可以通吃 
        {
            iStart = i // 记录*开始匹配位置
            jStart = j++ // 记录星号位置 
        } else if(iStart>=0){ // 上面即不相等 p.j当前也不是星号，  所以只能用之前记录的星号位置 通吃后面的
            i = ++iStart
            j = jStart+1

        } else{

            return false
        }

    }
    while(j<p.length&&p[j]=== '*') ++j // 还需要判断后面是否有多余的星号
    return j === p.length
};

console.log(isMatch('aa', 'a'))


/**
 * 动态规划
 * dp[i][j] 表示s到i位置  p到j位置是否匹配
 * 1 dp[0][0] true
 * 2 dp[0][j]  
 * 3 dp[i][0] false
 * 动态方程
 * 
 * (s[i]===p[j]||p[j]=='?') => dp[i][j] = dp[i-1][j-1]
 * 
 * 
 */
 var isMatchDP = function(s, p) {
    let dp = []
    for(let i = 0; i<s.length; i++){
        dp[i]=[]
    }
    dp[0][0] = true

    for(let j = 1; j<s.length; j++){
        if(p[j-1]==="*"){
            dp[0][j]=true
        }
    }
    // for(let i = 1; i<s.length; i++){
    //     for(let j = 1; j<p.length; j++){
    //         if(s[i-1]===p[j-1] || p[j-1] === '?'){
    //             dp[i][j] = dp[i-1][j-1]
    //         }  
    //     }
    // }
    console.log(dp)
    return dp[s.length-1][p.length-1]
};
 console.log(isMatchDP('guoxiaofeng','g*uoxiaofeng'))
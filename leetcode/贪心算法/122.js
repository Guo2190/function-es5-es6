// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。



// 贪心算法  
var maxProfit = function(prices) {
    let ans = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) { // 只要今天价格小于明天价格就在今天买入然后明天卖出
            ans += prices[i] - prices[i - 1]
        }
    }
    return ans
};
// console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
    // 动态规划
    /**
     * @param {number[]} prices
     * @return {number}
     * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

    设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

    注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）


     */
var maxProfit = function(prices) {
    let length = prices.length
    if (length < 2) {
        return 0
    }
    let dp = new Array(length - 1)
    for (let i = 0; i < length; i++) {
        dp[i] = []
    }
    // 初始状态 
    // dp[i][0] 不持有股票
    // dp[i][1] 持有股票
    dp[0][0] = 0 //开始不持有股票
    dp[0][1] = -prices[0]
    for (let i = 1; i < length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
    }
    console.log(dp)
    return dp[length - 1][0]
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
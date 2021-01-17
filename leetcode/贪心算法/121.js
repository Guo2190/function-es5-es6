/**
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

注意：你不能在买入股票前卖出股票。

 */
/**
 * @param {number[]} prices
 * @return {number}
 */
// 动态规划方法
// var maxProfit = function(prices) {
//     if(prices.length<=1){
//         return 0
//     }
//     let dpo = 0
//     let dp1 = prices[0]
//     for(let i = 1; i< prices.length; i++){
//         dpo = Math.max(dpo, prices[i] - dp1)
//         dp1 = Math.min(dp1, prices[i])
//     }
//     return dpo
// };

// 最大子序列和
var maxProfit = function(prices) {
    if(prices.length<2){
        return 0
    }
   let subArr = new Array(prices.length-1)
   for(let i = 1; i< prices.length; i++){
    subArr[i-1] = prices[i] - prices[i-1] // 记录所有买卖的盈亏 然后在计算里面最大子序列
}
        return Math.max(0, maxSub(subArr))
};
let maxSub = function(arr){
   let f = new Array(arr.length-1)
   f[0]=arr[0]
    for(let i =1; i< arr.length; i++){
       f[i] = Math.max(f[i-1]+arr[i], arr[i])
    }
    return f.sort((a,b)=> b-a)[0]
}
console.log(maxProfit( [7,1,5,3,6,4]))
//console.log(maxSub( [ -6, 4, -2, 3, -2 ]))
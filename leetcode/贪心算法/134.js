/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * leetcode 134题 
 * 汽车作为起点的条件： 当前站点汽油值大于消耗值 则可驶向下一个站点 并记录上一个站点剩余的汽油和当前站点消耗和存储的汽油质量  若小于0 则说明当前i 不适合
 * 作为起点， 则把七点设置为下一个点 继续遍历
 * 并记录所有站点总汽油量是否大于消耗量   如果大于等于 且有站点汽油值大于消耗值 说明可以环绕一周 
 *
 * 
 * 
 * 
 * 
 */
var canCompleteCircuit = function(gas, cost) {
  let sum = 0
  let curSum = 0
  let res = 0
  for(let i = 0; i < gas.length; i++){
    sum += gas[i]-cost[i]
    curSum += gas[i]-cost[i]
    if(curSum<0){
      res=i+1
      curSum=0
    }
  }
  console.log(sum)
  return sum>=0?res:-1
  
};
// 倒序遍历
var canCompleteCircuit2 = function(gas, cost) {
  let mx = -1 // 记录出现过的最大剩余油量
  let total = 0 // 记录当前剩余油量
  let start = 0
  for(let i = gas.length; i < gas.length; i--){
     total += gas[i] - cost[i]
     if(total>mx){
        start = i
        mx = total
     }
  }
  return total>=0?start:-1
  
};

console.log(canCompleteCircuit2([3,1,1],
  [1,2,2]))
/**
 * 
 * @param {*} nums 
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

  数组中的每个元素代表你在该位置可以跳跃的最大长度。

  判断你是否能够到达最后一个下标。
* 1 如果某个作为 起跳点的 格子可以跳跃的距离是 n. 那表示后面n个格子 都可以作为起跳点 
  2  可以对n之内的 起跳点 尝试跳  把能跳到最远的距离 不断更新
  3 如果可以跳到最后一次 就成功了



 */

var canJump = function(nums) {
    let maxPos = 0

    for(let i = 0; i < nums.length; i++){
      if(i>maxPos) return false
       maxPos = Math.max(nums[i]+i, maxPos)
      console.log(maxPos)
        
    }
    return true
};
console.log(canJump([3,2,1,1,4]))
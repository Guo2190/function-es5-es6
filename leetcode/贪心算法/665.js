/**
 * @param {number[]} nums
 * @return {boolean}
 * 给你一个长度为 n 的整数数组，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。

   我们是这样定义一个非递减数列的： 对于数组中所有的 i (0 <= i <= n-2)，总满足 nums[i] <= nums[i + 1]。
   
 * 先判断num.i >? num.i-1
 * 是 continue
 * 否 
 *   判断 i-2 >=0  说明已经比较到 i=2了
 *         no 说明i = 1 时 直接 num.i-1= num.i
 *         yes i>=2了 此时已经比较到大于等于第三个元素了 
 *             and 继续判断 num.i-2 是否 大于 num.I
 *                是 num.i = num.i-1>num.i-2
 *                否 num.i-1 = num.i > num.i-2   
 * 
 */
var checkPossibility = function(nums) {
    let index = 0
    for(let i = 1; i< nums.length; i++){
        if(nums[i]>=nums[i-1]) {
            continue
        } 
        if(i-2>=0 && nums[i-2] > nums[i]){
            console.log(nums[i],nums[i-1])
            nums[i]=nums[i-1]
            
        }else{
            nums[i-1] = nums[i]
        }
        
        index++
          
        
    }
    return index<=1
};
console.log(checkPossibility([3,4,2,3]))
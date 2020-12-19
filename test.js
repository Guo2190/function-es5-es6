/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    const arr = nums.sort((a, b) => a - b)
    let d = Number.MAX_SAFE_INTEGER
    console.log(d)
    let diff = 0
    let ans = 0
    let sum = 0
    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1
        let right = arr.length - 1
        while (left < right) {
            sum = nums[i] + nums[left] + nums[right]
            diff = Math.abs(sum - target)
            if (diff < d) {
                d = diff
                ans = sum
            }
            if (sum > target) {
                right--
            } else {
                left++
            }
        }
    }
    return ans
};

console.log(threeSumClosest([-1, 2, 1, -4], 1))
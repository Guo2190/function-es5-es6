var threeSum = function(nums) {
    const arr = []
    let l = 0
    let r = nums.length - 1
    while (l < r) {
        let add = nums[l] + nums[r]
        let index = nums.findIndex((e, i) => {
            if (i != l && i != r) {
                return (add - e) === 0
            }
        })
        if (index !== -1) {
            console.log(l, r, index)
            arr.push([nums[l], nums[r], nums[index]])
                ++l
                --r
        } else {
            if (nums[l] > nums[r]) {
                --r
            } else {
                ++l
            }
        }
    }
    return arr
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
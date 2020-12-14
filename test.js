var twoSum = function(nums, target) {
    const arr = nums.sort((a, b) => a - b)
    const res = []
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        if (arr[left] + arr[right] === target) {
            res.push([arr[left], arr[right]])
            while (arr[left] === arr[left + 1]) {
                left++
            }
            left++
            while (arr[right] === arr[right - 1]) {
                right--
            }
            right--

        } else if (arr[left] + arr[right] > target) {
            while (arr[right] === arr[right - 1]) {
                right--
            }
            right--

        } else {
            while (arr[left] === arr[left + 1]) {
                left++
            }
            left++
        }
    }
    return res
};

console.log(twoSum([1, 1, 1, 2, 2, 3, 3], 4))
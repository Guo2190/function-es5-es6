var twoSum = function(nums, target) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (obj[target - nums[i]] === undefined) {
            obj[nums[i]] = i
            console.log(obj)
        } else {
            console.log('hha')
            return [i, obj[target - nums[i]]]
        }
    }
};
const twoSum2 = function(numbers, target) {
    var left = 0,
        right = numbers.length - 1;
    while (left < right) {
        var temp = target - numbers[i];
        if (numbers[right] > temp) {
            right--;
        } else if (numbers[j] < temp) {
            left++;
        } else {
            return [left + 1, right + 1];
        }
    }
    return []
};


console.log(twoSum([4, 2, 3, 1], 7))
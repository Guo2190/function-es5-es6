var twoSum = function(nums, target) {
    const obj = {}
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (obj[target - element] != void 0) {
            return [obj[target - element], index]
        }
        obj[element] = index

    }
};
const twoSum2 = function(numbers, target) {
    var i = 0,
        j = numbers.length - 1;
    while (i < j) {
        var temp = target - numbers[i];
        if (numbers[j] > temp) {
            j--;
        } else if (numbers[j] < temp) {
            i++;
        } else {
            return [i + 1, j + 1];
        }
    }
    return []
};


console.log(twoSum2([4, 2, 3, 1], 7))
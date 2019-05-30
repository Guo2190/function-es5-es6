const add = (...args) => args.reduce( (a, b) => a+b)
let a = add(1)
//console.log(a)


// 实现nums =  [1,2,3,3,4,5,1]  target = 9 找到9相加的
var twoSum = function(nums, target) {
    let obj = {}
    for(let i = 0; i < nums.length; i++) {
        let com = target - nums[i]
        if (typeof obj[com] === 'number') {
            console.log('122121')
            return [obj[com], i]
        }
        obj[nums[i]] = i
    }
};

let s  = [2, 7, 11, 15]
//console.log(twoSum(s, 9))
var addTwoNumbers = function(l1, l2) {
    let arr = []
    for(let i in l1) {
        console.log(i)
        arr.push(l1[i]+l2[i])
    }
    return arr
};
console.log(addTwoNumbers([1,2,3], [2,3,4]))
// var twoSum = function(nums, target) {
//     let obj = {}
//     for (let i = 0; i < nums.length; i++) {
//         if (obj[target - nums[i]] === undefined) {
//             obj[nums[i]] = i
//             console.log(obj)
//         } else {
//             console.log('hha')
//             return [i, obj[target - nums[i]]]
//         }
//     }
// };
const twoSum2 = function(numbers, n = 2,  start = 0, target) {
    let nums = numbers.sort((a,b)=> a-b)
    let sz = nums.length
    let res = []
    if (n < 2 || sz < n) return res;
    // 2Sum 是 base case
    if (n == 2) {
        let l = start;
        let r = nums.length-1
        while(l<r){
            let sum = nums[l]+nums[r]
            let left = nums[l];
            let right = nums[r]
            if(sum>target){
                while(l<r && nums[r] === right)r--
            } else if(sum<target){
               
                while(l<r && nums[l] === left)l++
    
            } else if (sum === target) {
                res.push([nums[l],nums[r]])
             
                while(l<r && nums[l] === left){
                
    
                    l++
                }
                while(l<r && nums[r] === right)r--
                
            }
        }
    } else {
        // n > 2 时，递归计算 (n-1)Sum 的结果
        for (let i = start; i < sz; i++) {
         
        let sub = twoSum2(nums, n - 1, i + 1, target - nums[i]);
                let numss = nums[i]
                if(sub.length){
                 for(let i = 0; i<sub.length; i++){
                   
                    res.push(sub[i].concat(numss));
                 }
                }
               
            
            while (i < sz - 1 && nums[i] == nums[i + 1]) i++;
        }
    }
    return res;
};


console.log(twoSum2([ 1, 2, 2, 2, 3, 3, 3, 4, 4, 5 ],3, 0 ,7))


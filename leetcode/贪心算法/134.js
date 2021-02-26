/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let sum = 0
  let curSum = 0
  let res = 0

  for(let circle = 0;circle<cost.length;circle++){
    sum +=gas[circle]-cost[circle]
    curSum +=gas[circle]-cost[circle]
    if(curSum<0){
      res=circle+1
      curSum = 0
    }
  }
 return sum<0?-1:res
  
};

console.log(canCompleteCircuit([1,2,3,4,5],[3,1,5,1,2]))
/**
 * @param {number[][]} people
 * @return {number[][]}
 * 
 * 
 * 假设有打乱顺序的一群人站成一个队列，数组 people 表示队列中一些人的属性（不一定按顺序）。每个 people[i] = [hi, ki] 表示第 i 个人的身高为 hi ，前面 正好 有 ki 个身高大于或等于 hi 的人。
 请你重新构造并返回输入数组 people 所表示的队列。返回的队列应该格式化为数组 queue ，其中 queue[j] = [hj, kj] 是队列中第 j 个人的属性（queue[0] 是排在队列前面的人）

 */
var reconstructQueue = function(people) {
    let length = people.length
    if(length<2){
        return people
    }
    let res = []
    people.sort((a,b) => a[0]===b[0]? a[1] - b[1] : b[0]-a[0])
    console.log(people)
    for(let i = 0; i<length; i++){
        res.splice(people[i][1], 0, people[i])
        console.log(res)
    }
    return res
};

console.log(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]))
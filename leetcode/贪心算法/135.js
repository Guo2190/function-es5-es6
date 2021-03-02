// 一群孩子站成一排，每一个孩子有自己的评分。现在需要给这些孩子发糖果
// ，规则是如果一 个孩子的评分比自己身旁的一个孩子要高，那么这个孩子就
// 必须得到比身旁孩子更多的糖果;所 有孩子至少要有一个糖果。求解最少需要多少个糖果。
// var candys = function(ratings) {
//     if (ratings.length < 2) {
//         return ratings.length
//     }
//     let candy = new Array(ratings.length).fill(1)
//     for (let i = 0; i < ratings.length; i++) {
//         if (ratings[i] < ratings[i + 1]) {

//             candy[i + 1] = candy[i] + 1
//         }
//     }
//     for (let i = ratings.length - 1; i >= 0; i--) {
//         if (ratings[i] < ratings[i - 1]) {
//                         candy[i-1] = Math.max(candy[i]+1, candy[i-1])

//         }
//     }
//     return candy.reduce((a, b) => a + b)
// };
// console.log(candys([1, 0, 2, 12, 1, 0, 111, 1]))

let candys = function (ratings){
    if(ratings.length<=2){
        return ratings.length
    }
    let candy = new Array(ratings.length).fill(1)
    for(let i = 0; i<ratings.length;i++){
        if(ratings[i] <ratings[i+1]){
            candy[i+1] = candy[i]+1
        }
    }

    for(let i  = ratings.length-1; i>=0; i--){
        if(ratings[i-1]>ratings[i]){
            candy[i-1] = Math.max(candy[i]+1, candy[i-1])
     
        }
    }
 
    return candy
}
console.log(candys([1,3,4,5,2]))

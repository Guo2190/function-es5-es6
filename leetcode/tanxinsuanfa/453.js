/**
 * @param {number[][]} points
 * @return {number}
 * 在二维空间中有许多球形的气球。对于每个气球，提供的输入是水平方向上，气球直径的开始和结束坐标。由于它是水平的，所以纵坐标并不重要，因此只要知道开始和结束的横坐标就足够了。开始坐标总是小于结束坐标。

一支弓箭可以沿着 x 轴从不同点完全垂直地射出。在坐标 x 处射出一支箭，若有一个气球的直径的开始和结束坐标为 xstart，xend， 且满足  xstart ≤ x ≤ xend，则该气球会被引爆。可以射出的弓箭的数量没有限制。 弓箭一旦被射出之后，可以无限地前进。我们想找到使得所有气球全部被引爆，所需的弓箭的最小数量。

给你一个数组 points ，其中 points [i] = [xstart,xend] ，返回引爆所有气球所必须射出的最小弓箭数。。
 */
var findMinArrowShots = function(points) {
    if (points.length <= 1) {
        return points.length
    }
    let sortPoints = points.sort((a, b) => a[0] - b[0])
    console.log(sortPoints)
    let num = 1
    let line = sortPoints[0][1]
    for (let i = 0; i < sortPoints.length; i++) {
        if (line >= sortPoints[i][0]) {

            line = Math.min(line, sortPoints[i][1])
        } else {
            num++
            line = sortPoints[i][1]
        }
    }
    return num
};
var findMinArrowShotsR = function(points) {
    if (points.length <= 1) {
        return points.length
    }
    let sortPoints = points.sort((a, b) => a[1] - b[1])
    console.log(sortPoints)

    let num = 1
    let line = sortPoints[0][1]
    for (let i = 0; i < sortPoints.length; i++) {
        console.log(line, sortPoints[i][0])
        if (line < sortPoints[i][0]) {

            line = sortPoints[i][1]
            num++
        }
    }
    return num
};
console.log(findMinArrowShots(
    [
        [0, 1],
        [2, 7],
        [5, 6],
        [7, 8]
    ]
))
console.log(findMinArrowShotsR([
    [0, 1],
    [2, 7],
    [5, 6],
    [7, 8]
]))
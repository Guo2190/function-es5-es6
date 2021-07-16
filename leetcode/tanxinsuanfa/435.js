// 给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。

// 注意:

// 可以认为区间的终点总是大于它的起点。
// [1,3] [2,4]
// 区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。



var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) {
        return 0
    }
    let sortIntervals = intervals.sort((a, b) => a[1] - b[1])
    let prev = sortIntervals[0][1]
    let total = 0
    for (let i = 1; i < sortIntervals.length; i++) {
        if (sortIntervals[i][0] < prev) {
            total++
        } else {
            prev = sortIntervals[i][1]
        }
    }
    return total

};
console.log(eraseOverlapIntervals([
    [1, 2],
    [1, 3],
    [2, 4]
]))
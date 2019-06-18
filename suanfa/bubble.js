/**
 * BUB (bubble冒泡算法) 基于比较
 */
let a = [-1,34,1,0,2]
function bub(arr) {
    let len = arr.length
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
               [arr[j], arr[j+1]]= [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

// 优化 加个flag;  如果当轮比较 为false 直接跳过本次循环
// function bub(arr) {
//     let len = arr.length
//     let flag
//     for(let i = 0; i < len; i++) {
//         flag = false
//         for(let j = 0 ; j < len; j++) {
//             if (arr[i] > arr[j +1 ]) {
//                 [arr[i], arr[j + 1]]= [arr[j + 1  ], arr[i]]
//                 flag = true
//             }
//         }
//         if(!flag) continue
//     }
//     return arr
// }
console.time('bub')
console.log(bub(a))
console.timeEnd('bub')

/**
 * SEL (SELECT选择) 基于比较
 * 选择排序（Selection Sort）与冒泡排序类似，也是依次对相邻的数进行两两比较。不同之处在于
 * 它不是每比较一次就调换位置，而是一轮比较完毕，找到最大值（或最小值）之后，将其放在正确的位置，其他数的位置不变
 */
let b = [22,1,33,11,22,0];

function sel(arr) {
    let len = arr.length
    let min
    for(let i = 0; i < len - 1; i ++) {
        min = i
        for(let j = i+1; j < len; j++) {
            if(arr[j] < arr[min]) {
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
        //console.log(arr)
    }
    return arr
 }
 //console.log('sel--->',sel(b))

 /**
 * INSERT (插入排序) 基于比较
 * 它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入
 * 插入排序（insertion sort）比前面两种排序方法都更有效率。它将数组分成“已排序”和“未排序”两部分，
 * 一开始的时候，“已排序”的部分只有一个元素，然后将它后面一个元素从“未排序”部分插入“已排序”部分，
 * 从而“已排序”部分增加一个元素，“未排序”部分减少一个元素。以此类推，完成全部排序。
 */
Array.prototype.inser = inser
b = [22,1,33,11,22,0];
// [1,22,33,11,22,0]
// [1,22,33,11,22,0]
// [1,11,22,33,22,0]
// [1,11,22,22,33,0]
// [0,1,11,22,22,33]
function inser() {
    let len = this.length
    let i, j, key
    for(i = 1; i < len; i++) {
        key = this[i] 
        j = i - 1
        while(j >= 0 && key < this[j]) {
            this[j+1] = this[j]
            j-- 
            //console.log('j--',j)
        }
        this[j+1] = key
        //console.log(this)
    }
    return this
}
function inser() {
    let len = this.length
    let i, j, key;
    for(i = 1; i < len; i++) {
        key = this[i]
        j = i - 1
        while(j >= 0 && key < this[j]) {
            this[j+1] = this[j]
            j--
        }
        this[j+1] = key
    }
    return this
}
//console.log('this-->',b.inser())
function inser1(arr) {
    let len = arr.length
    for(let i = 1; i < len; i++) {
        for(let j = 0; j < i; j++) {
            if(arr[j] > arr[i]) {
                arr.splice(j,0, arr[i])
                arr.splice(j+1, 1)
            }
        }
    }
    return arr
}
//console.log(inser1(b))
/**
 * MERGE SORT 归并排序
 * 也叫归并算法，指的是将两个已经排序的序列合并成一个序列的操作。归并排序算法依赖归并操作。
 */

Array.prototype.merge_sort = merge_sort
function merge_sort() {
    if(this.length <= 1) return this
    let middle = Math.floor(this.length / 2)
    let left = this.slice(0, middle)
    let right  = this.slice(middle)
    return msort(left.merge_sort(), right.merge_sort())
}
function msort(left, right) {
   // console.log('left-->', left)
    //console.log('right-->', right)
    let result = []
    while(left.length > 0 && right.length > 0) {
        if(left[0] < right[0])
        {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return result.concat(left, right)

}
//console.log('mergeSort--->',[1,3,2,-1,0,15].merge_sort())
/**
 * QUICKY SORT 快速排序 是公认最快的排序算法之一，有着广泛的应用。
 * 。
 */
Array.prototype.quickSort = function () {
    let len = this.length
    if(len < 2) return  this
    let value = this[0]
    let left = [], right = [];
    for(let i = 1; i < len; i++) {
        const v = this[i]
        v >= value && left.push(v);
        v < value && right.push(v)
    }
    return left.quickSort().concat(value, right.quickSort())
}
// console.time('quicksort')
// console.log([-1,34,1,0,2,212,21,1,12,12,12,12,1212,12,123131231,321,0].quickSort())
// console.timeEnd('quicksort')
// console.time('sort')
// console.log([-1,34,1,0,2,212,21,1,12,12,12,12,1212,12,123131231,321,0].sort((a,b) => a-b))
// console.timeEnd('sort')
// [0].quickSorts().concat(1, [2121,31212].quickSorts())
// [0].concat(1, [].concat(2121, [31212].quickSorts()))
// [0].concat(1, [].concat(2121, [31212])
//console.log([1,2121,31212, 0].quickSorts())

/**
 * RADIX SORT 基数排序 是一种非比较型整数排序算法，其原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。
 */

Array.prototype.radixSort = function() {
    let arr = this.slice(0)
    const max = Math.max(...arr)
    let digit = `${max}`.length
    let start = 10
    let dev = 1
    let buckets = []
    while(digit > 0) {
      start *= 10
      dev *= 10
      for(let i = 0; i < arr.length; i++) {
        const index = parseInt(arr[i] % start / dev)
        !buckets[index] && (buckets[index] = [])
        buckets[index].push(arr[i])
      }
      arr = []
      for(let i = 0; i < buckets.length; i++) {
        buckets[i] && (arr = arr.concat(buckets[i]))
      }
      buckets = []
      digit --
    }
    return arr
  }
 console.log('radixSort', [1,2,33333,1212,199, 777,3121,12].radixSort())
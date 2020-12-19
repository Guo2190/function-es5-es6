//给定一串数 当选中一个数时 他的左右都变为不可选  问怎们选 加起来和最大
let arr = [1, 2, 4, 1, 7, 8, 3]

function cNum(arr, i) {
    if (i == 0) {
        return arr[0]
    } else if (i == 1) {
        return Math.max(arr[0], arr[1])
    } else {
        // A =  // 选中
        // B =  // 不选
        return Math.max(cNum(arr, i - 2) + arr[i], cNum(arr, i - 1))
    }
}
console.log(cNum(arr, 6))


function dpNum(arr) {
    let eNum = new Array(arr.length - 1).fill(0)
    eNum[0] = arr[0]
    eNum[1] = Math.max(arr[0], arr[1])
    for (let i = 2; i < arr.length; i++) {
        eNum[i] = Math.max(eNum[i - 2] + arr[i], eNum[i - 1])
    }
    return eNum[arr.length - 1]
}
//console.log(111, dpNum(arr))
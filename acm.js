// 尺取法

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

function a(arr, total) {
    let i = 0, j = 0;
    let n = arr.length
    let sum = 0
    while( i <= j && j < n) {
        if (sum >= total) {
            //console.log(sum)
            if( sum === total ){
                console.log(i, j-1)
            }
            sum -= arr[i++]
        } else {
            sum += arr[j++]
           
        }
        //console.log(i, j)
        //console.log(sum)
    }
}
a(arr, 15)


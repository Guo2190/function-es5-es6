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

//  寻找字符串最大不重复子字符串

function  serach(str) {
    const map = {}
    let left = 0
    return str.split('').reduce((max, v, i) => {
        //console.log('11',v)
        left = map[v] >=  left ? map[v]+1 : left 
        map[v] = i
        //console.log(left)
        return Math.max(max, i-left+1)
    }, 0)
}

console.log(serach('abcabcbb'))

function serachs(str) {
    let sstr = ''
    let len = 0
    for(let i = 0; i < str.length; i++) {
        let char = str.charAt(i)
        let index = sstr.indexOf(char)
        if(index == -1) {
            sstr += char
            console.log(sstr)
            len = len < sstr.length ? sstr.length : len
        } else {
            sstr = sstr.substr(index + 1) + char
        }
    }
    return len
}
console.log(serachs('abcabcbb'))
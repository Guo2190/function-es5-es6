var getSmallestString = function(n, k) {
    let arr = new Array(n).fill('a')
    let remain = k-n
    let i = n-1
    while (remain) {
      if(remain>25)
      {
        remain -=25
        arr[i]= 'z'
        --i
      }else {
        arr[i]= String.fromCharCode(97+remain)
        --i
        remain = 0
      }

    }
    return arr


};
console.log(getSmallestString(5,73))
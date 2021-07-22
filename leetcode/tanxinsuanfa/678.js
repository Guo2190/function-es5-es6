var checkValidString = function(s) {
  let left = 0, right = 0 , len = s.length
     for(let i = 0; i < len; i++){
         left += (s[i] == ')') ? -1 : 1
         right += (s[s.length-i-1] == '(') ? -1 : 1
         if(left<0||right<0)return false
         console.log(left,right)
     }
     return true
 };

 console.log(checkValidString('((((((*****)'))
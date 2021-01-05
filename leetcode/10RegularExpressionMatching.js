var isMatch = function(s, p) {
    let i = 0
    let j = 0
    while (j < p.length - 1) {
        if (i >= s.length - 1) {
            return false
        }
        if (s[i++] != p[j++]) {
            return false
        }
    }
    return j === s.length - 1
};

console.log(isMatch('sdaaaaa', 'sd...aa'))
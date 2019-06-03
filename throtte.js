function throtte(func, wait) {
    let time = null
    let previous = 0
    return function () {
        let args = arguments
        let now = +new Date()
        if (now - previous > wait) {
            func.apply(this, args)
            previous = now
        }
    }
}
function throtte(func, wait) {
    let time = null
    return function () {
        let args = arguments
        if(!time) {
            time = setTimeout(()=>{
                time = null
                func.apply(this, args)
            }, wait)
        }
    }
}
var count = 1;
var container = document.getElementById('container');
function getUserAction() {
    container.innerHTML = count++;
};
window.onmousemove = throtte(getUserAction, 2000, true)
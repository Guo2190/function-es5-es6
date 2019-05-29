function throttle(func, wait) {
    let time, ctx, now, previous = 0, remaining, args;
    return () => {
        ctx = this
        args = arguments
        now = +new Date()
        remaining  = wait - (now - previous) 
        if (remaining < 0) {
            if(time) {
                clearTimeout(time)
            }
            func.apply(ctx, args)
            previous = now
        } else if(!time) {
            time = setTimeout(() => {
                time = null
                func.apply(ctx, args)
                previous = +new Date()
            })
        }
    }
}
function debunce (func, wait, immediate) {
    let args, time, ctx;
    return function(){
        ctx = this
        args = arguments
        if(time) {
            clearTimeout(time)
        }
        if (immediate) {
            let callnow = !time
            time = setTimeout(() => {
                time = null
            }, wait)
            if(callnow) func.apply(ctx, args)
        } else {
            time = setTimeout(() => {
                func.apply(ctx, args)
            }, wait)
        }
        
    }
}
var count = 1;
var container = document.getElementById('container');
function getUserAction() {
    container.innerHTML = count++;
};
window.onmousemove = debunce(getUserAction, 1000, true)
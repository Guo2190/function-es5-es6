/*
 * @Author: your name
 * @Date: 2020-09-05 11:59:56
 * @LastEditTime: 2020-09-05 12:15:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /study/vue.js
 */
function Vue(options) {
    console.log(this._init(options))
}
initMixin(Vue)

function initMixin(Vue) {
    console.log(1212)
    Vue.prototype._init = function(options) {
        console.log(options.data)
    }
}

let a = new Vue({ a: 1 })
console.log(a.__proto__)
// const Koa = require('koa');
// const http = require('http');
// const https = require('https');
// const app = new Koa();

// // logger

// app.use(async (ctx, next) => {
//   console.log(ctx)
//   await next();
//   const rt = ctx.response.get('X-Response-Time');
//   console.log(`${ctx.method} ${ctx.url} - ${rt}`);
// });

// // x-response-time

// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   ctx.set('X-Response-Time', `${ms}ms`);
// });

// // response

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

// http.createServer(app.callback()).listen(3000);
// https.createServer(app.callback()).listen(3001);

Array.prototype.mergeSort = function () {
  let len = this.length
  if(len <= 1) return this
  let middle = Math.floor(len / 2)
  let left = [], right = [];
  left = this.slice(0, middle)
  right = this.slice(middle)
  return msort(left.mergeSort(), right.mergeSort())
}
function msort(left, right) {
  let result = []
  while(left.length > 0 && right.length > 0) {
    if(left[0] < right[0] ) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return result.concat(left, right)
}
console.log([12,1,0,-11,222,999].mergeSort())
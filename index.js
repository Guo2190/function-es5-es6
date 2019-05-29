const Koa = require('koa');
const http = require('http');
const https = require('https');
const app = new Koa();

// logger

app.use(async (ctx, next) => {
  console.log(ctx)
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
});

http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);
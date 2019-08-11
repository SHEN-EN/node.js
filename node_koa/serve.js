const koa=require('koa');
const Router=require('koa-router')();
const serve= new koa();
const koaBodyparser=require('koa-bodyparser');
const koaCookie=require('koa-cookie');
const cors=require('koa-cors');
serve.use(cors())
serve.use(koaBodyparser())
//启动路由
serve.use(require('./route/office').routes());
serve.use(require('./route/reg').routes());
serve.use(require('./route/login').routes());
serve.use(require('./route/talk').routes());
serve.use(require('./route/company').routes());
serve.use(Router.allowedMethods());
serve.listen(8000)
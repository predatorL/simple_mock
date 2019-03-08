const Koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');

const middlewares = require('./middleware');

const app = new Koa();
var router = new Router();


app.use(bodyParser());
/**
 * TODO:
 * 1. 添加中间件
 * 2. 添加处理函数
 * 3. 添加加载数据逻辑
 */

//  请求路径参数解析、拆解
for (const _mid of middlewares) {
    app.use(_mid);
}

// 组装结果
app.use(async (ctx, next) => {
    await next();
    const {resData} = ctx.state;
    if(resData.status) {
        ctx.body = resData.data;
    } else {
        ctx.response.status = 404;
    }

});

// router.get('/*', ctx => {
//     // console.log('router', ctx.state.pathArr, ctx.query, ctx.request.body);
//     ctx.state.res = ctx.request.query;
// });

// router.post('/*', ctx => {
//     // console.log('router', ctx.request.path, ctx.request.query, ctx.request.body);
//     ctx.body = {
//         type: 'post',
//         data: ctx.request.body
//     };
// });
// router.put('/*', ctx => {
//     // console.log('router', ctx.request.path, ctx.request.query, ctx.request.body);
//     ctx.body = {
//         type: 'put',
//         data: ctx.request.body
//     };
// });
// router.delete('/*', ctx => {
//     // console.log('router', ctx.request.path, ctx.request.query, ctx.request.body);
//     ctx.body = {
//         type: 'delete',
//         data: ctx.request.body
//     };
// });

app.use(router.routes()).use(router.allowedMethods());

app.listen(8010);

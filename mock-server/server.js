const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    console.log(ctx.request)
    console.log(ctx.response)
    ctx.body = 111
})

app.listen(8010);

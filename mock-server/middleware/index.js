//  请求路径参数解析、拆解
const parsePath = (ctx, next) => {
    let pathArr = ctx.request.path.substr(1).split('/');
    ctx.state.pathArr = pathArr;
    next();
};
//  解析路径参数, 递归获取返回值
const getRes = (ctx, next) => {
    const {pathArr} = ctx.state;
    const allData = require('../projects');
    console.log('getRes', pathArr, 'projects', allData)
    next();
};

module.exports = [
    parsePath,
    getRes
];

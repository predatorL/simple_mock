//  请求路径参数解析、拆解
const parsePath = (ctx, next) => {
    let pathArr = ctx.request.path.substr(1).split('/');
    let [project, ...other] = pathArr;
    ctx.state.pathArr = pathArr;
    ctx.state.project = project;
    ctx.state.path = '/' + other.join('/');
    next();
};

// TODO: 暂时不支持无项目归属的接口
const queryRes = (project, api) => {
    const data = require('../projects');
    if(!data.hasOwnProperty(project)) {
        // 项目不存在, 请求失败
        return {
            status: false,
            data: null
        }
    }
    if(!data[project].hasOwnProperty(api)) {
        // 项目不存在, 请求失败
        return {
            status: false,
            data: null
        }
    };
    return {
        status: true,
        data: data[project][api]
    };

}

//  解析路径参数, 递归获取返回值
const getRes = (ctx, next) => {
    const {path, project} = ctx.state;
    const {method} = ctx.request;
    ctx.state.resData = queryRes(project, `${method} ${path}`);
    next();
};

module.exports = [
    parsePath,
    getRes
];

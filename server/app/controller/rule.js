'use strict';

const Controller = require('egg').Controller;

class RuleController extends Controller {


    // 查询单个项目信息
    async queryOne() {
        const { ctx } = this;
        const {id} = ctx.params;
        const result = await ctx.model.Project.findOne({_id: id});
        ctx.body = JSON.stringify({
            status: 200,
            attachment: {
                data: result
            }
        });
    }

    // 创建项目
    async createRule() {
        const { ctx } = this;
        let _params = ctx.request.body;
        console.log('createRule', _params);

        const result = await ctx.model.Project.update({_id: _params.pro_id}, {
            $push: {
                rules: _params.data
            }
        });
        console.log('result', result)
        ctx.body = JSON.stringify({
            status: 200,
            attachment: null,
            message: '',
        });
    }

    // 更新项目信息
    async updateRule() {
        const { ctx } = this;
        ctx.body = JSON.stringify({
            status: 200,
            attachment: {
                data: [
                    {id: 1, name: 2323, root: 222}
                ]
            }
        });
    }

    // 删除项目
    async removeRule() {
        const { ctx } = this;
        ctx.body = 'hi, egg1111';
    }
}

module.exports = RuleController;

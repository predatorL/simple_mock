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
        let _rule = _params.data;
        // TODO: 去重查询，防止重复的路径存在 在schema上添加method
        const result = await ctx.model.Project.findOneAndUpdate({_id: _params.pro_id}, {
            $push: {
                rules: _rule
            }
        });
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

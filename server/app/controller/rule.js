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
    async createPro() {
        const { ctx } = this;
        let _projectInfo = ctx.request.body;



        let _project = new ctx.model.Project({
            ..._projectInfo,
            create_time: new Date(),
            update_time: new Date(),
        })
        const result = await _project.save(err => {
            if(err) {
                console.error('ctx.model.Project', err)
            }
        });
        // console.log('result', result)
        ctx.body = JSON.stringify({
            status: 200,
            attachment: null,
            message: '',
        });
    }

    // 更新项目信息
    async updatePro() {
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
    async removePro() {
        const { ctx } = this;
        ctx.body = 'hi, egg1111';
    }
}

module.exports = RuleController;

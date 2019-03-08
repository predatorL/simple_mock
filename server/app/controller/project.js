'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
    // 查询所有项目列表
    async getList() {
        const { ctx } = this;
        const result = await ctx.model.Project.find();
        ctx.body = JSON.stringify({
            status: 200,
            attachment: {
                data: result.map(item => {
                    return {
                        create_time: item.create_time,
                        name: item.name,
                        note: item.note,
                        root: item.root,
                        update_time: item.update_time,
                        id: item._id
                    };
                })
            }
        });
    }

    // 查询单个项目信息
    async queryOne() {
        const { ctx } = this;
        const { id } = ctx.params;
        const result = await ctx.model.Project.findOne({ _id: id });
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
            update_time: new Date()
        });

        const result = await _project.save(err => {
            if (err) {
                console.error('ctx.model.Project', err);
            }
        });
        // console.log('result', result)
        ctx.body = JSON.stringify({
            status: 200,
            attachment: null,
            message: ''
        });
    }

    // 更新项目信息
    async updatePro() {
        const { ctx } = this;
        ctx.body = JSON.stringify({
            status: 200,
            attachment: {
                data: [{ id: 1, name: 2323, root: 222 }]
            }
        });
    }

    // 删除项目
    async removePro() {
        const { ctx } = this;
        ctx.body = 'hi, egg1111';
    }

    // 更新mock数据
    async updateMock() {
        const { ctx } = this;
        const { id } = ctx.params;
        console.log(id)
        // const result = await ctx.model.Project.findOne({ _id: id });
        // ctx.body = JSON.stringify({
        //     status: 200,
        //     attachment: {
        //         data: result
        //     }
        // });
    }
}

module.exports = ProjectController;

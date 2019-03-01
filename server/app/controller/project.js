'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

    // 查询所有项目列表
    async getList() {
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

    // 查询单个项目信息
    async queryOne() {
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

    // 创建项目
    async createPro() {
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

module.exports = HomeController;

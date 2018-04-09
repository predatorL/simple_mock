const {Controller} = require('egg')
/*
通过控制器的定义，添加了render
*/
class NewsCtrl extends Controller {
    async list() {
        const dataList = {
            list: [
                {id: 1, title: 'this is news 1', url: '/news/1'},
                {id: 2, title: 'this is news 2', url: '/news/2'}
            ]
        }
        await this.ctx.render('news/list.tpl', dataList)
    }
}

exports = NewsCtrl

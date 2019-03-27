const {Controller} = require('egg');

class ViewController extends Controller {
    async project() {
        await this.ctx.render('project.nj');
    }

    async rule() {
        await this.ctx.render('rule.nj');
    }

    async env() {
        await this.ctx.render('env.nj');
    }

    async login() {
        await this.ctx.render('login.nj');
    }

}

module.exports = ViewController;

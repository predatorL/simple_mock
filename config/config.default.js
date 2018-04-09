'use strict'

module.exports = appInfo => {
    const config = (exports = {})

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1523262708160_3146'

    // add your config here
    config.middleware = []
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks'
        }
    }
    return config
}

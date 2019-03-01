/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1551152927021_7316';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    // 在config.{env}.js中配置，注意配置覆盖的问题
    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true
        },
        domainWhiteList: ['*']
    };

    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };

    return {
        ...config,
        ...userConfig
    };
};

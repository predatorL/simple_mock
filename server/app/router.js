'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    // project
    router.get('/api/project', controller.project.getList);
    router.get('/api/project/:id', controller.project.queryOne);
    router.post('/api/project', controller.project.createPro);
    router.put('/api/project', controller.project.updatePro);
    router.delete('/api/project', controller.project.removePro);
    router.post('/api/project/update-mock', controller.project.updateMock);
    // rule
    // router.get('/api/rule', controller.project.getList);
    router.get('/api/rule/:id', controller.rule.queryOne);
    router.post('/api/rule', controller.rule.createRule);
    router.put('/api/rule', controller.rule.updateRule);
    router.delete('/api/rule', controller.rule.removeRule);
};

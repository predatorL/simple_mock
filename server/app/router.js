'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/project', controller.project.getList);
  router.get('/api/project/:id', controller.project.queryOne);
  router.post('/api/project', controller.project.createPro);
  router.put('/api/project', controller.project.updatePro);
  router.delete('/api/project', controller.project.removePro);
};

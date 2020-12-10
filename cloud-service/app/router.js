'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/home', controller.home.index); // 首页
  router.post('/api/cartoon', controller.cartoon.index); // 动漫照片
};

'use strict';

const BaseController = require('./base');

class HomeController extends BaseController {
  async index() {
    const { ctx } = this;
    const userInfo = await ctx.service.home.getUserList();
    ctx.body = userInfo.res.data;
  }
}

module.exports = HomeController;

'use strict';

const BaseController = require('./base');

class HomeController extends BaseController {
  async index() {
    const { ctx } = this;
    const userInfo = await ctx.service.user.find();
    ctx.body = userInfo.res.data;
  }
}

module.exports = HomeController;

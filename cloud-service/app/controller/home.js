'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const userInfo = await ctx.service.user.find();
    ctx.body = userInfo.res.data;
  }
}

module.exports = HomeController;

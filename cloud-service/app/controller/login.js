'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      msg: '登录成功',
    };
  }
}

module.exports = LoginController;

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      name: 'Jack',
      age: 18,
    };
  }

  async api() {
    const { ctx } = this;
    ctx.body = { foo: 'bar' };
  }
}

module.exports = HomeController;

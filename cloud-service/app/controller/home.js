'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.type = 'html';
    ctx.body = `<!DOCTYPE html>
<html>
  <head>
    <title>Tencent CloudBase + Egg.js</title>
  </head>
  <body>
    Hello World Serverless
  </body>
</html>
`;
  }

  async api() {
    const { ctx } = this;
    ctx.body = { foo: 'bar' };
  }
}

module.exports = HomeController;

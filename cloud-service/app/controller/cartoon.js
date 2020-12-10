'use strict';
const fs = require('fs');
const BaseController = require('./base');

class CartoonController extends BaseController {
  async index() {
    const { ctx } = this;
    // 获取文件流
    const { url } = await this.uploadFile();

    // 获取上传的图片
    const image = fs.readFileSync(url).toString('base64');

    // 调接口获取结果
    const res = await ctx.service.cartoon.getImg(image);
    this.success(res);
  }
}

module.exports = CartoonController;

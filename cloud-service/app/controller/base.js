'use strict';
const path = require('path');
const fs = require('fs');
const awaitWriteStream = require('await-stream-ready').write; // 异步二进制 写入流
const sendToWormhole = require('stream-wormhole'); // 管道读入一个虫洞。
const Controller = require('egg').Controller;

class BaseController extends Controller {
  // success
  success(data) {
    // console.log('接口返回了---->', data);
    this.ctx.body = {
      code: 0,
      message: 'success',
      data,
    };
  }
  // 404
  notFound(msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
  // 上传文件
  async uploadFile() {
    const stream = await this.ctx.getFileStream();
    // 自定义文件名
    const fileName = new Date().getTime() + path.extname(stream.filename).toLocaleLowerCase();
    // 目标文件
    const target = path.join('app/public/admin/uploads', fileName);
    const writerStream = fs.createWriteStream(target);

    try {
      await awaitWriteStream(stream.pipe(writerStream));
    } catch (err) {
      // 如果出现错误，关闭管道
      await sendToWormhole(stream);
      return {
        error: '错误',
      };
    }
    return {
      url: path.join('app/public/admin/uploads', fileName),
      fields: stream.fields,
    };
  }
}

module.exports = BaseController;

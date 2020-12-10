'use strict';

const Service = require('egg').Service;

const { BAIDU_SDK_CONFIG } = require('./tools');
const { API_KEY, SECRET_KEY } = BAIDU_SDK_CONFIG;

class CartoonService extends Service {
  async getImg(image) {
    const { ctx } = this;
    const { data } = await ctx.curl(`https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=${API_KEY}&client_secret=${SECRET_KEY}`, {
      // 自动解析 JSON response
      dataType: 'json',
      // 3 秒超时
      timeout: 3000,
    });

    const token = data.access_token;

    const res = await ctx.curl('https://aip.baidubce.com/rest/2.0/image-process/v1/selfie_anime?access_token=' + token, {
      method: 'POST',
      // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
      contentType: 'application/x-www-form-urlencoded',
      data: {
        image,
      },
      timeout: 30000,
      // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
      dataType: 'json',
    });
    return res.res.data;
  }
}

module.exports = CartoonService;

const baseUrl = tt.env.VERSION === "production" ? 'https://glow-face-5gxrhrsu0130d7f4.service.tcloudbase.com/glow-face' : 'http://localhost:7002'

/**
 * API 请求封装
 * @param {*} param0 
 */
const api = ({ url = '', methods = "get", data = {} }) => {
  return new Promise((resolve, reject) => {
    tt.request({
      methods,
      data,
      url: baseUrl + url, // 目标服务器url
      success: (res) => {
        resolve(res.data)
      },
      fail(res) {
        console.log("调用失败", res.errMsg);
        reject(res)
      },
    });
  })
}

module.exports.api = api
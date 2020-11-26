const api = ({ url = '', methods = "get", data = {} }) => {
  return new Promise((resolve, reject) => {
    tt.request({
      methods,
      data,
      url: 'http://localhost:9001' + url, // 目标服务器url
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
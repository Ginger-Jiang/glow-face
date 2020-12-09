const init = () => {
  // 只是想试试这种奇葩写法
  tt.goHome = tt.reLaunch.bind(tt, {
    url: '/pages/home/index'
  })
}

/**
 * 全局前置 init
 */
module.exports = {
  init
}
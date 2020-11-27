App({
  onLaunch() {
    console.log(`当前运行环境: ${tt.env.VERSION}`)
  },
  onError(e) {
    // console.log('全局错误捕捉，后续对接日志记录：', e)
  }
})

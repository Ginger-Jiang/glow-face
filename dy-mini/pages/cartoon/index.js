const { globalData: { authMap } } = getApp();
const { authorized } = getApp()
Page({
  data: {

  },
  defaultTap() {
    authorized()
  }
})
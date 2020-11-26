const app = getApp()
const { api } = require('../../api/index')
Page({
  async defaultTap(e) {
    const res = await api({url: '/home'});
    console.log('app', res)
  }
})

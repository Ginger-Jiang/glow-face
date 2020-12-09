/**
 * 用户授权检查白名单 数组中存在的都需要用户授权
 * scope.userInfo  tt.getUserInfo	是否授权用户信息
 * scope.userLocation	tt.getLocation，tt.openLocation	是否授权地理位置
 * scope.address	tt.chooseAddress	是否授权通讯地址
 * scope.record	tt.getRecorderManager.start	是否授权录音功能
 * scope.album	tt.saveImageToPhotosAlbum，tt.saveVideoToPhotosAlbum	是否授权保存到相册
 * scope.camera	tt.scanCode，tt.chooseImage，tt.chooseVideo	是否授权摄像头
 */

const { notEmpty } = require('./util')

const permissions = ["scope.camera", "scope.album"] // 功能需要的权限

/**
 * 对需要授权内容进行授权请求
 * @param {*} authorization 需要授权的数组
 */
const authorizationHandler = (authorization = permissions) => {
  authorization.forEach(i => {
    tt.authorize({
      scope: i,
      success() { },
      fail() {
        // 拒绝过的需要手动开启
        tt.showModal({
          title: "授权请求",
          content: "需要您进行授权后, 为您提供更好的服务.",
          success(res) {
            if (res.confirm) {
              setAuthorization()
            } else if (res.cancel) {
              tt.goHome()
            }
          }
        });
      }
    });
  })
}

/**
 * 引导用户在设置页面进行授权
 */
const setAuthorization = () => {
  tt.openSetting({
    success({ authSetting }) {
      const filters = authorizeFilter(authSetting)
      authorizationHandler(filters)
    },
    fail() {
      tt.goHome()
    }
  })
}

/**
 * 查找需要授权但是用户没有授权的
 * @param {*} object 需要判断的对象
 */
const authorizeFilter = object => {
  const newPermissions = []
  for (const key in object) {
    if (!object[key]) {
      newPermissions.push(key)
    }
  }
  return newPermissions
}


/**
 * 授权
 */
const authorization = () => {
  tt.getSetting({
    success({ authSetting }) {
      if (!notEmpty(authSetting)) {
        authorizationHandler()
      } else {
        const filters = authorizeFilter(authSetting)
        authorizationHandler(filters)
      }
    },
    fail() {
      tt.goHome()
    }
  })
}

module.exports = authorization
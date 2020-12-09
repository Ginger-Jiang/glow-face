/**
 * 返回数据类型
 * @param {*} data any
 */
const getType = (data = {}) => {
  return Object.prototype.toString.call(data).match(/\[object (.*)\]/)[1].toLowerCase()
}

/**
 * 判断是否为空对象
 * @param {*} o Object
 */
const notEmpty = o => {
  if (getType(o) !== 'object') {
    return
  }
  return Object.keys(o).length !== 0
}


module.exports = {
  getType,
  notEmpty
}
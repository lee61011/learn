/*
 * @Author: **
 * @Date: 2020-11-27 13:45:05
 * @LastEditTime: 2020-11-27 14:19:14
 * @LastEditors: **
 * @Description: 
 * @FilePath: \nodejs\Node基础\CommonJS模块管理\A.js
 */

function sum(...arg) {
  let total = 0
  arg.forEach(item => {
    item = Number(item)
    // 有效数字校验
    if (!isNaN(item)) {
      total += item
    }
  })

  return total
}

module.exports = { sum }

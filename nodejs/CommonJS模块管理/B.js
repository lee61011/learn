/*
 * @Author: **
 * @Date: 2020-11-27 13:45:33
 * @LastEditTime: 2020-11-27 14:15:03
 * @LastEditors: **
 * @Description: 
 * @FilePath: \nodejs\Node基础\CommonJS模块管理\B.js
 */

let A = require('./A')

function avg(...arg) {
  arg = arg.sort((a,b) => a - b).slice(1, arg.length - 1)
  return (A.sum(...arg) / arg.length).toFixed(2)
}

module.exports = { avg }
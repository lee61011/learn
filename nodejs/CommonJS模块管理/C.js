/*
 * @Author: **
 * @Date: 2020-11-27 13:45:40
 * @LastEditTime: 2020-11-27 14:12:27
 * @LastEditors: **
 * @Description: 
 * @FilePath: \nodejs\Node基础\CommonJS模块管理\C.js
 */

/*
	需求：创建A/B/C三个模块
		A中有一个SUM方法实现任意数求和
		B中有一个方法AVG求平均数：去掉最大和最小值，剩余值求和（调取A中的SUM方法，实现求和）
		C中调取B中的AVG，传递：98 95 85 67 25，实现求一堆数中平均数
*/

let { avg } = require('./B')

console.log(avg(1,2,3,4,5,6,7,8,9))

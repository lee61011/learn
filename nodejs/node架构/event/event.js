let EventEmitter = require('./events')
let util = require('util')

function Bell() {
  EventEmitter.call(this) // 继承私有属性
}

util.inherits(Bell, EventEmitter) // 进行原型继承 继承公用 Object.setPrototypeOf(ctoe.prototype, superCtor.prototype)

let bell = new Bell()

function studentInClassroom(roomNumber, things) {
  console.log(`学生带着${things}进${roomNumber}教室`)
}
function tracherInClassroom(roomNumber, things) {
  console.log(`讲师带着${things}进${roomNumber}教室`)
}
function masterInClassroom(roomNumber, things) {
  console.log(`杨老师带着${things}进${roomNumber}教室`)
}

bell.setMaxListeners(15) // 0表示不限制
bell.addListener('xiang', studentInClassroom)
bell.on('xiang', tracherInClassroom)
bell.once('xiang', masterInClassroom)
// 第一个参数是事件类型，第二个参数和以后的参数会传递给监听函数
bell.emit('xiang', '211', '书')
bell.emit('xiang', '211', '书')
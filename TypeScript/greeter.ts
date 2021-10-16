/*
 * @Author: **
 * @Date: 2021-02-01 13:51:27
 * @LastEditTime: 2021-02-01 14:26:23
 * @LastEditors: **
 * @Description: 
 * @FilePath: \TypeScript\greeter.ts
 */

class Character {
  fullName: string
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`
  }
}

interface Person {
  firstName: string,
  lastName: string
}

function greeter(person: Person) {
  return `Hello ${ person.firstName } And ${ person.lastName }`
}

// const user = '大史'
// const user = ['大史', '章北海']
// const user = { firstName: '大史', lastName: '章北海' }
const user = new Character('史强', '章北海', '罗辑')
console.log(user)


document.body.innerText = greeter(user)

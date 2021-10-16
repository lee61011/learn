/*
 * @Author: **
 * @Date: 2021-02-01 13:51:27
 * @LastEditTime: 2021-02-01 14:26:23
 * @LastEditors: **
 * @Description:
 * @FilePath: \TypeScript\greeter.ts
 */
var Character = /** @class */ (function () {
    function Character(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Character;
}());
function greeter(person) {
    return "Hello " + person.firstName + " And " + person.lastName;
}
// const user = '大史'
// const user = ['大史', '章北海']
// const user = { firstName: '大史', lastName: '章北海' }
var user = new Character('史强', '章北海', '罗辑');
console.log(user);
document.body.innerText = greeter(user);

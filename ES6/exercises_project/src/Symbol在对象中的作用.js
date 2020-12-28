/**
 * Created by lee61011 on 2018/5/6.
 */

/*
*   声明 Symbol
* */
let a = new String();
let b = new Number();
let c = new Boolean;
let d = new Array;
let e = new Object;
let f = Symbol();

console.log(typeof (f));            //  symbol





/*
*   Symbol 的打印
* */
let g = Symbol('this is g');
console.log(g);                         //  this is g       红色
console.log(g.toString());              //  this is g       黑色






/*
*   Symbol 在对象中的应用
* */

//  如何用Symbol构建对象的Key，并调用和赋值。
let people = Symbol();
let obj = {
    [people]: '张三',
}
console.log(obj[people]);                       //  张三

obj[people] = '李四';
console.log(obj[people]);                       //  李四






/*
*   Symbol 对象元素的保护作用
*       在对象中有很多值，但是循环输出时，并不希望全部输出，那我们就可以使用Symbol进行保护。
* */

//  没有进行保护的写法：
let person1 = {name: '张三', age: 22, gender: 1};
for (let item in person1 ) {
    console.log( person1[item] );
}
//  张三
//  22
//  1


//  不想别人知道我的年龄，这时候我就可以使用Symbol来进行循环保护。
let person2 = {name: '李四', age: 18 };

let gender = Symbol();
person2[gender] = 3;
for (let item in person2 ) {
    console.log( person2[item] );       //  李四      18
};
console.log( person2 );                 //  {name: "李四", age: 18, Symbol(): 3}
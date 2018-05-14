/**
 * Created by lee61011 on 2018/5/6.
 */

/*
*   对象赋值:
*       ES6允许把声明的变量直接赋值给对象
* */

let name = "张三";
let age= '22';
var obj= {name,age};
console.log(obj);                       // {name: "张三", age: "22"}





/*
*   对象 key 值解构
* */
let key='skill';
var obj={
    [key]: 'web'
}
console.log(obj.skill);                 //  web





/*
*   自定义对象方法
*       对象方法就是把对象中的属性，用匿名函数的形式编程方法
* */
let obj1 = {
    add: function (a,b) {
        return a + b;
    }
}
console.log(obj1.add(1, 2));                    //  3





/*
*   Object.is() 对象比较:
*       对象的比较方法,以前进行对象值的比较，经常使用===来判断
*       ES6为我们提供了is方法进行对比
*       区分=== 和 is方法的区别
* */

let obj2 = {name: '张三', age: '22'};
let obj3 = {name: '李四', age: '22'};
console.log( obj2.age === obj3.age );               //  true
console.log( Object.is(obj2.age,obj3.age) );        //  true
console.log( Object.is(obj2.name,obj3.name) );      //  false

//  区分=== 和 is方法的区别
console.log( +0 === -0 );                           //  true
console.log( NaN === NaN );                         //  false
console.log( Object.is(+0,-0) );                    //  false
console.log( Object.is(NaN,NaN) );                  //  true





/*
*   Object.assign() 合并对象
* */

//  操作数组时我们经常使用数组合并，那对象也有合并方法，那就是 assgin()
let a = {a: 'aaa'};
let b = {b: 'bbb'};
let c = {c: 'ccc'};
let obj5 = Object.assign(a,b,c);
console.log(obj5);          //  {a: 'aaa', b: 'bbb', c: 'ccc'}
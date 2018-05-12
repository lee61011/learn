/**
 * Created by lee61011 on 2018/5/6.
 */

/*
*   默认值:
*       ES6中增加了默认值的操作,只需要传递一个参数也是可以正常运行的。
* */
function add( a, b=1 ) {
    return a + b;
};
console.log(add(1));            //  2





/*
*   主动抛出错误
*       ES6中直接用throw new Error( xxxx ),就可以抛出错误。
* */
function add1( a, b=1 ) {
    if (a == 0) {
        throw new Error( '又出错啦! 快找 BUG 吧...' );
    };
    return a + b;
}
//  add1(add1(0))





/*
*   函数中的严谨模式:   'use strict'
*       ES5中必须写在代码最上边，相当于全局使用。
*       ES6中可以写在函数体中，相当于针对函数来使用。
* */

// function add( a, b=1 ) {
//     'use strict'             //  这里会报错 有默认值的情况下 不能使用严格模式
//     return a + b;
// };
// console.log(add(1));

function add2( a, b ) {
    'use strict'
    return a + b;
};
console.log(add2(1,2));





/*
*   获得需要传递的参数个数:
*       如果在使用别人的框架时，不知道别人的函数需要传递几个参数怎么办？ES6为我们提供了得到参数的方法(xxx.length).
**/

function add3( a, b, c, d, e ) {
    return a + b;
}
console.log(add3.length);               //  5
//  如果给第二个参数加上默认值的话，这时候 add.length 的值就变成了 1 , 也就是说它得到的是必须传入的参数。






/*
*   箭头函数:
**/
let add5 = (a,b) => a+b;
console.log(add5(5, 5));            //  10

//  在箭头函数中，方法体内如果是一句话 可以不用写 {}
// 方法体内如果是两句话，那就需要在方法体外边加上{}括号
let add6 = (a,b=1) => {
    console.log('这里是一句废话!');
    return a + b;
}
console.log(add6(6));
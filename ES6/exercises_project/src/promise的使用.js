/**
 * Created by lee61011 on 2018/5/7.
 */

/*
*   promise 的使用:
*       ES6 中的 promise 的出现给我们很好的解决了回调地狱的问题, 在使用 ES5 的时候, 在多层嵌套回调时, 写完的代码层次过多, 很难进行维护和二次开发, ES6 认识到了这点问题, 现在 promise 的使用, 完美解决了这个问题
* */





/*
*   promise 的基本用法:
*       promise执行多步操作非常好用，那我们就来模仿一个多步操作的过程
*           1. 步骤一: ......
*           2. 步骤二: ......
*           3. 步骤三: ......
*       这个过程是有一定的顺序的，你必须保证上一步完成，才能顺利进行下一步
* */

//  这个过程在 ES5 写起来要有多层的嵌套。使用 promise 实现过程如下
let state = 1;

function step1( resolve, reject ) {
    console.log('步骤一:  开始执行;');
    if ( state == 1 ) {
        resolve ( '步骤一:  执行完成;' );
    } else {
        reject ( '步骤一:  执行出错;' );
    };
};

function step2( resolve, reject ) {
    console.log( '步骤二:  开始执行;' );
    if ( state == 1 ) {
        resolve ( '步骤二:  执行完成;' );
    } else {
        reject ( '步骤三:  执行出错;' );
    };
};

function step3 ( resolve, reject ) {
    console.log( '步骤三:  开始执行;' );
    if ( state == 1 ) {
        resolve ( '步骤三:  执行完成;' );
    } else {
        reject ( '步骤三:  执行出错;' );
    };
};

new Promise(step1).then( function (val) {   //  这里的 val 接受的是 上面方法中的 resolve 
    console.log( val );                     //  步骤一:  执行完成
    return new Promise(step2);
}).then( function ( val ) {
    console.log( val );                     //  步骤二:  执行完成
    return new Promise(step3);
}).then(function (val) {
    console.log(val);                       //  步骤三:  执行完成
    return val;
})
/**
 * Created by lee61011 on 2018/5/7.
 */

/*
*   声明 Proxy
* */

//  我们用new的方法对Proxy进行声明。可以看一下声明Proxy的基本形式。
//  new Proxy（{},{}）;
//  需要注意的是这里是两个花括号，第一个花括号就相当于我们方法的主体，后边的花括号就是Proxy代理处理区域，相当于我们写钩子函数的地方。




/*
*   get 属性:  get属性是在你得到某对象属性值时预处理的方法，他接受三个参数
*       target：     得到的目标值
*       key：        目标的key值，相当于对象的属性
*       property：   这个不太常用，用法还在研究中
* */



/*
*   set 属性: set属性是值你要改变Proxy属性值时，进行的预先处理。它接收四个参数
*       target:      目标值。
*       key：        目标的Key值。
*       value：      要改变的值。
*       receiver：   改变前的原始值。
* */

let person = new Proxy({
    sayHello: function () {
        return "Hello, I am zhangsan";
    },
    name: '张三',
},{
    //  get 属性
    get: function (target, key, property) {
        console.log('come in Get');
        return target[key];
    },

    //  set 属性
    set: function (target, key, value, receiver) {
        //  console.log(' setting ${key} = ${value} ');
        return target[key] = value;
    }
});
console.log(person.name);           //  张三
person.name = '李四';
console.log(person.name);           //  come in Get        李四




/*
*   apply 的使用
* */
//  apply 的作用是调用内部的方法,他使用在方法体是一个匿名函数时
let target = function () {
    return '我是小明';
};
let handler = {
    apply( target, ctx,args ) {
        console.log( 'do apply' );
        return Reflect.apply(...arguments);
    }
};
let person1 = new Proxy(target,handler);
console.log(person1());         //  do apply        我是小明
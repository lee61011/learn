/**
 * Created by lee61011 on 2018/5/6.
 */

/*
*   JSON 数组格式转换
* */

//  JSON的数组格式就是为了前端快速的把JSON转换成数组的一种格式，
//  一个标准的JSON数组格式，跟普通的JSON对比是在最后多了一个length属性。只要是这种特殊的json格式都可以轻松使用ES6的语法转变成数组。在ES6中绝大部分的Array操作都存在于Array对象里。我们就用Array.from(xxx)来进行转换。

let  json = {
    '0': 'aaa',
    '1': 'bbb',
    '2': 'ccc',
    length:3        //  如果没有这个 就返回一个 空数组
}

let arr0 = Array.from(json);
console.log(arr0);           //  ['aaa','bbb','ccc']




/*
*   Array.of()方法：
*       它负责把一堆文本或者变量转换成数组。
* */

let arr1 =Array.of(3,4,5,6);
console.log(arr1);                   //  [3,4,5,6]

//  它不仅可以转换数字，字符串也是可以转换的
let arr2 =Array.of('aaa','bbb','ccc');
console.log(arr2);                  //  ['aaa','bbb','ccc']





/*
*   find( )实例方法:
*       find方法是从数组中查找。在find方法中我们需要传入一个匿名函数，函数需要传入三个参数:
*           1. value：表示当前查找的值。
*           2. index：表示当前查找的数组索引。
*           3. arr：表示当前数组。
*       在函数中如果找到符合条件的数组元素就进行return，并停止查找
* */
let arr3 = [1,2,3,4,5,6,7,8,9];
console.log(arr3.find(function(value,index,arr){
    return value > 5;               //  6  找到符合条件的就返回并停止查找
    //  return value > 10;          //  undefined
}));





/*
*   fill( )实例方法:
*       fill()也是一个实例方法，它的作用是把数组进行填充，它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。
* */
let arr4 = [0,1,2,3,4,5,6,7,8,9];
arr4.fill('aaa',2,5);
console.log(arr4);                  //  [0, 1, "aaa", "aaa", "aaa", 5, 6, 7, 8, 9]





/*
*   数组的遍历:
*       for…of循环
* */

//  一个简单的 for...of 循环
let arr5 = ['aaa','bbb','ccc'];
for ( let item of arr5 ) {
    console.log( item );            //  aaa   bbb   ccc
};

//  for…of数组索引:有时候开发中是需要数组的索引的，那我们可以使用下面的代码输出数组索引。
let arr6 = ['aaa','bbb','ccc'];
for ( let index of arr6.keys() ) {
    console.log( index );            //  0   1   2
};

//  同时输出数组的内容和索引：我们用entries()这个实例方法，配合我们的for…of循环就可以同时输出内容和索引了。
let arr7 = ['aaa','bbb','ccc'];
for ( let [index,value] of arr7.entries() ) {
    console.log( index + ":" + value );            //  0:aaa   1:bbb   2:ccc
};





/*
*   entries( )实例方法:
*       entries()实例方式生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值。
* */

let arr=['aaa','bbb','ccc']
let list=arr.entries();
console.log(list.next().value);         //  [0, "aaa"]
console.log(list.next().value);         //  [0, "bbb"]
console.log(list.next().value);         //  [0, "ccc"]

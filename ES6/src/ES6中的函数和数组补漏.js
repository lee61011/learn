/**
 * Created by lee61011 on 2018/5/6.
 */

/*
*   对象的函数解构
*       ES6为我们提供了解构赋值   可以直接把这个JSON格式数据当作参数，传递到函数内部进行处理。
* */
let json = {
    a: 'aaa',
    b: 'bbb',
    c: 'ccc',
};
function fun( a, b='123321', c ) {
    console.log( a, b, c );
};
fun( json );        //  {a: 'aaa',b: 'bbb',c: 'ccc'}  "123321"  undefined






/*
*   数组的函数解构
*       函数能解构JSON，那解构我们的数组就更不在话下了
* */
let arr = ['aaa','bbb','ccc'];
function fun1 (a,b,c){
    console.log(a,b,c);
}
fun1(...arr);           //  aaa   bbb   ccc





/*
*   in 的用法:
*       in是用来判断对象或者数组中是否存在某个值的
* */

//  对象判断
let obj={
    a:'aaa',
    b:'bbb',
    c:'eee'
}
console.log('a' in obj);  //true
console.log('b' in obj);  //true
console.log('c' in obj);  //true
console.log('e' in obj);  //false

//  数组判断
let arr1 = [,,,,,,];
console.log(arr1.length);           //  6

let arr2 = [,,,,,,];
console.log(0 in arr2);             //  false

let arr3 = [1,2,3,4,5,6];
console.log(0 in arr3);             //  true
//  这里的 0 是指数组下标位置是否为空






/*
*   数组的遍历方法:
*       1. forEach
*       2. filter
*       3. some
*       4. map
* */

//  forEach     forEach循环的特点是会自动省略为空的数组元素，相当于直接给我们筛空了
let arr5 = ['aaa','bbb', , ,'ccc'];
arr5.forEach((val,index)=>console.log(index,val));
        //  0 "aaa"   1 "bbb"   4 "ccc"

//  filter
let arr6 = ['aaa','bbb','ccc'];
arr6.filter(x=>console.log(x));         //  aaa   bbb   ccc

//  some
let arr7 = ['aaa','bbb','ccc'];
arr7.some(x=>console.log(x));           //  aaa   bbb   ccc

//  map     map在这里起到一个替换的作用
let arr8 = ['aaa','bbb','ccc'];
console.log(arr8.map(x=>'xxx'));        //  ['xxx','xxx','xxx']






/*
*   数组转换字符串:
*       1. join() 方法
*       2. toString() 方法
* */

//  join() 方法       join()方法就是在数组元素中间，加了一些间隔
let arr10 = ['aaa','bbb','ccc'];
console.log(arr10.join('|'));           //  aaa|bbb|ccc
console.log(arr10.join('-'));           //  aaa-bbb-ccc

//  toString()方法
let arr11 = ['aaa','bbb','ccc'];
console.log(arr11.toString());          //  aaa,bbb,ccc
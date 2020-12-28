/**
 * Created by lee61011 on 2018/5/6.
 */

/*
*   Set的声明
* */

//  Set和Array 的区别是Set不允许内部有重复的值，如果有只显示一个，相当于去重。虽然Set很像数组，但是他不是数组。
let setArr = new Set(['张三','李四']);
console.log( setArr );          //  Set(2) {"张三", "李四"}





/*
*   Set 值的 增删查
* */
//  追加 add
setArr.add('王老五');
console.log( setArr )           //  Set(3) {"张三", "李四", "王老五"}

//  删除 delete
setArr.delete( '王老五' );
console.log( setArr );          //  Set(2) {"张三", "李四"}

//  查找 has      用has进行值的查找，返回的是true或者false。
console.log( setArr.has('张三') );        //  true
console.log( setArr.has('王老五') );      //  false

//  删除 clear
setArr.clear();
console.log(setArr);                     //  Set(0) {}





/*
*   set 的循环
* */

//  for...of 循环
let setArr1 = new Set(['aaa','bbb','ccc']);
for (let item of setArr1) {
    console.log( item );            //  aaa   bbb   ccc
}

//  size 属性     size属性可以获得Set值的数量。
console.log( setArr1.size );        //  3

//  forEach 循环
setArr1.forEach( (value) => console.log(value) );
        //  aaa   bbb   ccc





/*
*   WeakSet的声明
* */
let weakObj = new WeakSet();
let obj = {a:'张三', b:'李四'};
weakObj.add( obj );

console.log( weakObj );                 //  WeakSet {{…}}

//  这里需要注意的是，如果你直接在new 的时候就放入值，将报错。
//  WeakSet里边的值也是不允许重复的
//  在实际开发中Set用的比较多，WeakSet用的并不多，但是他对传入值必须是对象作了很好的判断
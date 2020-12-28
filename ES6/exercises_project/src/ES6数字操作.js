/**
 * Created by lee61011 on 2018/5/6.
 */

/*   二进制和八进制   */

//  二进制声明 Binary      二进制数值前面加上 0B
let binary = 0B010101;
console.log( binary );          //  21

//  八进制声明 Octal       八进制数值前面加上 0O
let octal = 0O123;
console.log(octal);             //  83




/*
*   数字判断和转换:
*       数字验证:  Number.isFinite( xx );
*       NaN验证:  Number.isNaN();
*       整数判断:   Number.isInteger(xx);
*       整数转换:   Number.parseInt(xxx);
*       浮点型转换:  Number.parseFloat(xxx)
* */

//  可以使用Number.isFinite( )来进行数字验证，只要是数字，不论是浮点型还是整形都会返回true，其他时候会返回false。
let a = 5/6;
console.log(Number.isFinite(a));                //  true
console.log(Number.isFinite('a'));              //  false
console.log(Number.isFinite(NaN));              //  false
console.log(Number.isFinite(undefined));        //  false

//  NaN是特殊的非数字，可以使用Number.isNaN()来进行验证。下边的代码控制台返回了true。
console.log(Number.isNaN(NaN));                 //  true
console.log(Number.isNaN(undefined));           //  false

//  判断是否为整数Number.isInteger(xx)
let aa = 123.1;
let bb = 123;
console.log(Number.isInteger(aa));              //  false
console.log(Number.isInteger(bb));              //  true

//  整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)
let aaa = 5.6;
console.log(Number.parseInt(aaa));              //  5
console.log(Number.parseFloat(aaa));            //  5.6




/*
*   整数取值范围操作:
*       最大安全整数: Number.MAX_SAFE_INTEGER
*       最小安全整数: Number.MIN_SAFE_INTEGER
*       安全整数判断: Number.isSafeInteger( xx )
* */

//  整数的操作是有一个取值范围的，它的取值范围就是2的53次方。
let maxNum = Math.pow(2,53) - 1;
console.log(maxNum);                            //  9007199254740991
console.log(Number.isInteger(maxNum));          //  true

//  最大安全整数
console.log(Number.MAX_SAFE_INTEGER);           //  9007199254740991

//  最小安全整数
console.log(Number.MIN_SAFE_INTEGER);           //  -9007199254740991

//  安全整数判断
let ccc = Math.pow(2,53) + 1;
console.log(Number.isSafeInteger(ccc));           //false
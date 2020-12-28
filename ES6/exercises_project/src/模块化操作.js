/**
 * Created by lee61011 on 2018/5/7.
 */

/*
*   模块化操作主要包括两个方面:
*       export :负责进行模块化，也是模块的输出.
*       import : 负责把模块引，也是模块的引入操作.
* */






/*
*   export的用法：
*       export可以让我们把变量，函数，对象进行模块话，提供外部调用接口，让外部进行引用
* */
//  把一个变量模块化。我们新建一个temp.js文件，然后在文件中输出一个模块变量。
//  export var a = 'jspang';
//  然后可以在 需要引入的.js 中以 import 的形式引入。
//  import {a} from './temp.js';
//  console.log(a);

import name from './temp.js'
console.log( name );




/*
*   多变量的输出
* */
//  这里声明了3个变量，需要把这3个变量都进行模块化输出，这时候我们给他们包装成对象就可以了。
let a ='张三';
let b ='李四';
let c = '王二蛋';

export {a,b,c}



/*
*   函数的模块化输出
* */

export function add(a,b){
    return a+b;
}





/*
*   as的用法
*       有些时候我们并不想暴露模块里边的变量名称，而给模块起一个更语义话的名称，这时候我们就可以使用as来操作。
* */
let a ='张三';
let b ='李四';
let c ='王老五';

export {
    x as a,
    y as b,
    z as c
}




/*
*   export default的使用
*       加上default相当是一个默认的入口。在一个文件里export default只能有一个
* */

//  对比一下 export 和   export default的区别

//  export
export let a ='张二蛋';
export function add(a,b){
    return a+b;
};
//  对应的导入方式
import {a,add} from './temp.js';                   //也可以分开写


//  export defalut
export default let a ='jspang';
import a from './temp';







//  ES6的模块化不能直接在浏览器中预览，必须要使用Babel进行编译之后正常看到结果
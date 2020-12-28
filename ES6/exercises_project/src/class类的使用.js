/**
 * Created by lee61011 on 2018/5/7.
 */

/*
*   类的声明:
* */

//  先声明一个最简单的 person 类, 类里只有一个 name 方法, 方法中打印出传递的参数.
class person {
    name ( val ) {
        console.log( val );
    };
};



/*
*   类的使用:
* */

//  上面我们已经声明了一个类，并在类里声明了 name 方法，现在要实例化类，并使用类中的方法。
let zhangsan = new person;
zhangsan.name('张三');            //  张三




/*
*   类的多方法声明
* */
class person1 {
    name ( val ) {
        console.log( val );
        return val;
    }
//  这里需要注意的是两个方法中间不要写逗号了，还有这里的 this 指类本身，还有要注意return 的用法。
    age ( val ) {
        console.log( this.name('小明') + ": 今年" + val + "岁了!" );
    };
};

let xiaoming = new person1;
//  xiaoming.name( '小红' );             //  小红
xiaoming.age( 22 );                     //  小明  小明: 今年22岁了!




/*
*   类的传参:
* */
//  在类的参数传递中我们用 constructor( )进行传参。传递参数后可以直接使用 this.xxx 进行调用。
class person2 {
    name ( val ) {
        console.log( val );
        return val;
    }

    age ( val ) {
        console.log( val );
        return val;
    }


    //  我们用 constructor 来约定了传递参数，然后用作了一个 add 方法，把参数相加
    constructor ( a, b ) {
        this.a = a;
        this.b = b;
    }
    add () {
        return this.a + this.b;
    }
}

let xiaohong = new person2( 1, 2 );
console.log( xiaohong.add() );          //  3





/*
*   class 的继承
* */
class zed extends person{}          //  zed 继承 person 中的方法

let zhang = new zed;
zhang.name('张二蛋');              //  张二蛋
/**
 * Created by lee61011 on 2018/5/6.
 */

//  在一些构建工具中是非常喜欢使用map这种数据结构来进行配置的，因为map是一种灵活，简单的适合一对一查找的数据结构。我们知道的数据结构，已经有了json和set。那map有什么特点。


/*
*   Json和map格式的对比
* */

//  map的效率和灵活性更好
let json = {
    name: 'json',
    age: '22',
};
console.log( json.age );        //  22

let map = new Map();
map.set( json, '张三' );
console.log( map )              //  Map(1) {{…} => "张三"}

map.set( '小明', json );
console.log( map );             //  Map(2) {{…} => "张三", "小明" => {…}}





/*
*   map 的 增删查
* */

//  取值
console.log( map.get(json) );       //  张三

//  删除 delete 的特定值:
map.delete( json );
console.log( map );                 //  Map(1) {"小明" => {…}}

//  size 属性
console.log( map.size );

//  查找是否存在 has
console.log( map.has('张三') );       //  false
console.log( map.has('小明') );       //  true

//  清除所有 clear()
map.clear();
console.log( map );                   //    Map(0) {}

//  map在现在开发中已经经常使用，它的灵活性和高效性是我们喜欢的。开发中试着去使用map吧
//  引入样式库
import 'package:flutter/material.dart';

//  入口
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      title: 'Welcome Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Welcome to Flutter')
        ),
        body: Center(
          child: Container(
            child: new Text('Hello Flutter', style: TextStyle(fontSize: 40.0),),
            
            //  Alignment 属性是针对 Container 内 child 的对齐方式，也就是容器字内容的对齐方式，并不是容器本身的对齐方式
            //  Alignment.center | centerLeft | centerRight | bottomCenter | bottomLeft | bottomRight | topLeft | topCenter | topRight
            alignment: Alignment.topLeft,

            width: 500.0,
            height: 400.0,
            // color: Colors.lightBlue,

            // padding: EdgeInsets.all(10.0),
            padding: EdgeInsets.fromLTRB(10.0, 30.0, 0.0, 0.0),

            // margin: EdgeInsets.all(10.0),
            margin: EdgeInsets.fromLTRB(10.0, 20.0, 5.0, 0.0),

            //  decoration 是 container 的修饰器，主要功能是设置背景和边框
            decoration: new BoxDecoration(
              //  这里在给 container 设置渐变色的时候，需要注释掉上面的 color，否则会起冲突
              gradient: const LinearGradient(
                colors: [Colors.lightBlue, Colors.greenAccent, Colors.purple]
              ),
              border: Border.all(width: 2.0, color: Colors.red)
            ),
          ),
        ),
      ),
    );
  }
}


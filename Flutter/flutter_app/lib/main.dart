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
            alignment: Alignment.center,

            width: 500.0,
            height: 400.0,
            color: Colors.lightBlue,
          ),
        ),
      ),
    );
  }
}


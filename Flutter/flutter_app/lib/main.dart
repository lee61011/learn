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
          child: Text(
            'TextAlign属性就是文本的对齐方式，它的属性值有如下几个',
            //  textAlign: TextAlign.center | TextAlign.left | TextAlign.right | TextAlign.start | TextAlign.end
            textAlign: TextAlign.left,

            //  maxLines: 设置最多显示的行数
            maxLines: 1,

            //  overflow: 设置文本溢出o
            //  overflow: TextOverflow.ellipsis | TextOverflow.clip | TextOverflow.fade
            overflow: TextOverflow.ellipsis,

            //  style:  设置样式  参考：https://docs.flutter.io/flutter/painting/TextStyle-class.html
            style: TextStyle(
              fontSize: 25.0,
              color: Color.fromARGB(255, 255, 150, 150),
              decoration: TextDecoration.underline,
              decorationStyle: TextDecorationStyle.dashed,
            ),
          ),
        ),
      ),
    );
  }
}


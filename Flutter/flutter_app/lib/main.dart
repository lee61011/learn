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
          title: Text('水平方向布局')
        ),
        body: new Row(
          children: <Widget>[
            new RaisedButton(
              onPressed: () {},
              color: Colors.redAccent,
              child: new Text('红色按钮')
            ),

            //  在按钮外面加上 Expanded 可以占据剩余宽度，类似于弹性盒子
            Expanded(child: new RaisedButton(
              onPressed: (){},
              color: Colors.orangeAccent,
              child: new Text('橙色按钮'),
            ),),

            new RaisedButton(
              onPressed: (){},
              color: Colors.pinkAccent,
              child: new Text('粉色按钮'),
            )
          ],
        )
    );
  }
}

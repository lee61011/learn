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
          title: Text('垂直方向布局')
        ),
        /* body: Column(

          //  主轴和副轴
          //    main轴：如果你用 column 组件，那垂直就是主轴；如果你用 row 组件，那么水平就是主轴
          //    cross轴：（副轴，是和主轴垂直的方向） 如果你用的是 row 组件，那么垂直就是副轴； Column 组件的副轴就是水平方向
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,

          children: <Widget>[
            Text('are you ok?'),
            Text("what's your problem?"),
            Text("what's your name?"),
          ],
        ) */

        //  页面居中显示
        body: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Center(child: Text('are you ok?')),
            Center(child: Text("what's your problem?")),
            // Expanded 包起来的占据页面剩余距离
            // Expanded(child: Center(child: Text("what's your problem?"))),
            Center(child: Text("what's your name?"))
          ],
        )
      )
    );
  }
}

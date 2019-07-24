//  引入样式库
import 'package:flutter/material.dart';

//  入口
void main() {
  runApp(MaterialApp(
    title: '导航演示1',
    home: new FirstScreen(),
  ));
}

class FirstScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: AppBar(title: Text('导航页面'),),
      body: Center(
        child: RaisedButton(
          child: Text('查看商品详情页面'),
          onPressed: (){
            //  Navigator.push 是跳转到下一个页面
            Navigator.push(context, new MaterialPageRoute(
              builder: (context) => new SecondScreen()
            ));
          }
        ),
      ),
    );
  }
}

class SecondScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('商品详情页面'),),
      body: Center(child: RaisedButton(
        child: RaisedButton(
          child: Text('返回'),
          onPressed: (){
            //  Navigator.pop 是返回到上一个页面
            Navigator.pop(context);
          },
        ),
      ),),
    );
  }
}
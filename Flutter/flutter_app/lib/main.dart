//  引入样式库
import 'package:flutter/material.dart';

//  入口
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {

    var card = new Card(
      child: Column(
        children: <Widget>[
          ListTile(
            title: new Text('吉林省吉林市昌邑区',style: TextStyle(fontWeight: FontWeight.w500),),
            subtitle: new Text('技术胖:123456789'),
            leading: new Icon(Icons.account_box, color: Colors.lightBlue,),
          ),
          new Divider(),
          ListTile(
            title: new Text('北京市海淀区中国科技大学', style: TextStyle(fontWeight: FontWeight.w500),),
            subtitle: new Text('技术胖:123456789'),
            leading: new Icon(Icons.account_box, color: Colors.lightBlue,),
          ),
          new Divider(),
          ListTile(
            title: new Text('河南省濮阳市百姓办公楼', style: TextStyle(fontWeight: FontWeight.w500),),
            subtitle: new Text('技术胖:123456789'),
            leading: new Icon(Icons.account_box, color: Colors.lightBlue,),
          ),
          new Divider(),  
        ],
      ),
    );

    return MaterialApp(
      title: 'Welcome Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('层叠布局')
        ),
        body: Center(child: card),
      )
    );
  }
}

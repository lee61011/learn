//  引入样式库
import 'package:flutter/material.dart';

void main()=>runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context){
    return Container(
      child: Image.asset('images/touxiang.jpg'),
    );
  }
}
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
            //  image.asset(资源图片) | network(网络资源图片) | file(本地图片) | memory(加载 Unit8List 资源图片)
            child: new Image.network(
              'http://blogimages.jspang.com/blogtouxiang1.jpg',
              // 'https://p3.ssl.qhimgs1.com/bdr/326__/t01f446ba25b5af3183.jpg',
              // scale: 1.0,

              //  fit: 根据父级容器控制图片的拉伸和挤压
              //  fit: BoxFit.fill | contain | cover | fitWidth | fitHeight | scaleDown
              fit: BoxFit.contain,

              //  图片的混合模式： color 是要混合的颜色，colorBlendMode 是混合模式
              color: Colors.greenAccent,
              colorBlendMode: BlendMode.darken,

              //  repeat 图片重复
              //  ImageRepeat.repeat | repeatX | repeatY
              repeat: ImageRepeat.repeat,
            ),
            width: 300.0,
            height: 200.0,
            color: Colors.lightBlue,
          ),
        ),
      ),
    );
  }
}


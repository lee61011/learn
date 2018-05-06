# ES6 开发环境的搭建

##  新建工程目录

- src 			//	书写 ES6 代码的文件夹
- dist 			//      利用 Babel 编译成的 ES5 代码的文件呢夹
- index.html

## 项目初始化

```
npm init -y			//	-y 表示全部默认同意

/*	执行完成后会在项目根目录下产生 package.json 文件	*/
{
  "name": "es6",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```



## 全局安装 Babel-cli

```
npm install -g babel-cli
```

## 本地安装 babel-preset-es2015 和 babel-cli

```
npm install --save-dev babel-preset-es2015 babel-cli
```

## 新建 .babelrc 文件

```
/*	在根目录下新建.babelrc文件	*/
{
    "presets":[
        "es2015"
    ],
    "plugins":[]
}

// 这个文件建立完成后，就可以使用下面这个命令将 ES6 转化为 ES5 了
// babel src/index.js -o dist/index.js
```

## 简化转换命令

```
/*   package.json 文件   */
{
  "name": "es6",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "babel src/index.js -o dist/index.js"	//	修改这一行
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.24.1",
    "babel-preset-es2015": "^6.24.1"
  }
}

//	完成后我们就可以使用 npm run build 命令来进行转换了
```


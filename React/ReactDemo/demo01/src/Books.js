import React, {Component, Fragment} from 'react'

class Books extends Component {
    render(){
        return(
            //  React 要求必须在一个组件的最外层进行包裹
            //  但是有时候我们的布局就偏不需要这层包裹，我们可以引入 Fragment 标签来替换 div 标签，在浏览器的 Elements 中查看，最外层已经没有包裹了
            <Fragment>
                <div><input /><button>增加书籍</button></div>
                <ul>
                    <li>JavaScript 高级程序设计第三版</li>
                    <li>Vue.js 实战</li>
                </ul>
            </Fragment>
        )
    }
}

export default Books
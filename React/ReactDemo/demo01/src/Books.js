import React, {Component, Fragment} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import axios from 'axios'
import BookItem from './BookItem'
import Donghua from './Donghua'

class Books extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['JavaScript 高级程序设计第三版', 'Vue.js 实战']
        }
    }

    componentDidMount() {
        axios.get('https://www.easy-mock.com/mock/5b336ab6e312d1110939a921/SmileVue/getBookName')
            .then(res => {
                console.log('请求成功：' + JSON.stringify(res.data.data))

                this.setState({
                    list: res.data.data
                })
            })
            .catch(error => console.log('请求失败：' + error))
    }

    render(){
        return(
            //  React 要求必须在一个组件的最外层进行包裹
            //  但是有时候我们的布局就偏不需要这层包裹，我们可以引入 Fragment 标签来替换 div 标签，在浏览器的 Elements 中查看，最外层已经没有包裹了
            <Fragment>
                <div>
                    <input 
                        value={this.state.inputValue} 
                        onChange={this.inputChange.bind(this)}
                        ref={(input)=>{this.input=input}} />
                    <button onClick={this.addList.bind(this)}>增加书籍</button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    /* 
                                        <li
                                        key={index + item}
                                        onClick={this.deleteItem.bind(this, index)}>{item}</li>
                                    */

                                    <CSSTransition
                                        timeout={1000}
                                        classNames='msg-text'
                                        unmountOnExit
                                        appear={true}
                                        key={index+item}
                                    >
                                        <BookItem
                                            key={index + item}
                                            content={item}
                                            index={index}
                                            deleteItem={this.deleteItem.bind(this)} />
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>

                <Donghua />
            </Fragment>
        )
    }

    inputChange(e) {
        // console.log(e.target.value)
        this.setState({
            //  inputValue: e.target.value
            //  通过 ref 属性设置值
            inputValue: this.input.value
        })
    }
    addList(){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, ()=>{
            console.log(this.ul.querySelectorAll('div').length)
        })

        //  setState 是一个异步函数，还没等虚拟 DOM 渲染，console.log() 就已经执行了，所以返回的数量会少一个；可以在上面的 setState 回调函数中解决
        //  console.log(this.ul.querySelectorAll('div').length);
    }
    deleteItem(index) {
        //  React 是禁止直接操作 state 的
        //  this.state.list.splice(index, 1)

        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default Books
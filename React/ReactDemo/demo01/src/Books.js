import React, {Component, Fragment} from 'react'
import BookItem from './BookItem'

class Books extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['JavaScript 高级程序设计第三版', 'Vue.js 实战']
        }
    }

    render(){
        return(
            //  React 要求必须在一个组件的最外层进行包裹
            //  但是有时候我们的布局就偏不需要这层包裹，我们可以引入 Fragment 标签来替换 div 标签，在浏览器的 Elements 中查看，最外层已经没有包裹了
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加书籍</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                /* 
                                    <li
                                    key={index + item}
                                    onClick={this.deleteItem.bind(this, index)}>{item}</li>
                                */

                                <div>
                                    <BookItem 
                                        key={index+item} 
                                        content={item}
                                        index={index}
                                        deleteItem={this.deleteItem.bind(this)}/>
                                </div>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    inputChange(e) {
        // console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }
    addList(){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
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
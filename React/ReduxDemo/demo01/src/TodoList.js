import React, { Component } from 'react';
import 'antd/dist/antd.css'
import axios from 'axios'
// import { Input, Button, List } from 'antd'
import TodoListUI from './TodoListUI'

import store from './store'
import { changeInputAction, addItemAction, deleteItemAction, getListAction } from './store/actionCreators'

/* const data = [
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
] */

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)

        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    render() { 
        return (
            <TodoListUI
                inputValue = {this.state.inputValue}
                list = {this.state.list}
                changeInputValue = {this.changeInputValue}
                clickBtn = {this.clickBtn}
                deleteItem = {this.deleteItem}
            />
        )
    }

    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            const data = res.data
            const action = getListAction(data)
            store.dispatch(action)
        })
    }

    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    clickBtn() {
        const action = addItemAction()
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    deleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}
 
export default TodoList;
import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      list: []
    }
  }

  render() {
    return (
      /* 这里使用 Fragment 标签代替 div 根元素，在页面结构中不会渲染出来 */
      <Fragment>
        <div>
          <input 
            value={ this.state.inputValue } 
            onChange={ this.handleInputChange.bind(this) } />
          <button onClick={ this.handleBtnClick.bind(this) }>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index)=>{
              return(
                <div>
                  {/* <li key={index}
                  onClick={ this.handleItemDelete.bind(this, index) }>{ item }</li> */}
                  <TodoItem 
                    content={item}
                    index={index}
                    deleteItem={this.handleItemDelete.bind(this)}/>  
                </div>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  /* 增加功能 */
  handleBtnClick(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  /* 删除功能 */
  handleItemDelete(index) {
    /* console.log(index) */
    const list = [...this.state.list]
    list.splice(index, 1)

    this.setState({
      list: list
    })
  }
}

export default TodoList

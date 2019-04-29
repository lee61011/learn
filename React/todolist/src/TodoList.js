import React, { Component, Fragment } from 'react'

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
            onChange={ this.handerInputChange.bind(this) } />
          <button>提交</button>
        </div>
        <ul>
          <li>Learn React</li>
          <li>Learn Vue</li>
        </ul>
      </Fragment>
    )
  }

  handerInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
}

export default TodoList

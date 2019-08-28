import React, { Component } from 'react';
import store from './store'

class TodoList extends Component {
    
    constructor(props){
        super()
        this.state = store.getState()
    }

    render() { 
        return ( 
            <div>
                <div>
                    <input value={this.state.inputValue}/>
                    <button>添加</button>
                </div>
                <ul>
                    <li>Hello World</li>
                    <li>Hello React</li>
                    <li>Hello Vue</li>
                </ul>
            </div> 
        );
    }
}
 
export default TodoList;
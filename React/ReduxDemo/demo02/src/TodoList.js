import React, { Component } from 'react';
import store from './store'
import { connect } from 'react-redux'

class TodoList extends Component {
    
    constructor(props){
        super()
        this.state = store.getState()
    }

    render() { 
        return ( 
            <div>
                <div>
                    <input value={this.props.inputValue}/>
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

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}
 
export default connect(stateToProps, null)(TodoList);
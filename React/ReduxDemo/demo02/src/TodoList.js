import React, { Component } from 'react';
import store from './store'
import { connect } from 'react-redux'

class TodoList extends Component {
    
    constructor(props){
        super(props)
        this.state = store.getState()
    }

    render() { 
        return ( 
            <div>
                <div>
                    <input 
                        value={this.props.inputValue}
                        onChange={this.props.inputChange}
                    />
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

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e){
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        }
    }
}
 
export default connect(stateToProps, dispatchToProps)(TodoList);
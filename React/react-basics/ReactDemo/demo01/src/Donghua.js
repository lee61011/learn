import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import './style.css'

class Donghua extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: true
        }
        this.toToggole = this.toToggole.bind(this)
    }
    render() { 
        return ( 
            <div>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="msg-text"
                    unmountOnExit>
                    <h2>显示</h2>
                </CSSTransition>
                <div><button onClick={this.toToggole}>显示 / 隐藏</button></div>
            </div>
        );
    }

    toToggole() {
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }
}
 
export default Donghua;
import React, { Component } from 'react';
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
                <h2 className={this.state.isShow ? 'show' : 'hide'}>显示</h2>
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
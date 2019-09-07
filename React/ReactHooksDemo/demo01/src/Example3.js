//  使用 Class 的方式为计数器增加生命周期函数

/* import React, { Component } from 'react';

class Example3 extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    componentDidMount(){
        console.log(`ComponentDidMount=>You clicked ${this.state.count} times`)
    }
    componentDidUpdate(){
        console.log(`ComponentDidUpdata=>You clicked ${this.state.count} times`)
    }

    render() { 
        return ( 
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={this.addCount.bind(this)}>Click me</button>
            </div>
         );
    }
    addCount(){
        this.setState({count: this.state.count+1})
    }
}
 
export default Example3; */



//  用 useEffect 函数代替生命周期函数
import React, { useState, useEffect } from 'react'

function Example3() {
    const [ count, setCount ] = useState(0)

    useEffect(()=>{
        console.log(`useEffect=>You Clicked ${count} times`)
    })

    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>Click Me</button>
        </div>
    )
}

export default Example3
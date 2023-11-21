import React, { Component } from 'react'

class App extends Component {
    render(){
        return(
            <div>Hello { false ? 'World!' : 'React!' }</div>
        )
    }
}

export default App;
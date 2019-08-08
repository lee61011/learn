import React, { Component } from 'react';

class BookItem extends Component {
    state = {  }
    render() { 
        return ( 
            <div onClick={this.handleClick.bind(this)}>{this.props.content}</div>
         );
    }

    handleClick(){
        //  console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}
 
export default BookItem;
import React, { Component } from 'react';
import PropTypes from 'prop-types'

class BookItem extends Component {
    state = {}
    render() { 
        return ( 
            <li onClick={this.handleClick.bind(this)}>
                {this.props.content}
            </li>
         );
    }

    handleClick(){
        //  console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}

BookItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number.isRequired
}
 
export default BookItem;
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list: [
                {uid: 123, title: 'Title-123'},
                {uid: 456, title: 'Title-456'},
                {uid: 789, title: 'Title-789'}
            ]
        }
    }
    render() { 
        /* return ( 
            <ul>
                {
                    this.state.list.map((item, index)=>{
                        return (
                            <li key={index}>
                                <Link to={'/list/' + item.uid}> {item.title} </Link>
                            </li>
                        )
                    })
                }
            </ul>
        ); */

        return <Redirect to="/home/" />
    }
}
 
export default Index;
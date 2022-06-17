import React from "react";


export default class Welcome2 extends React.Component{
    render() {
        return (
            <>
                <p>Welcome, {this.props.name}</p>
                <p>Your age is {this.props.age}</p>
            </>
        )
    }
}

Welcome2.defaultProps ={
    name : 'Mattia'
}
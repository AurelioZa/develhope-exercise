import React from "react";


export default class Welcome3 extends React.Component{
    render() {
        return (
            <>
                <p>Welcome, {this.props.name}</p>
                <p>Your age is {this.props.age}</p>
            </>
        )
    }
}

Welcome3.defaultProps ={
    name : 'Mattia'
}
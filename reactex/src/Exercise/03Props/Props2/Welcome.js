import React from "react";


export default class Welcome1 extends React.Component{
    render() {
        return (
            <>
                <p>Welcome, {this.props.name}</p>
            </>
        )
    }
}

Welcome1.defaultProps ={
    name : 'Mattia'
}
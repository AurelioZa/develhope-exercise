import React from "react";
import Age from "./Age";


export default class Welcome4 extends React.Component{
    render() {
        return (
            <>
                <p>Welcome, {this.props.name}</p>
                <Age age={this.props.age}/>
            </>
        )
    }
}

Welcome4.defaultProps ={
    name : 'Mattia'
}
import React from "react";
import Age from "./Age";


export default class Welcome5 extends React.Component{
    render() {
        return (
            <>
                <p>Welcome, {this.props.name}</p>
                {this.props.age > 18 && <Age age={this.props.age}/>}
            </>
        )
    }
}

Welcome5.defaultProps ={
    name : 'Mattia'
}
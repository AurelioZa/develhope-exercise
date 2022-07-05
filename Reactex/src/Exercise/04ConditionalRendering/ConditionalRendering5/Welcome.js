import React from "react";
import Age from "./Age";


export default class Welcome9 extends React.Component{
    render() {
        let ageNum = this.props.age;
        let name = this.props.name;
        return (
            <>
                <p>Welcome, {name}</p>
                <Age age={ageNum} />
            </>
        )
    }
}

Welcome9.defaultProps ={
    name : 'Mattia'
}
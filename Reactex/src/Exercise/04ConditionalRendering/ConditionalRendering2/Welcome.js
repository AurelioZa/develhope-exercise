import React from "react";
import Age from "./Age";


export default class Welcome6 extends React.Component{
    render() {

        let ageNum = this.props.age;
        let name = this.props.name;
        return (
            <>
                <p>Welcome, {name}</p>
                {ageNum && <Age age={ageNum}/>}
            </>
        )
    }
}

Welcome6.defaultProps ={
    name : 'Mattia'
}
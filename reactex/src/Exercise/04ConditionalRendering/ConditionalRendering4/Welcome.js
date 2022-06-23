import React from "react";
import Age from "./Age";


export default class Welcome8 extends React.Component{

    render() {
        let ageNum = this.props.age;
        let name = this.props.name;
        return (
            <>
                <p>Welcome, {name}</p>
                {
                    name === 'John'
                    && ageNum < 65
                    && ageNum > 18
                    && <Age age={ageNum}/>
                }
            </>
        )
    }
}

Welcome8.defaultProps ={
    name : 'Mattia'
}
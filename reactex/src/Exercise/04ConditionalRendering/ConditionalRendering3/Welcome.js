import React from "react";
import Age from "./Age";


export default class Welcome7 extends React.Component{
    render() {
        let ageNum = this.props.age;
        let name = this.props.name;
        return (
            <>
                <p>Welcome, {name}</p>
                {
                    ageNum < 65
                    && ageNum > 18
                    && <Age age={ageNum}/>
                }
            </>
        )
    }
}

Welcome7.defaultProps ={
    name : 'Mattia'
}
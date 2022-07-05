import React from "react";

export default class Welcomename extends React.Component{
    render() {
        return(
            <h1>
                Salve, {this.props.name}
            </h1>
        )
    }
}
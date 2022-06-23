import React from "react";
import Welcomename from "./Welcomename";

export class InteractiveWelcome extends React.Component{
    state = {
        name: ''
    }
    handleNameInput = (event) => {
        const value = event.target.value;

        this.setState(
            {name: value}
        )
    }
    render() {
        return(
            <>
                <h1>Forms - 01:</h1>
                <input name={"name"} value={this.state.name} onChange={this.handleNameInput}/>
                <Welcomename name={this.state.name}/>
            </>
        )
    }
}
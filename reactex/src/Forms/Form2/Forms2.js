import React from "react";
import Welcomename from "./Welcomename";


export class Login extends React.Component{
    state = {
        username: '',
        password: '',
        remember: false
    }
    handleInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const remember = event.target.checked
        const type = event.target.type

        this.setState(
            {
                [name]: type !== 'checkbox' ? value : remember
            }

        )
    }

    render() {
        return(
            <>
                <h1>Forms - 02:</h1>
                <h3>Username: </h3>
                <input type={"text"} name={"username"} value={this.state.username} onChange={this.handleInput}/>
                <h3>Password: </h3>
                <input type={"password"} name={"password"} value={this.state.password} onChange={this.handleInput}/>
                <input type={"checkbox"} name={"remember"} checked={this.state.remember} onChange={this.handleInput}/>
                <Welcomename name={this.state.username}/>
            </>
        )
    }
}
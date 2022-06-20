import React from "react";
import Welcomename from "./Welcomename";


export class LoginStyle extends React.Component{
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

    loginButton = (event) => {
        event.preventDefault()
        console.log(this.state)
    }



    render() {
        const passInput = {
            backgroundColor: (this.state.password.length < 8) ? 'red' : 'green'
        }

        return(
            <>
                <h1>Styling Component - 03:</h1>
                <h3>Username: </h3>
                <input type={"text"} name={"username"} value={this.state.username} onChange={this.handleInput}/>
                <h3>Password: </h3>
                <input style={passInput} type={"password"} name={"password"} value={this.state.password} onChange={this.handleInput}/>
                <input type={"checkbox"} name={"remember"} checked={this.state.remember} onChange={this.handleInput}/>
                <button type={"submit"} onClick={this.loginButton} disabled={(this.state.username === "" || this.state.password === "")}>Login</button>
                <Welcomename name={this.state.username}/>
            </>
        )
    }
}
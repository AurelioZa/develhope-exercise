import React, {useState} from "react";

export class UncontrolledLogin extends React.Component{
    state = {
        username: '',
        password: '',
        remember: false
    }

    loginButton = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    resetButton = (event) =>{

        this.setState(
            {
                username: '',
                password: '',
                remember: false,
            }
        )
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.value

    }

    render() {
        return(
            <>
                <h1>Forms - 05:</h1>
                <form onSubmit={this.handleFormSubmit}>

                <h3>Username: </h3>
                <input type={"text"} name={"username"} />

                <h3>Password: </h3>
                <input type={"password"} name={"password"} />
                <input type={"checkbox"} name={"remember"}  />
                <div>
                <button type={"submit"} onClick={this.loginButton}>Login</button>
                <button onClick={this.resetButton}>Reset</button>
                </div>
                </form>
            </>
        )
    }
}
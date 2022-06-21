import React, {useState} from "react";
import Welcomename from "./Welcomename";


export default function LoginState(){

    const [login, setLogin] = useState(
    {
        username: '',
        password: '',
        remember: false
    })

    const handleInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const remember = event.target.checked
        const type = event.target.type

        return (
            setLogin(
            (login) => {
                return(
                    { ...login, [name]: type !== 'checkbox' ? value : remember }
                )
            })
        )
    }

    const loginButton = (event) => {
        event.preventDefault()
        console.log(event.state)
    }

    return(
            <>
                <h1>useState - 02:</h1>
                <h3>Username: </h3>
                <input type={"text"} name={"username"} value={login.username} onChange={handleInput}/>
                <h3>Password: </h3>
                <input type={"password"} name={"password"} value={login.password} onChange={handleInput}/>
                <input type={"checkbox"} name={"remember"} checked={login.remember} onChange={handleInput}/>
                <button type={"submit"} onClick={loginButton} disabled={(login.username === "" || login.password === "")}>Login</button>
                <Welcomename name={login.username}/>
            </>
        )
}
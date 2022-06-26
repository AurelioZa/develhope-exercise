import React, {useState} from "react";
import { Link, Outlet } from "react-router-dom";

export default function GithubUserListLink(){
    const [user, setUser] = useState('')
    const [userAdd, setUserAdd] = useState([])

    const handleInput = (event) =>{
        setUser(event.target.value);
    }

    const handleUserAdd = () =>{
        setUserAdd((prevState) => [...prevState, user])
    }

    return(
        <>
            <div>
                <h1>React Router - 6</h1>
                <input type="text" onChange={handleInput}/>
                <button onClick={handleUserAdd}>Send</button>
                {userAdd.map((name, index) => (
                   <Link key={index} to={user}> User {index}: {user}</Link>
                ))}
                <Outlet />
            </div>
        </>
    )
}
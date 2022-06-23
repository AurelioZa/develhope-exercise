import React, {useState} from "react";
import GithubUser from "../UseEffect3/GithubUser";

export default function GithubUserList(){
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
                <h1>useEffect - 4</h1>
                <input type="text" onChange={handleInput}/>
                <button onClick={handleUserAdd}>Send</button>
                {userAdd.map((name, index) => <GithubUser key={index} username={name}/>)}
            </div>
        </>
    )
}
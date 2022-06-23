import React, {useEffect, useState} from "react";


export default function GithubUser({username}){
    const [user, setUser] = useState('')

    const getUserContent = async(usedrname) => {
        const response = await fetch('https://api.github.com/users/AurelioZa')
            .then(response => response.json())
            .then(users => setUser(users))
            .catch(err => console.log(err));
    }


    useEffect(
        () => {
            getUserContent(username)
        },[username]
    )


    return(
        <>
            <div>
                <h1>User GitHub props:</h1>
                <h2>{user.login}</h2>
                <h3>{user.name}</h3>
            </div>
        </>
    )
}
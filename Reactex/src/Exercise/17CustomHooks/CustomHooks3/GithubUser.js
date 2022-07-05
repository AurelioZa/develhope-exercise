import React from "react";
import {useGithubUser} from "./useGithubUser";


export default function GithubUserHook({ username }){
    const {users, loading, error} = useGithubUser(username)


    return(
        <>
            <div>
                {loading && <h1>Loading...</h1>}
                {error && <h1>Error... </h1>}
                <h1>User GitHub props:</h1>
                {users && <h2>{users.login}</h2>}
                {users && <h3>{users.name}</h3>}
            </div>
        </>
    )
}
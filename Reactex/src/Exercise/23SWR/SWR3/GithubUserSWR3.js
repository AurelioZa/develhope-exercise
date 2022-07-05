import React from "react";
import {useGithubUserSWR3} from "./useGithubUser3";



export default function GithubUserSWR3({ username }){
    const {users, loading, error, onRefresh} = useGithubUserSWR3(username)


    return(
        <>
            <div>
                <button onClick={onRefresh}>Refresh</button>
                {loading && <h1>Loading...</h1>}
                {error && <h1>Error... </h1>}
                <h1>SWR User GitHub props:</h1>
                {users && <h2>{users.login}</h2>}
                {users && <h3>{users.name}</h3>}
            </div>
        </>
    )
}
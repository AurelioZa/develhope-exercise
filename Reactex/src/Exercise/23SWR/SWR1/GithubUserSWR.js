import React from "react";
import {useGithubUserSWR} from "./useGithubUser";


export default function GithubUserSWR({ username }){
    const {users, loading, error} = useGithubUserSWR(username)


    return(
        <>
            <div>
                {loading && <h1>Loading...</h1>}
                {error && <h1>Error... </h1>}
                <h1>SWR User GitHub props:</h1>
                {users && <h2>{users.login}</h2>}
                {users && <h3>{users.name}</h3>}
            </div>
        </>
    )
}
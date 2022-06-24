import React, {useEffect, useState} from "react";


export default function GithubUser({ username }){
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchGithubUser(username) {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch("https://api.github.com/users/${username}")

            const json = await response.json()
            setUser(json)
        } catch (error) {
            setError(error)
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(
        () => {
            fetchGithubUser(username)
        },[username]
    )


    return(
        <>
            <div>
                {loading && <h1>Loading...</h1>}
                {error && <h1>Error... </h1>}
                <h1>User GitHub props:</h1>
                {user && <h2>{user.login}</h2>}
                {user && <h3>{user.name}</h3>}
            </div>
        </>
    )
}
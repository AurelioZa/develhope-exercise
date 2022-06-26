import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUserSWR3(username) {
    const {user, error, mutate} = useSWR('https://api.github.com/users/${username}', username !== null ? fetcher : null)

    const handleRefreshUsers = () => {
        mutate()
    }

    return {user, error, loading: !user && !error, onRefresh: handleRefreshUsers()}
}
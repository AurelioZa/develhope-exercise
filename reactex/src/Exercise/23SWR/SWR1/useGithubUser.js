
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUserSWR(username) {
    const {user, error} = useSWR('https://api.github.com/users/${username}', fetcher)

    return {user, error, loading: !user && !error}
}
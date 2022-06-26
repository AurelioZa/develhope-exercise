import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUserSWR2(username) {
    const {user, error} = useSWR('https://api.github.com/users/${username}', username !== null ? fetcher : null)

    return {user, error, loading: !user && !error}
}
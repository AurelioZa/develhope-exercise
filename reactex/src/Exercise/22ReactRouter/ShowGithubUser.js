import { useParams } from 'react-router-dom';
import GithubUser from '../16UseEffect/UseEffect3/GithubUser';

export default function ShowGithubUser(){
    const { username } = useParams();

    return <GithubUser username={username} />
}
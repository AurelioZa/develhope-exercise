import {Link} from "react-router-dom";

export default function Error404(){
    return(
        <>
            <h1>ERROR:</h1>
            <h1>Page not Found</h1>
            <Link to={"/"}>Home</Link>
        </>
    )
}
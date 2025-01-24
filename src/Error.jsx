import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";


function Error(){
    const err = useRouteError();
    console.log(err);

    const status = err?.status || "Unknown Status";
    const message = err?.error?.message || "Something went wrong. Please try again later.";

    return(

        
        <>
            <h1>Error page</h1>
            <h2>{status} - {message}</h2>
            <p>
                <Link to="/"><button>Go back to the homepage</button></Link>
            </p>
        </>

        

    )
}

export default Error;
import { Link } from "react-router-dom";
import './index.css'


function Nav(){
    return(
        <>
        <ul className="nav">
            <Link to="/"><li>Home</li></Link>
            <Link to="/browse"><li>Browse</li></Link>
            <Link to="/add"><li>Add</li></Link>
        </ul>
        </>
    )
}

export default Nav;
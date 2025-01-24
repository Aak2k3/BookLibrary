import { Books } from "./Books";
import './index.css'
import { Link } from "react-router-dom";

function BookList(props){

    return(
        <>
            <div className="bookList">
            {
                props.booksData.map(data=> <Link to={`/${data.id}`}><Books key={data.id} bookDetails={data}> </Books></Link> )
            }
            </div>

        </>
    )
}

export default BookList;
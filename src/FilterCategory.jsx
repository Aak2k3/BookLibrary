import { useParams } from "react-router-dom";
import BookList from "./BookList";
import Home from "./Home";
import { mockBooks } from "./assets/mockData";
import { Link } from "react-router-dom";




function FilterCategory(){
    const params = useParams()
    
    const filteredBooks = mockBooks.filter(book => book.genre.includes(params.id));
    
    return(
        <>
          <h1>Books in {params.id} Category</h1>
          <BookList booksData={filteredBooks} />
          <Link to="/"><button>Go Home</button></Link>
        </>
    )
}

export default FilterCategory;
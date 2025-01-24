import { useState } from "react";
import { Books } from "./Books";
import { mockBooks } from "./assets/mockData";
import BookList from "./BookList";
import { Outlet } from "react-router-dom";
import "./index.css"


function Browse(){

const [filteredBooks, setfilteredBooks] = useState(mockBooks); 
const [searchText, setSearchText] = useState("");

    function handleSearch(){
        const filteredBooks = mockBooks.filter((book => book.title.toLowerCase().includes(searchText.toLowerCase()) || book.author.toLowerCase().includes(searchText.toLowerCase())))
        !searchText ? setfilteredBooks(mockBooks): setfilteredBooks(filteredBooks);
    }


    return(
        <>
        <h1 className="heading">Browse Your Books</h1>

        <div className="searchBar">
            <input type="text" onChange={(e)=> setSearchText(e.target.value)} placeholder="Search by Title or Author" />
            <button onClick={handleSearch}>Search</button>
        </div>

        <BookList booksData={filteredBooks} />
        </>
    )
}

export default Browse;
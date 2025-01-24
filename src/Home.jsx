import './index.css'
import BookList from './BookList';
import { mockBooks } from './assets/mockData';
import { Link } from 'react-router-dom';


function Home(){

    const genres = [];

    mockBooks.forEach(book => {
        book.genre.forEach(genre => {
            if(!genres.includes(genre)){
                genres.push(genre)
            }
        })
    })

    return(
        <>
        <h1 className='heading'>Home Page</h1>
        <div className='categories'>
    
            <ul className='catList'>
                {
                    genres.map((genre,index)=>{
                        return <Link  key={index} to ={`/books/${genre}`}><li>{genre}</li></Link>
                    })
                }
            </ul>
        </div>

        <BookList booksData={mockBooks} />

        </>
    )
};

export default Home;
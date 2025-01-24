import { useParams } from "react-router-dom";
import { mockBooks } from "./assets/mockData";
import "./index.css"
import { Link } from "react-router-dom";

function BookDetails(){

    const params = useParams();
    console.log(params)
    const num = (params.id) - 1;

    return(
        <>
        <div className="bookDetails">
            <div><h1 className="title">{mockBooks[num].title}</h1></div>
            <div className="cover-image font">
                <img src={mockBooks[num].cover_image} alt="Book Cover" width="222px" height="333px" />
            </div>
            <div className="author font">
                <strong>Author:</strong> {mockBooks[num].author}
            </div>
            <div className="publication-year font">
                <strong>Publication Year:</strong> {mockBooks[num].publication_year}
            </div>
            <div className="genre font">
                <strong>Genre:</strong> {mockBooks[num].genre.join(', ')}
            </div>
            <div className="description font">
                <strong>Description:</strong> {mockBooks[num].description}
            </div>
            <div className="rating">
                <strong>Ratings:</strong> {mockBooks[num].rating}
            </div>
            

        </div>
        <div className="button">
        <Link to="/"><button>Go Home</button></Link>
        <Link to="/browse"><button>Browse More</button></Link>
        </div>
        </>
    )
}

export default BookDetails;
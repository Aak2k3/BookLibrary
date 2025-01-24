import './index.css'

export function Books(props){
    return(
        <>

        <div className="book">
        <div className="bookImage"><img src={props.bookDetails.cover_image} alt="" width="200px" height="200px" />;</div>
        <div className="description">
            <h2>{props.bookDetails.title}</h2>
            <p className='author'>{props.bookDetails.author}</p>
            <p>{props.bookDetails.description}</p>
            
        </div>
        <div className="details">
                View Details
            </div>
        </div>
        </>
    )
}
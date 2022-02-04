import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const BookCard = (props) => {
    const book = props.book;

    return(
        <div className="col-12 col-sm-6 col-lg-3 col-xl-2 card-container mx-auto">
            <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" className='book-image'/>
            <div className="desc">
                <h2>
                    <Link to={`/show-book/${book._id}`}>
                        { book.title }
                    </Link>
                </h2>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
            </div>
        </div>
    );
}

export default BookCard;
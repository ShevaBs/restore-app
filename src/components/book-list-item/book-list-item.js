import React from 'react';
import { Link } from 'react-router-dom';

import './book-list-item.css';

const BookListItem = ({books, onAddedToCart}) => {

  const {author, title, price, coverImage} = books;
  
  return (
    <div className='book-list-item'> 
      <Link className='book-cover'>
       <img src={coverImage} alt="coverimage"/>
      </Link>
      <div className='book-details'>
        <Link className='book-title'>{title}</Link>
        <div className='book-author'>{author}</div>
        <div className='book-price'>{price}$</div>
        <button 
          onClick={onAddedToCart}
          className='btn btn-info'>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default BookListItem;
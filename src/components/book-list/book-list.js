import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'; 
import BookListItem from '../book-list-item';
import {withBookstoreService} from '../hoc';
import {fetchBooks, bookAddedToCart} from '../../actions'
import {compose} from '../../utils';
import Spinner from '../spinner';

import './book-list.css';
import ErrorIndicator from '../error-indicator';

const BookList = ({books, onAddedToCart}) => {

  const items = books.map(book => {
    return (
      <li key={book.id}>
        <BookListItem 
          books={book}
          onAddedToCart={() => onAddedToCart(book.id)}/>
      </li>
    )
  });

  return (
    <ul className='book-list'> 
      {items}
    </ul>
  );
}; 

const BookListContainer = ({
  books, error, loading, fetchBooks, onAddedToCart
}) => {

  useEffect(() =>{
    fetchBooks();
  }, [fetchBooks]);
 
  if(loading) {
    return <Spinner/>;
  }
  
  if(error) {
    return <ErrorIndicator/>
  }
  
  return <BookList books={books} onAddedToCart={onAddedToCart}/>
}

const mapStateToProps = ({bookList: {books, loading, error}}) => {
  return {books, loading, error}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {bookstoreService} = ownProps;
  return bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    onAddedToCart: bookAddedToCart
  }, dispatch)
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)


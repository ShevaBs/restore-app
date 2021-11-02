const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  }
}

const booksLoaded = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks
  }
}

const booksError = (err) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: err
  }
}

const fetchBooksOld = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(err => dispatch(booksError(err)));
}

const fetchBooks = (bookstoreService) => () => (dispatch) => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(err => dispatch(booksError(err)));
}

const bookAddedToCart = (bookId) => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: bookId
  }
}

const bookCountDecrease = (bookId) => {
  return {
    type: "BOOK_COUNT_DECREASE",
    payload: bookId
  }
}

const bookRemoveFromCart = (bookId) => {
  return {
    type: "BOOK_REMOVE_FROM_CART",
    payload: bookId
  }
}

export {
  fetchBooks,
  bookAddedToCart,
  bookCountDecrease,
  bookRemoveFromCart
};

import React from 'react';
import BookList from '../book-list';
import CartPage from './cart-page';


const HomePage = () => {
  return (
    <div>
      <BookList/>
      <CartPage/>
    </div>
  )
}

export default HomePage;

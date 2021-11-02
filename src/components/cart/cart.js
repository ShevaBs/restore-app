import React from 'react';
import { Link } from 'react-router-dom';

import './cart.css';

const Cart = () => {
  return (
    <Link to='/cartpage/' className="cart">
      <i className="cart-icon fa fa-shopping-cart" />
      5 items (200$)
    </Link>
  )
};

export default Cart;

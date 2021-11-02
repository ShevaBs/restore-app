import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../cart/cart';

import './header.css';

const Header = () => {
  return (
    <header className='d-flex justify-content-between'>
      <Link to='/' className='header__logo'>ReStore</Link>
      <Cart/>
    </header>
  )
};

export default Header;
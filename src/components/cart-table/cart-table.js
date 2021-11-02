import React from 'react';
import './cart-table.css';
import {connect} from 'react-redux';
import {
  bookAddedToCart,
  bookCountDecrease,
  bookRemoveFromCart
} from '../../actions'

const CartTable = ({item, total, onDec, onInc, onDel}) => {
  
  const renderRow = (book, idx) => {
    
    const {id, title, count, price} = book;

    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${price}</td>
        <td>
          <button 
            onClick={() => onDel(id)}
            className='btn btn-outline-danger btn-sm float-right'>
            <i className='fa fa-trash-o'></i>
          </button>
          <button 
            onClick={() => onInc(id)} 
            className='btn btn-outline-success btn-sm float-right'>
            <i className='fa fa-plus-circle'></i>
            </button>
          <button 
            onClick={() => onDec(id)}
            className='btn btn-outline-warning btn-sm float-right'>
            <i className='fa fa-minus-circle'></i>
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className='cart-table'>
      <h2>Your Order</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

       <tbody>
          {item.map((book, idx) => renderRow(book,idx))}
       </tbody>
      </table> 
      <div className='total'>Total: ${total}</div>
    </div>
  )
};

const mapStateToProps = ({shoppingCart: {itemsCart, totalPrice}}) => {
  return {
    item: itemsCart,
    total: totalPrice
  }
}

const mapDispatchToProps = {
  onDec: bookCountDecrease,
  onInc: bookAddedToCart,
  onDel: bookRemoveFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
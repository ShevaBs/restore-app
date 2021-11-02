const updateItemsCart = (itemsCart, item, idx) => {
  if(idx === -1) {
    return [
      ...itemsCart,
      item
    ]
  }

  if(item.count === 0) {
    return [
      ...itemsCart.slice(0, idx),
      ...itemsCart.slice(idx + 1)
    ]
  }

  return [
    ...itemsCart.slice(0, idx),
    item,
    ...itemsCart.slice(idx + 1)
  ]
}

const createItem = (book, item, quantity) => {
  if(item) {
    return {
      ...item,
      count: item.count + quantity,
      price: item.price + quantity * book.price
    }
  } 

  return{
    id: book.id,
    title: book.title,
    count: 1,
    price: book.price,
  }
};

const updateCartOrder = (state, bookId, quantity) => {

  const { bookList: {books}, shoppingCart: {itemsCart} } = state;
  
  const book = books.find( item => item.id === bookId );
  const itemIdx = itemsCart.findIndex(item => item.id === bookId);
  const item = itemsCart[itemIdx];
  const newItem = createItem(book, item, quantity);
    
  return {
    itemsCart: updateItemsCart(itemsCart, newItem, itemIdx),
    totalPrice: state.totalPrice + newItem.price 
  }
}

const updateShoppingCart = (state, action) => {

  if (state === undefined) {
    return {
      itemsCart: [],
      totalPrice: 0
    }
  }

  switch (action.type) {
    case "BOOK_ADDED_TO_CART":
      return updateCartOrder(state, action.payload, 1);

    case "BOOK_COUNT_DECREASE":
      return updateCartOrder(state, action.payload, -1);
      
    case 'BOOK_REMOVE_FROM_CART':
      const item = state.shoppingCart.itemsCart.find(item => item.id === action.payload);
      return updateCartOrder(state, action.payload, -item.count);

    default:
      return state.shoppingCart
  }
}

export default updateShoppingCart;
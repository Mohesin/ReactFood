import { useReducer } from "react";
import CartContext from "./cart-context";


const defaultCartState ={
    items:[],
    totalAmount : 0,
}

const cartReducer = (state,action)=>{
    if(action.type === 'ADD_ITEM_TO_CART'){
          const updatedItems = state.items.concat(action.item);
          const newTotalAmount =  state.totalAmount + action.item.price * action.item.amount;
          return {
            items :updatedItems,
            totalAmount :newTotalAmount,
          }
    }
    if(action.type === 'REMOVE_ITEM_TO_CART'){

    }
     return defaultCartState
}

const CartProvider = (props) => {
     const [cartState , dispatchCartAction]=  useReducer(cartReducer, defaultCartState)
        
         
  const addItemToCartHandler = (item) => {
    dispatchCartAction({type : "ADD_ITEM_TO_CART", item:item})
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type : "REMOVE_ITEM_TO_CART", id : id})
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

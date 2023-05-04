import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = props => {
  const cartCtx = useContext(CartContext)

  const TotalAmount = `	₹${cartCtx.totalAmount.toFixed(2)}`
  const hasItem = cartCtx.hasItem > 0 

  const cartItem = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
   <Modal onClose={props.onHideCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{TotalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>Close</button>
       {hasItem && <button className={classes.button}>Order</button> }
      </div>
      </Modal>
  );
};

export default Cart;

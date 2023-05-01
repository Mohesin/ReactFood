import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon';
import {  useContext } from 'react';
import CartContext from '../../store/cart-context';



const HeaderCartButton = (props)=>{

    const ctx =    useContext(CartContext);

    const numberOfCartItem = ctx.items.reduce((curNum,item)=>{
        return curNum +item.amount;
    },0);

    return(<>
    <button className={classes.button} onClick={props.onClickPointer}>
        <span className={classes.icon}>
           <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
           {numberOfCartItem}
        </span>

    </button>
    </>)
}

export default HeaderCartButton;
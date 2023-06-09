import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";


const MealItem = (props) => {
   
    const  cartCtx  = useContext(CartContext)

  const price = `₹${props.Price.toFixed(2)}`;

   const addToCartHandler = amount => {
       cartCtx.addItem({
        id : props.id,
        name : props.Name,
        amount : amount,
        price : props.Price
       });
   }

  return (
    <>
      <li className={classes.meal}>
        <div>
          <h3>{props.Name}</h3>
          <div className={classes.description}>{props.Description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart= { addToCartHandler} id={props.id}/>
        </div>
      </li>
    </>
  );
};

export default MealItem;

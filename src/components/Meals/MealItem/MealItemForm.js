import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {

    const [amountIsValid, SetAmountIsValid] = useState(true)

    const amountInputRef = useRef();
     
    const submitHandler = e =>{
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
      
         if(enteredAmount.trim().length===0 || enteredAmountNumber < 1 || enteredAmountNumber >5) {
            SetAmountIsValid(false)
            return;
         }
      
         props.onAddToCart(enteredAmountNumber);
    };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
           ref={amountInputRef}
          Label="Amount"
          input={{
            id: "amount__" +props.id ,
            type: "number",
            min: "0",
            max: "6",
            step: "1",
            defaultValue: "0",
          }}
        />
        <button type="submit">+ ADD</button>
        {!amountIsValid && <p>Please Enter a Valid Amount(1-5)</p>}
      </form>
    </>
  );
};

export default MealItemForm;

import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/cartProvider";

function App() {
  const [cartIsShown, SetCartIsShown] = useState(false);

  const showCartHandler = () => {
    SetCartIsShown(true);
  };
  const HideCartHandler = () => {
    SetCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={HideCartHandler} />}
      <Header onShowCart={showCartHandler}></Header>
      <Meals />
    </CartProvider>
  );
}

export default App;

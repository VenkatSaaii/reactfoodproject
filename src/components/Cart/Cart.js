import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "a1", name: "sushi", amount: 3, price: 30 }].map((items) => (
        <li>{items.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>30.43</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Cancel</button>

        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

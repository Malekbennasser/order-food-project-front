import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import { MealItemForm } from "./MealItemForm";
import CartContext from "../../../store/cart-context";

export const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  console.log("carctx", cartCtx);
  const price = `${props.price.toFixed()} €`;
  console.log(price);
  console.log(price);
  const addItemToCart = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}> {props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addItemToCart} />
      </div>
    </li>
  );
};

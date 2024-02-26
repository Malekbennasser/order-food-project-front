import React, { Fragment } from "react";
import mealsImage from "../../assets/14-days-clean-eating-meal-plan-1200-lede-601736337d914519bb5bf8eb83540da1.jpg";
import classes from "./Header.module.css";
import { HeaderCartButton } from "./HeaderCartButton";

export const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Order food</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt=" A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

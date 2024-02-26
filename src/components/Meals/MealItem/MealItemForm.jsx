import React from "react";
import classes from "./MealItemForm.module.css";
import { Input } from "../../UI/Input";

export const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "nuber",
          min: "1",
          maw: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
};
import React, { Fragment } from "react";
import { MealsSummary } from "./MealsSummary";
import { AvaibleMeals } from "./AvaibleMeals";

export const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvaibleMeals />
    </Fragment>
  );
};

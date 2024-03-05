import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import { Card } from "../UI/Card";
import { MealItem } from "./MealItem/MealItem";

export const AvaibleMeals = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://order-food-b30ba-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setData(loadedMeals);
    };
    fetchData();
  }, []);

  const mealsLIst = data.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsLIst}</ul>
      </Card>
    </section>
  );
};

import React from "react";
import classes from "./MealsList.module.css";

import Card from "../UI/Card";

import MealItem from "./MealItem/MealItem";

const List = [
  {
    id: "a1",
    name: "Sushi",
    description: "Finest Fish and Veggies",
    price: 30.99,
  },

  {
    id: "a2",
    name: "Pizza",
    description: "A Italian Speciality",
    price: 28.17,
  },
  {
    id: "a3",
    name: "Barbeque Burger",
    description: "American, raw, meaty",
    price: 17.75,
  },
  {
    id: "a4",
    name: "Green Bowl",
    description: "Healthy and Green",
    price: 20.88,
  },
];

const MealsList = () => {
  const fullList = List.map((food) => (
    <MealItem
      key={food.id}
      name={food.name}
      description={food.description}
      price={food.price}
    />
  ));
  return (
    <div className={classes.meals}>
      <Card>
        <ul>{fullList}</ul>
      </Card>
    </div>
  );
};
export default MealsList;

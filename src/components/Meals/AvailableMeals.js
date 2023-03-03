import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chole Bature",
    description: "North Indian Breakfast",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Masala Dosa",
    description: "A south Indian specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Briyani",
    description: "Traditional, delicious, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Poha",
    description: "Healthy...and light snack...",
    price: 8.99,
  },
];

const AvaiableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
        id = {meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meal}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvaiableMeals;

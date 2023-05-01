import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 1200,
  },
  {
    id: "m2",
    name: "Chicken Burger",
    description: "A german specialty!",
    price: 200,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 250,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 300,
  },
];

const AvailavleMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meals) => (
            <MealItem
            id={meals.id}
              key={meals.id}
              Name={meals.name}
              Description={meals.description}
              Price={meals.price}
            ></MealItem>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailavleMeals;

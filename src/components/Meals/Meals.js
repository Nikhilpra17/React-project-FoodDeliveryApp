import { Fragment } from "react";
import MealSummary from "./MealSummary";
import AvaiableMeals from "./AvailableMeals";

const Meal = () => {
    return (
        <Fragment>
            <MealSummary />
            <AvaiableMeals />
        </Fragment>
    )
}

export default Meal;
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import img from '../../assets/meal.jpg';
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
         <header className={classes.header}>
            <h1>Zomato</h1>
            <HeaderCartButton onClick = {props.onShowCart}/>
         </header>
         <div className={classes['main-image']}>
            <img src = {img}  alt = "Food"/>
         </div>
    </Fragment>
};

export default Header;
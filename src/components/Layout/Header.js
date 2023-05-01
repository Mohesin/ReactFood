import classes from './Header.module.css'
import Mealimage from '../../Images/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = props=>{
return(<>
    <header className={classes.header}>
        <h1>A1_Meals</h1>
       <HeaderCartButton onClickPointer={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
        <img src={Mealimage} alt='MealImg'/>
    </div>
</>)

}

export default Header
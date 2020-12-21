import React from 'react'
import { ItemMeal } from '.'

const ResultMeals = ({ meals }) => {
    return ( 
        <>
            {meals.map(meal => <ItemMeal  meal={meal} key={meal.id}/>)}
        </>
     )
}
 
export default ResultMeals
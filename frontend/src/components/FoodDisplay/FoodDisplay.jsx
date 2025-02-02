import React from 'react'
import './FoodDisplay.css'
const FoodDisplay = ({category}) =>{
    const {foodilist} = useContext(StoreContext)
    return(
        <div className='food-display' id='food-display'>
         <h2>Top dishes near you</h2>

        </div>
    )
}
export default FoodDisplay
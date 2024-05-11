import React, { useState } from 'react'
import Dish from "./Dish"
import { IoMdArrowDropright } from "react-icons/io";

// /*  purpose: if we open a category, collapse all other category. 
// so making this RestaurantCategory comp a controlled comp by removing the showItems state here and passing it from the parent comp RestaurantMenu
// now the Restaurantmenu is controlling this RestaurantCategory comp.
// */

const RestaurantCategory = ({category, index, showItems, setCurrentIndex}) => {
  // const [showItems, setShowItems] = useState(false);
  const [collapse, setCollapse] = useState(true);

  const { title } = category?.card?.card; 
  const length = category?.card?.card?.itemCards?.length;
  const { itemCards } = category?.card?.card;
  // console.log(itemCards)

  // const clickHandler = () =>{
  //   setShowItems((prev)=>!prev)
  // }

  const clickHandler=()=>{
    setCurrentIndex(index)
    setCollapse(prev=>!prev)
  }

  return (
    <div>
      {/* {console.log(category)} */}
      <div className='w-full my-3 px-4 py-2 text-black rounded-md flex justify-between items-center text-2xl font-bold bg-slate-100 shadow-lg opacity-70 cursor-pointer'
       onClick={clickHandler} >
        <div>{title} ({length})</div>
        <IoMdArrowDropright  className={`${!collapse ? 'arrow-animation' : ''}`} />
      </div>
      <div className='w-full'>
        {/* show the dishes only if showItems is true and collapse is false*/}
        {
          showItems && !collapse && itemCards.map((item)=>(<Dish item={item} key={item.card.info.id} />))
        }
      </div>
    </div>
  )
}

export default RestaurantCategory




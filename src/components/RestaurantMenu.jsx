import React, { useState } from 'react'
import useRestaurantMenu from '../utils/context/useRestaurantMenu';
import { IoIosInformationCircle } from "react-icons/io";
import { IoTimerOutline } from "react-icons/io5";
import { GiCash  } from "react-icons/gi";
import RestaurantCategory from './RestaurantCategory';
import { FaStar } from "react-icons/fa";
import RestroMenuShimmer from './RestroMenuShimmer';

const RestaurantMenu = () => {
    // by default, 0th index elm is shown
    const [currentIndex, setCurrentIndex] = useState(0);

    // getting resData from custom hook useRestaurantMenu which contains all api fetch details and send back the data fetched
    const resData = useRestaurantMenu();

    // until resData receives the fetched data from api, we return shimmer so that it won't cause an error
    if(resData === null)
    return <RestroMenuShimmer />

    const { text, cuisines, costForTwoMessage, areaName, expectationNotifiers, sla, avgRatingString
, totalRatingsString } = resData?.cards[2]?.card?.card?.info;
    const { lastMileTravelString } = sla;
    const deliveryFee = expectationNotifiers[0].text; 
    const deliveryTime = sla.slaString;
   
    // category gives us array of objects with only food categories like recommeneded, Rolls, Momo, etc
    const categories = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((category)=>(
        category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
    // console.log(categories)

  return (
    <div className='w-8/12 mx-auto max-[650px]:w-11/12 bg-[#333333] p-6 rounded-lg text-[#CCCCCC]' >
        <div className='flex justify-between'>
        <div className='flex flex-col'>
        <h1 className='mb-2 text-3xl font-bold'>{text}</h1>
        <div className='text-sm opacity-60'>{cuisines.join(", ")}</div>  
        <div className='mb-3 text-sm opacity-60'>{`${areaName}, ${lastMileTravelString}`}</div>
        <div className='mb-2 flex items-center gap-1'>
            <IoIosInformationCircle className='text-yellow-500 text-xl' />
            <div>{deliveryFee}</div>
        </div>
        </div>

        <div className='flex flex-col gap-2 rounded-lg py-1 justify-center items-center'>
            <div className='text-green-500 flex items-center gap-1'><FaStar />{avgRatingString}</div>
            <div className='w-10/12 h-[1px] bg-slate-500'></div>
            <div className='opacity-50 '>{totalRatingsString}</div>
        </div>
        </div>
        
        <div className='flex gap-3 font-semibold mb-5 text-green-400'>
        <div className='flex gap-1 items-center'>
            <IoTimerOutline />
            {deliveryTime}
        </div>
        <div className='flex gap-1 items-center'>
            <GiCash  />
            {costForTwoMessage}
        </div>    
        </div>
        
        {/* iterate over categories array and show an accordian(dropdown menu type) for each category */}
        <div>
        {
            categories.map((category, index)=>( 
                // controlled component
                <RestaurantCategory 
                category={category} 
                key={index}
                // show the specific category jiske liye currentIndex true hai
                showItems={index === currentIndex ? true : false} 
                setCurrentIndex={()=>{setCurrentIndex(index)}}
                />
             ))
        }
        </div>
    </div>
  )
}

export default RestaurantMenu

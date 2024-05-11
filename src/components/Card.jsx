import React from "react";
import { IMG_CDN_URL } from "../utils/data";
import { BiSolidDish } from "react-icons/bi";
import { FcRating } from "react-icons/fc";
import { IoIosTimer } from "react-icons/io";


const Card = ({restaurant}) =>{
    const url = IMG_CDN_URL+restaurant?.info?.cloudinaryImageId;
    let cuisines = restaurant.info.cuisines.join(", ");
    if(restaurant.info.cuisines.length > 4){
      const newCuisineArr = restaurant.info.cuisines.filter((cuisine, idx) => (idx < 4))
      cuisines = newCuisineArr.join(", ");
    }
    const resName = restaurant.info.name.length > 20 ? restaurant.info.name.substring(0, 20) : restaurant.info.name;
    
    return(
      <div className='w-[295px] h-[390px] border text-black rounded-md flex flex-col gap-3 transition-transform ease-in hover:scale-95 shadow-gray bg-[#8BC34A]' >
        <div>
          <img className='w-full h-[195px] rounded-lg' src={url} alt="restaurant"></img>
        </div>
        <div className='flex flex-col items-start py-2 pl-4'>
        <h2 className="text-2xl font-bold pb-4 text-white">{resName}</h2>
        <h3 className="text-sm text-gray-700 pb-1 flex items-center gap-2"><BiSolidDish className="text-lg" /> {cuisines} </h3>
        <p className="text-gray-900 flex items-center gap-2"><FcRating /> {restaurant.info.avgRating} stars</p>
        <p className="text-gray-900 flex items-center gap-2 "><IoIosTimer /> {restaurant.info?.sla?.deliveryTime} mins</p>
        </div>
     
      </div>
    );
  } 

  export default Card 
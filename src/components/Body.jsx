import React, { useContext } from 'react'
import Card from "./Card"
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useListOfRestaurant from '../utils/context/useListOfRestaurant';
import useOnlineStatus from "../utils/context/useOnlineStatus";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import userContext from '../utils/context/userContext';
import HomePageDishes from './HomePageDishes';
import TopResChains from './TopResChains';
 

const Body = () => {
  const [selTopRated, setSelTopRated] = useState(true);
  // we always render the filteredRestro and don't update the original listOfRestro
  // filter from the original listOfRestro and update the UI with only the filteredRestro

  // our custom hook useListOfRestaurant returns all the necessary details to us
    const {filteredRestro, setFilteredRestro, listOfRestro, searchTxt, setSearchTxt, loading} = useListOfRestaurant();
    const {loggedInName, setLoggedInName} = useContext(userContext)

    const onlineStatus = useOnlineStatus();

    const searchHandler = ()=>{
      const searchedRestro = listOfRestro.filter((restaurant)=>(restaurant.info.name.toLowerCase().includes(searchTxt.toLowerCase())))
      setFilteredRestro(searchedRestro);
    }

    if(onlineStatus === false) return <h1 className="bg-red-500">Check your stupid internet!! You're so Offline </h1>

    return(
    <div className='my-9'>
      
      <HomePageDishes />

      <TopResChains />

      <div className='my-9 flex justify-center items-center gap-5 max-[650px]:flex-col'>

        <div className="flex items-center gap-3">
        <input className='text-black px-2 w-[300px] h-[50px] rounded-lg max-[650px]:w-[250px] bg-black' 
        value={searchTxt} 
        placeholder="Search for a dish, cuisine or restaurant"
        onChange={(e)=>{
          setSearchTxt(e.target.value) 
          }} />
        <button onClick={searchHandler}>
          <CiSearch className="w-[25px] h-[25px]" />
        </button>
        </div>

        <div>
        <button className="mx-auto border border-gray-600 rounded-md px-3 py-1 " onClick={()=>{
          const topRatedRestro = listOfRestro.filter((restaurant)=>(restaurant.info.avgRating>=4.5)) 
          setSelTopRated((prev)=>!prev)
          // console.log(selTopRated)
          selTopRated ? setFilteredRestro(topRatedRestro) : setFilteredRestro(listOfRestro)
        }}>Top Rated</button>
      </div>

      

      </div>
      {/* <input onChange={(e)=>setLoggedInName(e.target.value)} /> */}
      
      <div className='w-full flex justify-center flex-wrap gap-5'>
      {  loading ? (<Shimmer />) :
         (filteredRestro.map((restaurant)=>{
          
          return <Link to={"/restaurant/"+restaurant?.info?.id} key={restaurant?.info?.id}> <Card restaurant={restaurant} /> </Link>}) )
      }
      
      </div>
    </div>
  );
}

export default Body;

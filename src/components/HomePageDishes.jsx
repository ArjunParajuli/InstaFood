import React, { useState} from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { IMG_CDN_URL } from '../utils/data'
import { HOME_PAGE_DISHES } from '../utils/data'

const HomePageDishes = () => {
    const [currDishNum, setCurrDishNum] = useState(0);

    const prevHandler = () => {
        if(currDishNum-7 >= 0)
            setCurrDishNum((prev) => (prev-7))
    }

    const nextHandler = () => {
        if(currDishNum+7 <= HOME_PAGE_DISHES.length-1)
            setCurrDishNum((prev) => (prev+7))
    }

    const currSlide = HOME_PAGE_DISHES.filter((dish, idx) => (idx >= currDishNum && idx < currDishNum+7) ) 

  return (
    <div className='w-10/12 mx-auto'>

        <div className='flex justify-between mb-7 max-[471px]:flex-col'>
            <h1 className='font-bold text-xl text-white max-[471px]:text-md'>What's on your mind today?</h1>
            <div className='flex gap-4 max-[471px]:gap-1'>
                <span onClick={prevHandler} className='border border-[#E2E2E7] rounded-full bg-[#E2E2E7] text-black p-2 opacity-50 cursor-pointer hover:bg-white hover:text-black'><FaArrowLeft /></span>
                <span onClick={nextHandler} className='border border-[#E2E2E7] rounded-full bg-[#E2E2E7] text-black p-2 opacity-50 cursor-pointer hover:bg-white hover:text-black'><FaArrowRight /></span>
            </div>
        </div>
        
        <div className='overflow-x-auto'>
        <ul className='flex justify-center overflow-x-auto'>
            {
                currSlide.map((dish)=>{
                    const srcImg = IMG_CDN_URL+dish.imageId;
                    return (
                        <div className=''>
                            <img src={srcImg} className='w-[100px] h-[100px] sm:w-[165px] sm:h-[180px] ' ></img>
                        </div>
                    )
                })
            }
        </ul>
        </div>

    </div>
  )
}

export default HomePageDishes
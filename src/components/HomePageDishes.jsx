import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IMG_CDN_URL, HOME_PAGE_DISHES } from '../utils/data';

const HomePageDishes = () => {
    const scrollRef = useRef();
    const dishesToShow = 6;
    const itemWidth = 165; // Width of each item in pixels (adjust as needed)

    const scrollLeft = () => {
        scrollRef.current.scrollTo({
            left: scrollRef.current.scrollLeft - 300, 
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        scrollRef.current.scrollTo({
            left: scrollRef.current.scrollLeft + 300,
            behavior: 'smooth', 
        });
    };

    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex justify-between mb-7 max-[471px]:flex-col'>
                <h1 className='font-bold text-xl text-white max-[471px]:text-md'>What's on your mind today?</h1>
                <div className='flex gap-4 max-[471px]:gap-1'>
                    <span onClick={scrollLeft} className='border border-[#E2E2E7] rounded-full bg-[#E2E2E7] text-black p-2 opacity-50 cursor-pointer hover:bg-white hover:text-black'>
                        <FaArrowLeft />
                    </span>
                    <span onClick={scrollRight} className='border border-[#E2E2E7] rounded-full bg-[#E2E2E7] text-black p-2 opacity-50 cursor-pointer hover:bg-white hover:text-black'>
                        <FaArrowRight />
                    </span>
                </div>
            </div>
            
            <div className='overflow-x-hidden' ref={scrollRef} style={{ width: '100%' }}>
                <ul className='flex space-x-4' style={{ width: `${HOME_PAGE_DISHES.length * (100 / dishesToShow)}%` }}>
                    {HOME_PAGE_DISHES.map((dish, index) => {
                        const srcImg = IMG_CDN_URL + dish.imageId;
                        return (
                            <li key={index} className='' >
                                <img src={srcImg} alt={dish.name} className='w-full h-auto sm:w-[165px] sm:h-[180px] rounded' />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default HomePageDishes;

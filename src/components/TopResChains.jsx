import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { TOP_RES_CHAINS } from '../utils/data';
import TopResCard from './TopResCard';

const TopResChains = () => {
    const scrollRef = useRef();

    const scrollLeft = () => {
        scrollRef.current.scrollTo({
            left: scrollRef.current.scrollLeft - 300, 
            behavior: 'smooth', // Enable smooth scrolling
        });
    };

    const scrollRight = () => {
        scrollRef.current.scrollTo({
            left: scrollRef.current.scrollLeft + 300,
            behavior: 'smooth', 
        });
    };

    return (
        <div className='flex flex-col'>

            <div className='flex justify-between mb-7 max-[470px]:flex-col'>
                <h1 className='font-bold text-xl text-white max-[471px]:text-md'>TopRestaurant Chains Near Me</h1>
                <div className='flex gap-4 max-[471px]:gap-1'>
                    <span onClick={scrollLeft} className='border border-[#E2E2E7] rounded-full bg-[#E2E2E7] text-black p-2 opacity-50 cursor-pointer hover:bg-white hover:text-black'><FaArrowLeft /></span>
                    <span onClick={scrollRight} className='border border-[#E2E2E7] rounded-full bg-[#E2E2E7] text-black p-2 opacity-50 cursor-pointer hover:bg-white hover:text-black'><FaArrowRight /></span>
                </div>
            </div>

            <ul className='flex gap-4 overflow-x-scroll custom-scrollbar' ref={scrollRef}>
                {
                    TOP_RES_CHAINS.map((restaurant) => {
                        return <li key={restaurant.id}><TopResCard restaurant={restaurant} /></li>
                    })
                }
            </ul>
        </div>
    );
};

export default TopResChains;

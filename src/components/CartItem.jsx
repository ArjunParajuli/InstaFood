import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { removeItems } from '../utils/redux/cartSlice';
import toast from 'react-hot-toast';


const CartItem = ({item, idx}) => {
    const  cartItems  = useSelector(state => state.cart.items)
    const dispatch = useDispatch();
    const dishPrice = item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100;

    const url = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${item.card.info.imageId}`;

    const removeFromCart = ()=>{
        // pass the id to remove by checking their id present in cart state or not
        dispatch(removeItems(item?.card?.info?.id))
        toast.error("Item removed from Cart")
      }

  return (
    <div className=''>
        <div className='flex gap-9 '>

        <div className='w-4/12 flex justify-center max-[650px]:w-5/12'>
            <img src={url} alt="dish" className='w-[125px] h-[180px] rounded-md' />
        </div>

        <div className='flex flex-col gap-3 w-8/12'>
        <div className='text-lg font-bold'>{item?.card?.info?.name}</div>
        <div className='text-sm opacity-70'>{item?.card?.info?.description}</div>
        <div className='flex justify-between w-full'>
            <div className='text-green-600 font-semibold text-xl'>Rs.{dishPrice}</div>
            <button className='bg-red-500 opacity-70 h-[40px] w-[40px] rounded-full hover:opacity-90 '
            onClick={removeFromCart}><MdDelete className='mx-auto text-white' /></button>
        </div>
        </div>

        </div>
        {
      (cartItems.length > 1 && idx !== cartItems.length-1) ?
      (
        
        <div className='w-full bg-gray-500 h-[2px] my-2'></div>
      )
      :
      (
        <div></div>
      )
        }
        
    </div>
  )
}

export default CartItem
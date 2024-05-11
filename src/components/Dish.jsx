import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../utils/redux/cartSlice'; 
import toast from 'react-hot-toast';
// import { IMG_CDN_URL } from "../data";

const Dish = ({item}) => {
    const url = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${item.card.info.imageId}`;

    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch();

    // on clicking the add btn, this func dispatches the action and that action calls the reducer func which updates data inside slice and 
    // bcoz of useSelector the UI also gets updated(using selector, the cart is subscribed to the cart slice)
    const addItemHandler = (item) =>{
      // dispatch actions like addItems, removeItems defined inside reducer of car slice using useDispatch hook
      // this argument will go inside the action.payload in reducer
      dispatch(addItems(item))
      toast.success("Item added to cart")
      // console.log(cartItems)
    }

  return (
    <div className='flex justify-between items-center border-b gap-2 py-3 '>

    <div className='w-9/12 flex flex-col gap-2'>
      <div className='font-bold text-white opacity-60'>{item.card.info.name}</div>
      <div className='text-green-600'>Rs. {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</div>
      <div className='text-sm opacity-50'>{item.card.info.description}</div>
    </div>

    <div className='w-[170px] relative'>
    <button className='absolute bottom-0 left-[53px] mx-auto z-20 border rounded-sm text-green-400 bg-slate-800 px-3 py-1 hover:bg-green-600 hover:text-white max-[500px]:left-[35px] max-[950px]:left-[45px]' 
    onClick={() => addItemHandler(item)}>Add+</button>
      <img src={url} alt="dish" className='w-[118px] h-[96px] mx-auto rounded-md relative z-10 transition-transform ease-in-out hover:scale-110 
      '>
      </img>
    </div>
      
    </div>
  )
}

export default Dish

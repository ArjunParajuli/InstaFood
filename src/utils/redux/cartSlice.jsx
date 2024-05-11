import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    // name of slice
    name:'cart',
    // initial state of slice
    initialState: {
        items: [],
        totalPrice: 0,
    },
    // reducers functions to modify the state
    reducers: {
        addItems: (state, action) =>{
            // push the received item object into items array
            state.items.push(action.payload);
            // increment total price by received item's price
            state.totalPrice += action.payload?.card?.info?.price ? action.payload?.card?.info?.price/100 : action.payload?.card?.info?.defaultPrice/100
        },
        removeItems: (state, action)=>{
            // get the removed item object
            const removedItem = state.items.find(item => item?.card?.info?.id===action.payload);
            // if found in cart, decrement total price by its price and filter it out of the cart
            if(removedItem){
                state.totalPrice -= removedItem?.card?.info?.price ? removedItem?.card?.info?.price/100 : removedItem?.card?.info?.defaultPrice/100
                state.items = state.items.filter(item => item !== removedItem)
            }
        },
        clearCart:(state)=>{
            // return {items: []};
            state.items.length = 0;
            state.totalPrice = 0
        },
    }  
})


export const {addItems, removeItems, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice';

// createded store and added slices inside it
const appStore = configureStore({
    // this whole big reducer contains each slice's reducers
    reducer:{
        cart: cartSlice,
    }
})

export default appStore
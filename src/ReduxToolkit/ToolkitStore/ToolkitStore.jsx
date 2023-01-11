import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './ToolkitSlice';


const store = configureStore({
    reducer: {
        cart: cartSlice,
    },

});

export default store;
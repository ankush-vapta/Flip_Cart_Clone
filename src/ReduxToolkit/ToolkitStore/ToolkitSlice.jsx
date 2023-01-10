import { createSlice } from '@reduxjs/toolkit'


const initialState = [];

const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducer: {
        add(state, action) {
            state.push(action.payload)
        },
        remove() {
            state.filter((item) => item.id !== action.payload)
        }
    }
})

export const { add, remove } = createSlice.action;

export default cartSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        add(state, action) {
            const data = state.push(action.payload);
            console.log(state , "state")
            return void data;
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload)
        }
    }
})
export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
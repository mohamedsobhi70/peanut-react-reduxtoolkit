import { createSlice } from '@reduxjs/toolkit';

const wishlistItems = localStorage.getItem('inWishList');

export const wishListSlice = createSlice({
    name: 'cart',
    initialState: wishlistItems ? JSON.parse(wishlistItems) : [],
    reducers: {
        addToWishList: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.cartAmount += 1; // Increase the amount
            } else {
                state.push({ ...action.payload, cartAmount: 1 }); // Add new item with initial amount
            }
            localStorage.setItem('inWishList', JSON.stringify(state));

        },
        removeFromWishList: (state, action) => {
            localStorage.setItem('inWishList', JSON.stringify(state.filter(item => item.id !== action.payload)));
            return state.filter(item => item.id !== action.payload);
        }
    },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
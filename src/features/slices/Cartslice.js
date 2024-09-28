import { createSlice } from '@reduxjs/toolkit';

const cartItems = localStorage.getItem('inCart');

export const cartSlice = createSlice({
    name: 'cart',
    initialState: cartItems ? JSON.parse(cartItems) : [],
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.cartAmount += 1; // Increase the amount
            } else {
                state.push({ ...action.payload, cartAmount: 1 }); // Add new item with initial amount
            }
            localStorage.setItem('inCart', JSON.stringify(state));

        },
        reduceItemAmount: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                if (existingItem.cartAmount > 1) {
                    existingItem.cartAmount -= 1; // Decrease the amount
                } else {
                    return state.filter(item => item.id !== action.payload.id); // Remove item if amount is 1
                }
                localStorage.setItem('inCart', JSON.stringify(state));
            }
        },
        removeFromCart: (state, action) => {
            localStorage.setItem('inCart', JSON.stringify(state.filter(item => item.id !== action.payload)));
            return state.filter(item => item.id !== action.payload);
        }
    },
});

export const selectTotalItems = (state) =>
    state.cart.reduce((total, item) => total + item.cartAmount, 0);

export const { addToCart, reduceItemAmount, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
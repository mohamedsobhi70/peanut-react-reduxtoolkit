import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/slices/Cartslice'
import WishlistReducer from '../features/slices/Wishlistslice'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favourite: WishlistReducer,
  },
});

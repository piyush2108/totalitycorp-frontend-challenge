import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import WishlistSlice from "./Slices/WishlistSlice";

const store = configureStore({
   reducer: {
      cart: CartSlice,
      wishlist: WishlistSlice
   }
})

export default store
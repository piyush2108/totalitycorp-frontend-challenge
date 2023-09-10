import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
   name: "WishlistSlice",
   initialState: {
      wishlistItems: [],
   },
   reducers: {
      addToWishlist: (state, action) => {
         const product = action.payload

         const isPresent = state.wishlistItems.some((wishlistItem) => {
            return wishlistItem.id === product.id
         })

         if(!isPresent){
            state.wishlistItems.push(product)
         }
      },

      removeFromWishlist: (state, action) => {
         const product = action.payload

         const isPresent = state.wishlistItems.some((wishlistItem) => {
            return wishlistItem.id === product.id
         })

         if(!isPresent){
            return
         }
         else{
            state.wishlistItems = state.wishlistItems.filter(wishlistItem => wishlistItem.id !== product.id)
         }
      },

      clearWishlist: (state) => {
         state.wishlistItems = []
      }
   }
})

export const {addToWishlist, removeFromWishlist, clearWishlist} = WishlistSlice.actions
export default WishlistSlice.reducer
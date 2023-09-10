import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
   name: "CartSlice",
   initialState: {
      cartItems: [],
      cartPrice: 0
   },
   reducers:{
      addProduct: (state, action) => {
         const product = action.payload

         const isPresent = state.cartItems.some((cartItem) => {
            return cartItem.id === product.id
         })

         if(!isPresent){
            state.cartItems.push({...product, count: 1})
            state.cartPrice += product.price
         }

         else{
            const item = state.cartItems.find(cartItem => cartItem.id === product.id)
            item.count += 1
            state.cartPrice += product.price
         }

      },

      decreaseProductCount: (state, action) => {
         const product = action.payload

         const isPresent = state.cartItems.some((cartItem) => {
            return cartItem.id === product.id
         })

         if(!isPresent){
            return
         }
         else{
            const item = state.cartItems.find(cartItem => cartItem.id === product.id)
            item.count -= 1
            state.cartPrice -= item.price
            if(item.count === 0){
               state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== item.id)
            }
         }
      },

      removeProduct: (state, action) => {
         const product = action.payload

         const isPresent = state.cartItems.some((cartItem) => {
            return cartItem.id === product.id
         })

         if(!isPresent){
            return
         }
         else{
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== product.id)
         }

      },

      clearCart: (state) => {
         state.cartItems = []
         state.cartPrice = 0
      }
   }
})

export const {addProduct, decreaseProductCount, removeProduct, clearCart} = CartSlice.actions
export default CartSlice.reducer
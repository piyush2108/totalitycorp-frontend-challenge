import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCertificate, faShekelSign, faUser} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"

import Cart from "./Cart"
import Wishlist from "./Wishlist"

function Header(){
   const [cartShow, setCartShow] = useState(false)
   const [wishlistShow, setWishlistShow] = useState(false)
   const cartItems = useSelector(store => store.cart.cartItems)
   const wishlistItems = useSelector(store => store.wishlist.wishlistItems)

   const toggleCart = () => {
      setWishlistShow(false)
      
      if(cartShow){
         setCartShow(false)
      }
      else{
         setCartShow(true)
      }
   }

   const toggleWishlist = () => {
      setCartShow(false)

      if(wishlistShow){
         setWishlistShow(false)
      }
      else{
         setWishlistShow(true)
      }
   }

   return(
      <div className="py-4 px-[10%] bg-white/50 backdrop-blur-md font-primary text-lg text-primaryBlack flex justify-between items-center shadow-lg sticky top-0 z-10">
         <div className="flex justify-between items-end gap-12">
            <h1 className="font-secondary text-2xl">
               <FontAwesomeIcon className="mr-2" icon={faShekelSign} />
               <span className="text-primaryRed">Swift</span>Basket
            </h1>

            <div className="flex justify-around items-center gap-6">
               <Link className="flex justify-center items-center gap-2" to="/">
                  <p className="hover:text-primaryRed/80">Store</p>
               </Link>

               <Link className="group flex justify-center items-center hover:text-primaryRed/80" to="/offers">
                  <FontAwesomeIcon className="mr-1 group-hover:animate-spin" icon={faCertificate} />
                  <p>Offers</p>
               </Link>

               <Link className="flex justify-center items-center gap-2" to="/aboutus">
                  <p className="hover:text-primaryRed/80">About Us</p>
               </Link>
            </div>
         </div>

         <div className="p-2 flex justify-around items-center gap-4">
            <button 
               className="flex justify-center items-center gap-2"
               onClick={() => toggleWishlist()}
            >
               <p className="py-1 px-2 bg-primaryRed text-white text-sm rounded-md">{wishlistItems.length}</p>
               <p className="hover:text-primaryRed/80">Wishlist</p>
            </button>

            <button 
               className="flex justify-center items-center gap-2"
               onClick={() => toggleCart()}
            >
               <p className="py-1 px-2 bg-primaryRed text-white text-sm rounded-md">{cartItems.length}</p>
               <p className="hover:text-primaryRed/80">Cart</p>
            </button>

            <Link className="flex justify-center items-center gap-2" to="/checkout">
               <p className="hover:text-primaryRed/80">Checkout</p>
            </Link>
            
            <div className="h-10 w-10 rounded-full border-2 border-primaryBlack flex justify-center items-center">
               <FontAwesomeIcon icon={faUser} />
            </div>
         </div>

         {
            cartShow && 
            <Cart />
         }

         {
            wishlistShow &&
            <Wishlist />
         }
      </div>
   )
}

export default Header
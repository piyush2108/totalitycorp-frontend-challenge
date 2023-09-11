import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser, faEllipsisVertical, faHeart, faPercentage, faShekelSign, faShoppingBag} from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

import Cart from "./Cart"
import Wishlist from "./Wishlist"
import { removeUser } from "../../Store/Slices/CartSlice"

function Header(){
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [cartShow, setCartShow] = useState(false)
   const [wishlistShow, setWishlistShow] = useState(false)
   const [menuStatus, setMenuStatus] = useState(false)
   const [userStatus, setUserStatus] = useState(false)
   const {user, cartItems} = useSelector(store => store.cart)
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

   const handleMenuStatus = () => {
      setMenuStatus(!menuStatus)
   }

   const handleUserStatus = () => {
      setUserStatus(!userStatus)
   }

   const handleLogin = () => {
      setUserStatus(!userStatus)
      navigate("/auth")
   }

   const handleLogout = () => {
      setUserStatus(!userStatus)
      dispatch(removeUser())
   }

   return(
      <div className="py-4 px-[10%] bg-white/50 backdrop-blur-md font-primary text-lg text-primaryBlack flex justify-between items-center shadow-lg sticky top-0 z-10">
         <div className="w-1/2 flex justify-start items-center gap-1 relative">
            <button
               className="lg:hidden flex justify-center items-center"
               onClick={() => handleMenuStatus()}
            >
               <FontAwesomeIcon className="p-2 text-base sm:text-lg md:text-2xl" icon={faEllipsisVertical} />
            </button>
            
            <Link className="font-secondary text-lg sm:text-xl md:text-2xl" to="/">
               <FontAwesomeIcon className="hidden sm:inline-block mx-2" icon={faShekelSign} />
               <span className="text-primaryRed">Swift</span>Basket
            </Link>

            {
               menuStatus && 
               <div className="lg:hidden w-full mt-6 p-4 bg-white flex flex-col justify-between items-start gap-2 rounded-md absolute top-full shadow-lg transition-all">
                  <Link className="w-full text-base sm:text-lg md:text-2xl flex justify-center items-center gap-2" to="/" onClick={() => handleMenuStatus()}>
                     <p className="hover:text-primaryRed">Store</p>
                  </Link>

                  <Link className="w-full text-base sm:text-lg md:text-2xl flex justify-center items-center" to="/offers" onClick={() => handleMenuStatus()}>
                     <p className="hover:text-primaryRed">Offers</p>
                  </Link>

                  <Link className="w-full text-base sm:text-lg md:text-2xl flex justify-center items-center gap-2" to="/aboutus" onClick={() => handleMenuStatus()}>
                     <p className="hover:text-primaryRed">About Us</p>
                  </Link>
            </div>
            }

            <div className="ml-2 hidden lg:flex justify-around items-center gap-4">
               <Link className="flex justify-center items-center gap-2" to="/">
                  <p className="hover:text-primaryRed/80 underline underline-offset-4">Store</p>
               </Link>

               <Link className="flex justify-center items-center hover:text-primaryRed/80 underline underline-offset-4" to="/offers">
                  <FontAwesomeIcon className="mr-1" icon={faPercentage} />
                  <p>Offers</p>
               </Link>

               <Link className="flex justify-center items-center gap-2 underline underline-offset-4" to="/aboutus">
                  <p className="hover:text-primaryRed/80">About Us</p>
               </Link>
            </div>
         </div>

         <div className="p-2 flex justify-around items-center gap-4 relative">
            <button 
               className="flex justify-center items-center gap-1"
               onClick={() => toggleWishlist()}
            >
               <p className="sm:py-1 px-1 sm:px-2 bg-primaryRed text-white text-xs sm:text-sm rounded-md">
                  {wishlistItems.length}
               </p>
               <FontAwesomeIcon className="md:hidden" icon={faHeart} />
               <p className="hidden md:block hover:text-primaryRed/80">Wishlist</p>
            </button>

            <button 
               className="flex justify-center items-center gap-1"
               onClick={() => toggleCart()}
            >
               <p className="sm:py-1 px-1 sm:px-2 bg-primaryRed text-white text-xs sm:text-sm rounded-md">
                  {cartItems.length}
               </p>
               <FontAwesomeIcon className="md:hidden" icon={faShoppingBag} />
               <p className="hidden md:block hover:text-primaryRed/80">Cart</p>
            </button>
            
            <button
               className="flex justify-center items-center"
               onClick={() => handleUserStatus()}
            >
               <FontAwesomeIcon className="text-lg sm:text-lg md:text-3xl" icon={faCircleUser} />
            </button>

            {
               userStatus &&
               <div className="w-full mt-6 p-4 bg-white rounded-md absolute top-full shadow-lg transition-all">
               {
                  user ? 
                  <div className="text-sm sm:text-base md:text-lg flex flex-col justify-center items-center gap-2">
                     <p>Hello <span className="font-bold">{user.username}</span></p>
                     <button
                        className="p-2 border-[1px] border-primaryRed hover:bg-primaryRed hover:text-secondaryWhite rounded-md" 
                        onClick={() => handleLogout()}
                     >
                        Logout
                     </button>
                  </div> :
                  <div className="text-sm sm:text-base md:text-lg flex flex-col justify-center items-center gap-2">
                  <p>Hello <span className="font-bold">Guest</span></p>
                     <button
                        className="py-1 px-2 border-[1px] border-primaryRed hover:bg-primaryRed hover:text-secondaryWhite rounded-md" 
                        onClick={() => handleLogin()}
                     >
                        Login
                     </button>
                  </div>
               }
            </div>
            }
         </div>

         { cartShow && <Cart /> }

         { wishlistShow && <Wishlist /> }
      </div>
   )
}

export default Header
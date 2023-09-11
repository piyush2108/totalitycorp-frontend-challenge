import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { clearCart } from "../../Store/Slices/CartSlice"

const CartItem = ({cartItem}) => {
   return(
      <div className="w-full p-2 font-primary flex justify-between items-center shadow-md rounded-lg">
         <div>
            <h1 className="text-xs sm:text-sm md:text-base">{cartItem.title}</h1>
            <p className="text-sm sm:text-base md:text-lg text-primaryRed">${cartItem.price}</p>
            <p className="text-xs sm:text-sm md:text-base">{cartItem.count} Units</p>
         </div>

         <img className="h-12 sm:h-20 w-12 sm:w-20 object-contain" alt="Product Banner" src={cartItem.image} />
      </div>
   )
}

function Cart(){
   const dispatch = useDispatch()
   const {user, cartItems, cartPrice} = useSelector(store => store.cart)

   return(
      <div className="w-full max-h-[80vh] p-4 flex flex-col sm:flex-row gap-2 absolute top-full left-0 z-20 bg-white shadow-lg overflow-y-scroll">
         <div className="w-full sm:w-1/2 flex-grow p-2 flex flex-col justify-start items-center gap-2 border-[1px] border-primaryBlack/50 rounded-lg">
            <button 
               className="p-2 text-sm sm:text-base text-white bg-primaryRed rounded-lg hover:shadow-lg" 
               onClick={() => dispatch(clearCart())}
            >
               Clear Cart
            </button>

            <div className="w-full p-2 overflow-y-scroll">
               {
                  cartItems.length === 0 && <h1 className="text-sm sm:text-base md:text-lg text-center">Items added to cart will show here.</h1>
               }
               {
                  cartItems.map((cartItem) => {
                     return <CartItem key={cartItem.id} cartItem={cartItem}/>
                  })
               }
            </div>
         </div>

         <div className="w-full sm:w-1/2 flex-grow p-2 flex flex-col justify-start items-center gap-2 rounded-lg">
            <div className="w-full p-2">
               <h1 className="p-2 text-sm sm:text-base shadow-md rounded-lg">Total Items: {cartItems.length}</h1>

               <div className="my-4 w-full overflow-y-scroll">
                  {
                     cartItems.map(cartItem => {
                        return(
                           <div className="m-2 p-2 flex justify-between items-center" key={cartItem.id}>
                              <h1 className="w-4/5 text-xs sm:text-sm md:text-base">{cartItem.title}</h1>
                              <p className="text-xs sm:text-sm md:text-base">{cartItem.price} x <span className="text-primaryRed"> {cartItem.count}</span></p>
                           </div>
                        )
                     })
                  }
               </div>

               <h1 className="p-2 text-sm sm:text-base shadow-md rounded-lg">Total Cost: <span className="text-primaryRed">${cartPrice.toFixed(2)}</span></h1>

            </div>
            
            <button className="p-2 text-sm sm:text-base text-white bg-primaryRed rounded-lg hover:shadow-lg">
               {
                  user ? 
                  <Link to="/checkout">Checkout</Link> :
                  <Link to="/auth">Login</Link>
               }
            </button>
         </div>
      </div>
   )
}

export default Cart
import { useDispatch, useSelector } from "react-redux"
import { clearWishlist } from "../../Store/Slices/WishlistSlice"

const WishlistItem = ({wishlistItem}) => {
   return(
      <div className="w-full p-2 font-primary flex justify-between items-center shadow-md rounded-lg">
         <div>
            <h1 className="text-xs sm:text-sm md:text-base">{wishlistItem.title}</h1>
            <p className="text-sm sm:text-base md:text-lg text-primaryRed">${wishlistItem.price}</p>
         </div>

         <img className="h-12 sm:h-20 w-12 sm:w-20 object-contain" alt="Product Banner" src={wishlistItem.image} />
      </div>
   )
}

function Wishlist(){
   const dispatch = useDispatch()
   const {wishlistItems} = useSelector(store => store.wishlist)

   return(
      <div className="w-full sm:w-1/2 p-4 bg-white absolute top-full right-0 shadow-lg z-20">
         <div className="w-full flex-grow p-2 flex flex-col justify-start items-center gap-2 bg-white rounded-lg overflow-y-scroll">
            <button 
               className="p-2 text-sm sm:text-base text-white bg-primaryRed rounded-lg hover:shadow-lg" 
               onClick={() => dispatch(clearWishlist())}
            >
               Clear Wishlist
            </button>

            <div className="w-full flex flex-col justify-center items-center gap-2">
               {
                  wishlistItems.map((wishlistItem) => {
                     return <WishlistItem key={wishlistItem.id} wishlistItem={wishlistItem}/>
                  })
               }
            </div>
         </div>
      </div>
   )
}

export default Wishlist
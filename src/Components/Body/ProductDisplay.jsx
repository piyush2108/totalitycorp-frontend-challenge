import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import { addProduct, decreaseProductCount, removeProduct } from "../../Store/Slices/CartSlice"
import { addToWishlist, removeFromWishlist } from "../../Store/Slices/WishlistSlice"
import { ALL_PRODUCTS_URL } from "../../constant"
import ProductDisplayShimmer from "./ProductDisplayShimmer"

function ProductDisplay(){
   const dispatch = useDispatch()
   const {id} = useParams()
   const [product, setProduct] = useState(null)
   const cartItems = useSelector(store => store.cart.cartItems)
   const wishlistItems = useSelector(store => store.wishlist.wishlistItems)

   useEffect(()=>{
      window.scrollTo(0, 0)
      getProduct()
   }, [])

   const getProduct = async() => {
      try {
         const data = await fetch(ALL_PRODUCTS_URL + "/" + id)
         const json = await data.json()

         setProduct(json)
      } catch (error) {
         console.log(error)
         setProduct(null)
      }
   }

   const getProductCount = () => {
      const item = cartItems.find(cartItem => cartItem.id === product.id)

      if(item){
         return item.count
      }
      else{
         return 0
      }
   }

   const handleAddProduct = () => {
      dispatch(addProduct(product))
   }

   const handleDecreaseProductCount = () => {
      dispatch(decreaseProductCount(product))
   }

   const handleRemoveProduct = () => {
      dispatch(removeProduct(product))
   }

   const handleAddToWishlist = () => {
      dispatch(addToWishlist(product))
   }

   const handleRemoveFromWishlist = () => {
      dispatch(removeFromWishlist(product))
   }

   if(!product) return <ProductDisplayShimmer />

   return(
      <div className="p-2 flex flex-col items-center gap-4">
         <Link className="group w-fit p-2 font-secondary text-base sm:text-lg md:text-xl text-primaryBlack hover:text-primaryRed" to="/">
            <FontAwesomeIcon className="mr-2 group-hover:mr-4" icon={faArrowLeft} />
            Back to store
         </Link>

         <div className="py-12 px-[10%] min-h-screen font-primary flex flex-col lg:flex-row justify-between items-start gap-8 transition-colors">
            <div className="w-full lg:w-1/2 p-2 flex justify-center">
               <img className="md:w-1/2 w-2/5" alt="Product Banner" src={product?.image} />
            </div>

            <div className="w-full lg:w-1/2 p-4 border-[1px] border-primaryBlack/20 rounded-lg">
               <div className="text-sm sm:text-base md:text-lg flex justify-between items-center">
                  <p className="opacity-80 uppercase">{product?.category}</p>

                  <p>
                     <FontAwesomeIcon className="text-orange-500" icon={faStar} />
                     <span>{`${product?.rating?.rate} (${product?.rating?.count})`}</span>
                  </p>
               </div>

               <h1 className="py-2 font-secondary text-base sm:text-xl md:text-2xl">{product?.title}</h1>

               <p className="py-4 text-xs sm:text-sm md:text-base">{product?.description}</p>

               <p className="py-2 font-secondary text-lg sm:text-2xl md:text-3xl text-primaryRed">${product?.price}</p>

               <div className="p-4 flex flex-col justify-around items-center gap-2">
                  <div className="flex justify-around items-center border-[1px] border-primaryBlack rounded-lg overflow-hidden">
                     <button 
                        onClick={() => handleAddProduct()}
                        className="py-1 px-2 border-r-[1px] border-primaryBlack text-base sm:text-xl md:text-2xl hover:bg-primaryBlack hover:text-secondaryWhite"
                     >
                        +
                     </button>

                     <button className="py-1 px-2 border-r-[1px] border-primaryBlack text-base sm:text-xl md:text-2xl hover:bg-primaryBlack hover:text-secondaryWhite">{getProductCount()}</button>

                     <button 
                        onClick={() => handleDecreaseProductCount()}
                        className="py-1 px-2 text-base sm:text-xl md:text-2xl hover:bg-primaryBlack hover:text-secondaryWhite"
                     >
                        -
                     </button>
                  </div>

                  {
                     getProductCount() > 0 &&
                     <button 
                        onClick={() => handleRemoveProduct()}
                        className="p-2 text-base sm:text-xl md:text-2xl border-[1px] border-primaryBlack rounded-lg hover:bg-primaryBlack hover:text-secondaryWhite"
                     >
                        Remove Product
                     </button> 
                  }

                  {
                     !wishlistItems.some((item) => item.id === product?.id) ?
                     <button 
                        onClick={() => handleAddToWishlist()}
                        className="p-2 text-base sm:text-xl md:text-2xl border-[1px] border-primaryBlack rounded-lg hover:bg-primaryBlack hover:text-secondaryWhite"
                     >
                        Add to Wishlist
                     </button> :
                     <button 
                        onClick={() => handleRemoveFromWishlist()}
                        className="p-2 text-base sm:text-xl md:text-2xl border-[1px] border-primaryBlack rounded-lg hover:bg-primaryBlack hover:text-secondaryWhite"
                     >
                        Remove from Wishlist
                     </button>

                  }
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProductDisplay
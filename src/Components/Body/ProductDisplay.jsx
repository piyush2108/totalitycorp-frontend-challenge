import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ALL_PRODUCTS_URL } from "../../constant"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons"
import ProductDisplayShimmer from "./ProductDisplayShimmer"
import { useDispatch, useSelector } from "react-redux"
import { addProduct, decreaseProductCount, removeProduct } from "../../Store/Slices/CartSlice"
import { addToWishlist } from "../../Store/Slices/WishlistSlice"

function ProductDisplay(){
   const dispatch = useDispatch()
   const {id} = useParams()
   const [product, setProduct] = useState(null)
   const [wishListStatus, setWishListStatus] = useState(false)
   const cartItems = useSelector(store => store.cart.cartItems)

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
      setWishListStatus(true)
      dispatch(addToWishlist(product))
   }

   if(!product) return <ProductDisplayShimmer />

   return(
      <div className="py-12 px-[10%] min-h-screen font-primary flex flex-col md:flex-row justify-between items-start gap-8 transition-colors">
         <div className="w-full md:w-1/2 p-2 flex justify-center">
            <img className="w-9/12" alt="Product Banner" src={product?.image} />
         </div>

         <div className="w-full md:w-1/2 p-4 border-[1px] border-primaryBlack/20 rounded-lg">
            <div className="flex justify-between items-center">
               <p className="text-lg opacity-80 uppercase">{product?.category}</p>

               <p>
                  <FontAwesomeIcon className="text-orange-500" icon={faStar} />
                  <span>{`${product?.rating?.rate} (${product?.rating?.count})`}</span>
               </p>
            </div>

            <h1 className="py-2 font-secondary text-4xl">{product?.title}</h1>

            <p className="py-4">{product?.description}</p>

            <p className="py-2 font-secondary text-5xl text-primaryRed">${product?.price}</p>

            <div className="p-4 flex flex-col justify-around items-center gap-2">
               <div className="flex justify-around items-center border-[1px] border-primaryBlack/20 rounded-lg overflow-hidden">
                  <button 
                     onClick={() => handleAddProduct()}
                     className="p-2 border-r-[1px] border-primaryBlack/20 text-2xl hover:bg-primaryBlack/20"
                  >
                     +
                  </button>

                  <button className="p-2 border-r-[1px] border-primaryBlack/20 text-2xl hover:bg-primaryBlack/20">{getProductCount()}</button>

                  <button 
                     onClick={() => handleDecreaseProductCount()}
                     className="p-2 border-r-[1px] border-primaryBlack/20 text-2xl hover:bg-primaryBlack/20"
                  >
                     -
                  </button>
               </div>

               {
                  getProductCount() > 0 &&
                  <button 
                     onClick={() => handleRemoveProduct()}
                     className="p-2 text-2xl border-[1px] border-primaryBlack rounded-lg hover:bg-primaryBlack hover:text-secondaryWhite"
                  >
                     Remove Product
                  </button> 
               }

               
               <button 
                  disabled={wishListStatus}
                  onClick={() => handleAddToWishlist()}
                  className="p-2 text-2xl border-[1px] border-primaryBlack rounded-lg hover:bg-primaryBlack hover:text-secondaryWhite"
               >
                  {wishListStatus ? "Added to Wishlist" : "Add to Wishlist"}
               </button> 
            </div>
         </div>
      </div>
   )
}

export default ProductDisplay
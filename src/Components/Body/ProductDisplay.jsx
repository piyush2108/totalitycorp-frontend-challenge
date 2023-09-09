import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ALL_PRODUCTS_URL } from "../../constant"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons"
import ProductDisplayShimmer from "./ProductDisplayShimmer"

function ProductDisplay(){
   const {id} = useParams()
   const [product, setProduct] = useState(null)

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

   if(!product) return <ProductDisplayShimmer />

   return(
      <div className="py-12 px-[10%] min-h-screen font-primary flex flex-col md:flex-row justify-between items-start gap-8">
         <div className="w-full md:w-1/2 p-2 flex justify-center">
            <img className="w-9/12" alt="Product Image" src={product?.image} />
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

            <div className="p-4 flex justify-around items-center">
               <div className="flex justify-around items-center border-[1px] border-primaryBlack/20 rounded-lg overflow-hidden">
                  <button className="p-2 border-r-[1px] border-primaryBlack/20 text-2xl hover:bg-primaryBlack/20">+</button>
                  <button className="p-2 border-r-[1px] border-primaryBlack/20 text-2xl hover:bg-primaryBlack/20">2</button>
                  <button className="p-2 text-2xl hover:bg-primaryBlack/20">-</button>
               </div>

               <button className="py-2 px-4 bg-primaryBlack text-3xl text-secondaryWhite rounded-lg hover:bg-secondaryWhite hover:text-primaryBlack">Add To Basket</button>

               <FontAwesomeIcon className="text-2xl" icon={faHeart} />
            </div>
         </div>
      </div>
   )
}

export default ProductDisplay
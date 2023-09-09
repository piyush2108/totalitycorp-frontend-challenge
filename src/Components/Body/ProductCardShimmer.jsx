import { PRODUCT_SHIMMER_VALUE } from "../../constant"

function ShimmerCard(){
   return(
      <div className="w-full sm:w-1/2 md:w-2/6">
         <div className="m-2 h-96 bg-gradient-to-b from-primaryBlack/20  to-white animate-pulse rounded-lg"></div>
      </div>
   )
}

function ProductCardShimmer(){
   return(
      <div className="py-8 px-[10%] flex flex-wrap justify-around items-start">
         {
            new Array(PRODUCT_SHIMMER_VALUE).fill(0).map((value, index) => {
               return <ShimmerCard key={index} />
            })
         }
      </div>
   )
}

export default ProductCardShimmer
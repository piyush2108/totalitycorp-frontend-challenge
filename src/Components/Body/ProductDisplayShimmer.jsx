function ProductDisplayShimmer(){
   return(
      <div className="py-12 px-[10%] min-h-screen font-primary flex flex-col sm:flex-row justify-between items-start gap-8">
         <div className="h-96 w-full sm:w-1/2 bg-gradient-to-b from-primaryBlack/20  to-white rounded-xl animate-pulse"></div>

         <div className="h-96 w-full sm:w-1/2 bg-gradient-to-b from-primaryBlack/20  to-white rounded-xl animate-pulse"></div>
      </div>
   )
}

export default ProductDisplayShimmer
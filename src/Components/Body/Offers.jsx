import OfferImage from "../../assets/offer.webp"

function Offers(){
   return(
      <div className="py-2 px-[10%] font-primary flex flex-col justify-center items-center">
         <div className="p-2 w-full font-primary flex flex-col sm:flex-row justify-center items-center gap-4 ">
            <img className="h-40 sm:h-52 w-40 sm:w-52 object-contain" src={OfferImage} />
            <div className="flex flex-col justify-center items-center">
               <h1 className="font-primary text-xl sm:text-3xl md:text-5xl z-10">Big <span className="text-5xl sm:text-6xl md:text-7xl text-primaryRed">Sale</span></h1>
               <p className="font-secondary text-base sm:text-lg md:text-xl z-10">Upto 23% off on Popular Items.</p>
            </div>
         </div>

         <div className="w-full p-4">
            <p className="py-4 text-base sm:text-lg md:text-xl text-justify opacity-80">At Swift Basket, we're committed to making your shopping experience both enjoyable and budget-friendly. Explore our Offers page today and embark on a journey of savings and discovery.</p>
         </div>

         <div className="w-full p-4">
            <p className="py-2 font-secondary text-base sm:text-2xl">Explore Our Exclusive Offers</p>
            <p className="py-2 text-base sm:text-lg opacity-80">At Swift Basket, we love surprising our valued customers with irresistible deals and exclusive offers. Our "Offers" page is your gateway to fantastic savings and exciting promotions across a wide range of products. Whether you're hunting for the latest gadgets, fashion essentials, home decor, or more, you're in for a treat.</p>
         </div>
         
         <div className="w-full p-4">
            <p className="py-2 font-secondary text-base sm:text-2xl">How to Make the Most of Our Offers:</p>
            <p className="py-2 text-base sm:text-lg opacity-80">Our Offers page is constantly updated with new deals. Make it a habit to browse regularly so you don't miss out on the latest offers.</p>
            <p className="py-2 text-base sm:text-lg opacity-80">Want to be the first to know about our exclusive promotions? Subscribe to our newsletter or follow us on social media for real-time updates.</p>
            <p className="py-2 text-base sm:text-lg opacity-80">If you discover a fantastic deal, share it with your friends and family. After all, great savings are meant to be shared!</p>
            <p className="py-2 text-base sm:text-lg opacity-80">At Swift Basket, we're committed to making your shopping experience both enjoyable and budget-friendly. Explore our Offers page today and embark on a journey of savings and discovery. Happy shopping!</p>
         </div>
      </div>
   )
}

export default Offers
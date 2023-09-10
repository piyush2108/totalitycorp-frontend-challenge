import OfferImage from "../../assets/offers.webp"

function Offers(){
   return(
      <div className="px-[10%] font-primary flex flex-col justify-center items-center">
         <div className="w-full p-4 font-primary flex justify-center items-center gap-4">
            <img className="w-4/5" src={OfferImage} />
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
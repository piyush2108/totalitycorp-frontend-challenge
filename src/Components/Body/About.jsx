import Shopping from "../../assets/shopping.jpg"

function About(){
   return(
      <div className="px-[10%] font-primary flex flex-col justify-center items-center">
         <div className="w-full p-4 font-primary flex justify-center items-center gap-4">
            <h1 className="w-1/2 text-5xl"><span className="text-primaryRed">SwiftBasket</span>: Shopping Made Easy, Savings Made Swift.</h1>
            <img className="w-1/4" src={Shopping} />
         </div>

         <div className="w-full p-4">
            <p className="py-8 text-2xl text-justify opacity-80">Welcome to Swift Basket, your one-stop destination for a seamless and delightful shopping experience. We are more than just an online store; we're your trusted partner in finding the best products, at the best prices, with the speed and convenience you deserve.</p>
         </div>

         <div className="w-full p-4">
            <p className="py-2 font-secondary text-3xl">Our Vision</p>
            <p className="py-8 text-2xl opacity-80">At Swift Basket, our vision is simple yet powerful: to redefine online shopping. We aim to bring innovation, quality, and affordability to every household, making it easy for you to discover and acquire the products you love.</p>
         </div>
         
         <div className="w-full p-4">
            <p className="py-2 font-secondary text-3xl">Our Promise</p>
            <p className="py-8 text-2xl opacity-80">At Swift Basket, we promise to continuously strive for excellence. We promise to bring you the latest trends, the best deals, and the most enjoyable shopping experience. With us, you're not just a customer; you're a valued member of our growing community.</p>
            <p className="py-8 text-2xl opacity-80">Thank you for choosing Swift Basket. We look forward to serving you and becoming your preferred destination for all your shopping needs.</p>
            <p className="py-8 text-2xl opacity-80">Explore, shop, and experience the difference with Swift Basket!</p>
         </div>
      </div>
   )
}

export default About
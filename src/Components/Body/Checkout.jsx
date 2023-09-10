import { useSelector } from "react-redux"
import { useState } from "react"

function Checkout(){
   const {cartItems, cartPrice} = useSelector(store => store.cart)
   const [detailsSection, setDetailsSection] = useState("shipping")

   return(
      <div className="min-h-screen font-primary flex flex-col justify-start items-center gap-2">
         <h1 className="py-8 font-secondary text-sm sm:text-lg md:text-2xl text-center">Checkout</h1>

         <div className="w-full px-[10%] flex flex-col md:flex-row justify-center items-start gap-4">
            <div className="w-full md:w-1/2 border-2 border-primaryBlack">
               <div className="flex items-center">
                  <button onClick={() => setDetailsSection("shipping")} className={`w-1/2 p-2 text-center text-sm sm:text-base md:text-xl ${detailsSection === "shipping" && "bg-primaryBlack text-secondaryWhite"}`}>Shipping Details</button>

                  <button onClick={() => setDetailsSection("payment")} className={`w-1/2 p-2 text-center text-sm sm:text-base md:text-xl ${detailsSection === "payment" && "bg-primaryBlack text-secondaryWhite"}`}>Payment Details</button>
               </div>

               <div className="h-full">
                  {
                     detailsSection === "shipping" ?
                     <div className="p-2 flex flex-wrap justify-between gap-2">
                        <input className="m-2 p-2 border-[1px] border-primaryBlack focus:outline-none" placeholder="First Name" />
                        <input className="m-2 p-2 border-[1px] border-primaryBlack focus:outline-none" placeholder="Middle Name" />
                        <input className="m-2 p-2 border-[1px] border-primaryBlack focus:outline-none" placeholder="Last Name" />
                        <input className="w-full m-2 p-2 border-[1px] border-primaryBlack focus:outline-none" placeholder="Address Line 1" />
                        <input className="w-full m-2 p-2 border-[1px] border-primaryBlack focus:outline-none" placeholder="Address Line 2" />
                        <input className="w-1/2 m-2 p-2 border-[1px] border-primaryBlack focus:outline-none" placeholder="Email Address" />
                        <input className="w-1/2 m-2 p-2 border-[1px] border-primaryBlack focus:outline-none" placeholder="Phone Number" />

                        <button className="w-full m-2  p-2 self-end text-base sm:text-lg md:text-xl border-[1px] border-primaryRed hover:bg-primaryRed hover:text-secondaryWhite">Save & Next</button>
                     </div> :
                     <div className="p-2 flex flex-wrap justify-between gap-2">
                        <input className="m-2 p-2 border-[1px] border-primaryBlack focus:outline-none" placeholder="First Name" />
                        <input className="m-2 p-2 border-[1px] border-primaryBlack focus:outline-none" placeholder="Last Name" />
                        <input className="w-full m-2 p-2 border-[1px] border-primaryBlack focus:outline-none" placeholder="Card Number" />
                        <input className="w-full m-2 p-2 border-[1px] border-primaryBlack focus:outline-none" placeholder="Payment Method" />
                        <input className="w-1/2 m-2 p-2 border-[1px] border-primaryBlack focus:outline-none" placeholder="Email Address" />
                        <input className="w-1/2 m-2 p-2 border-[1px] border-primaryBlack focus:outline-none" placeholder="Phone Number" />

                        <button className="w-full m-2  p-2 self-end text-base sm:text-lg md:text-xl border-[1px] border-primaryRed hover:bg-primaryRed hover:text-secondaryWhite">Save & Next</button>
                     </div>
                  }
               </div>
            </div>

            <div className="w-full md:w-1/4 flex flex-col items-center gap-2 border-[1px] border-primaryBlack/50">
               <h1 className="w-full p-2 font-secondary text-base sm:text-lg md:text-xl text-center text-secondaryWhite bg-primaryBlack">In Your Cart</h1>

               <div className="w-full flex flex-col items-center gap-2">
                  <div className="w-full p-2 text-sm sm:text-base md:text-lg flex justify-between items-center">
                     <span>Total Items</span>
                     <span>{cartItems.length}</span>
                  </div>

                  <div className="w-full p-2 text-sm sm:text-base md:text-lg flex justify-between items-center">
                     <span>Subtotal</span>
                     <span>${cartPrice.toFixed(2)}</span>
                  </div>

                  <div className="w-full p-2 text-sm sm:text-base md:text-lg flex justify-between items-center">
                     <span>Shipping</span>
                     <span>$0.00</span>
                  </div>

                  <div className="w-full p-2 text-sm sm:text-base md:text-lg flex justify-between items-center">
                     <span>Total</span>
                     <span className="text-primaryRed">${cartPrice.toFixed(2)}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Checkout
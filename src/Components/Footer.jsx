import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShekelSign } from '@fortawesome/free-solid-svg-icons'

import ToTop from './ToTop'

function Footer() {
  return (
    <div className="py-10 px-[10%] bg-gradient-to-b from-white via-secondaryWhite to-primaryRed/50 font-primary flex flex-col md:flex-row justify-between items-center cursor-default relative">
      <div className="py-12 text-shadeLight flex flex-col justify-center items-center gap-4">
         <FontAwesomeIcon className="text-3xl" icon={faShekelSign} />
         <h1 className="text-5xl"><span className="text-primaryRed">Swift</span>Basket</h1>
      </div>

      <div className="w-full md:w-1/2 flex flex-col sm:flex-row justify-between gap-2">
        <ul className="mt-4">
          <li className="mb-4 text-lg opacity-80 hover:opacity-100">
            Company
          </li>

          <li className="mt-2 text-base text-black cursor-pointer hover:underline">
            About Us
          </li>

          <li className="mt-2 text-base text-black cursor-pointer hover:underline">
            Swift Plus
          </li>

          <li className="mt-2 text-base text-black cursor-pointer hover:underline">
            Career
          </li>

          <li className="mt-2 text-base text-black cursor-pointer hover:underline">
            Team
          </li>
        </ul>

        <ul className="mt-4">
          <li className="mb-4 text-lg opacity-80 hover:opacity-100">
            Contact
          </li>

          <li className="mt-2 text-base text-black cursor-pointer hover:underline">
            Help & Support
          </li>

          <li className="mt-2 text-base text-black cursor-pointer hover:underline">
            Partner with Us
          </li>

          <li className="mt-2 text-base text-black cursor-pointer hover:underline">
            Blogs
          </li>
        </ul>

        <ul className="mt-4">
          <li className="mb-4 text-lg opacity-80 hover:opacity-100">
            Legal
          </li>

          <li className="mt-2 text-base text-black cursor-pointer hover:underline">
            Terms & Conditions
          </li>

          <li className="mt-2 text-base text-black cursor-pointer hover:underline">
            Refund Policy
          </li>

          <li className="mt-2 text-base text-black cursor-pointer hover:underline">
            Privacy Policy
          </li>

          <li className="mt-2 text-base text-black cursor-pointer hover:underline">
            Cookie Policy
          </li>
        </ul>
      </div>
      
      <ToTop />
    </div>
  )
}

export default Footer
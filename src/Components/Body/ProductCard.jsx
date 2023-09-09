import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faShoppingBag, faStar } from "@fortawesome/free-solid-svg-icons"

function ProductCard({product}){
   return(
      <div className="m-2 p-4 font-primary flex flex-col justify-center items-center gap-2 border-[1px] border-primaryBlack/20 rounded-xl transition-all hover:shadow-lg">
         <div className="w-full flex justify-between items-center">
            <p>
               <FontAwesomeIcon className="text-lg text-orange-500" icon={faStar} />
               <span>{`${product?.rating?.rate} (${product?.rating?.count})`}</span>
            </p>

            <div className="p-2 flex justify-center items-center gap-2">
               <button>
                  <FontAwesomeIcon className="text-lg" icon={faShoppingBag} />
               </button>

               <button>
                  <FontAwesomeIcon className="text-lg" icon={faHeart} />
               </button>
            </div>
         </div>

         <img className="p-2 h-[200px] w-[200px] object-contain" alt="Product Image" src={product?.image}></img>

         <p className="w-full opacity-80 uppercase">{product?.category}</p>
         <h1 className="h-8 text-lg w-full overflow-y-hidden">{product?.title}</h1>

         <p className="w-full font-secondary text-lg text-primaryRed">${product?.price}</p>
      </div>

   )
}

export default ProductCard
import { useRouteError } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

function ErrorLayout(){
   const error = useRouteError()
   const {status, statusText} = error

   return(
      <>
      <Header />
      <div className="min-h-screen bg-shadeLight flex flex-col justify-center items-center">
         <p className="font-bold text-7xl">{status}</p>
         <p className="font-bold text-7xl">{statusText}</p>
      </div>
      <Footer />
      </>
   )
}

export default ErrorLayout
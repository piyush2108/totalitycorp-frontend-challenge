import { useEffect, useState } from "react"
import { authorizeUser } from "../../Utils/utils"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import { assignUser } from "../../Store/Slices/CartSlice"

function Auth(){
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")
   const [isLogin, setIsLogin] = useState(false)
   const [errorMsg, setErrorMsg] = useState("")

   useEffect(() => {
      if(isLogin){
         navigate("/")
      }
   }, [isLogin])

   const handleChangeUsername = (e) => {
      setUsername(e.target.value)
   }

   const handleChangePassword = (e) => {
      setPassword(e.target.value)
   }

   const handleUserAuth = async() => {
      let user = {
         username: username,
         password: password
      }

      const status = await authorizeUser(user)

      setIsLogin(status)
      if(status){
         setErrorMsg("")
         dispatch(assignUser(user))
      }
      else{
         setErrorMsg("Enter correct Username and Password")
      }
   }

   return(
      <div className="w-full min-h-[80vh] font-primary flex flex-col justify-center items-center gap-2">
         {
            errorMsg !== "" &&
            <p className="text-sm sm:text-base md:text-lg text-primaryRed opacity-80">{errorMsg}</p>
         }

         <input 
            onChange={(e) => handleChangeUsername(e)}
            value={username}
            placeholder="Enter Username"
            className="p-2 sm:text-lg md:text-xl text-left border-[1px] border-primaryBlack  focus:outline-none"
         />
         
         <input 
            onChange={(e) => handleChangePassword(e)}
            value={password}
            placeholder="Enter Password"
            className="p-2 sm:text-lg md:text-xl text-left border-[1px] border-primaryBlack  focus:outline-none"
         />

         <p className="text-xs sm:text-sm md:text-base opacity-80">Username: kevinryan</p>
         <p className="text-xs sm:text-sm md:text-base opacity-80">Password: kev02937@</p>

         <button 
            className="p-2 sm:text-lg md:text-xl text-left border-[1px] border-primaryRed  focus:outline-none hover:bg-primaryRed hover:text-secondaryWhite"
            onClick={() => handleUserAuth()}
         >
            Login
         </button>
      </div>
   )
}

export default Auth
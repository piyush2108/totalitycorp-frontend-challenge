export const filterData = (products, targetTitle, targetCategory) => {
   let data

   if(targetTitle === ""){
      data = products.filter(product => {
         if(targetCategory !== ""){
            return product.category.toLowerCase() === targetCategory.toLowerCase()
         }
         else{
            return true
         }
      })
   }

   else{
      data = products.filter(product => {
         if(targetCategory !== ""){
            return product.category.toLowerCase() === targetCategory.toLowerCase() &&
            product.title.toLowerCase().includes(targetTitle.toLowerCase())
         }
         else{
            return true
         }
      })
   } 

   return data
};

export const authorizeUser = async(user) => {
   let status

   try {
      const data = await fetch('https://fakestoreapi.com/auth/login', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
          },
         body: JSON.stringify({
            username: user.username,
            password: user.password,
         }),
      });
      const json = await data.json()

      status = true
      // console.log(json)
   } catch (error) {
      status = false
      console.log(error)
   }

   return status
}
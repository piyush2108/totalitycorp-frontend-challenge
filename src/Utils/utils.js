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
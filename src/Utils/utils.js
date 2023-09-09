export const filterData = (products, targetTitle, targetCategory) => {
   const data = products.filter(product => {
      if(targetCategory === ""){
         return product.title.toLowerCase().includes(targetTitle.toLowerCase())
      }
      else{
         return (
            product.title.toLowerCase().includes(targetTitle.toLowerCase()) &&
            product.category.toLowerCase() === targetCategory.toLowerCase()
          )
      }
   })
   
   return data;   
};
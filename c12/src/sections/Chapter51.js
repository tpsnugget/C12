import React from 'react'

const Chapter51 = () => {

   var multiplier = 10
   var limit = 1

   var arr1 = [1, 2, 3]
   console.log("arr1 is", arr1)

   var arr2 = arr1.map( num => num * multiplier )
   console.log(`arr2 is arr1 multiplied by ${multiplier}:`, arr2)

   var arr3 = arr1.map( num => num > limit )
   console.log(`Items in arr1 that are greater than ${limit}:`, arr3)

   return (
      <div>
         
      </div>
   )
}

export default Chapter51

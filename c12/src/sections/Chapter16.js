import React from 'react'

const Chapter16 = () => {

   // function b(){
   //    console.log("function b() myVar is", myVar)
   // }

   function a(){
      // var myVar = 2
      b()

      function b(){
         console.log("function b() myVar is", myVar)
      }
   }

   var myVar = 1
   a()

   return (
      <div>

      </div>
   )
}

export default Chapter16

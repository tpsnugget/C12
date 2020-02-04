import React from 'react'
import { addTwo, subTwo } from "../helpers"

const Chapter10 = () => {

   a()

   // funciton a() is hoisted in its context and so it function b(), but since
   // the function b() context is inside function a(), it is not available outside
   // of function a()
   function a(){
      console.log("Function a is running...")
      // debugger
      b()
      function b(){
         console.log("Function b is running...")
         // debugger
      }
   }

   const x = 10
   const y = 35

   return (
      <div>
         <h1>Chapter is up Man!</h1>
         <h2>{x} + {y} = {addTwo(x, y)}</h2>
         <h2>{x} - {y} = {subTwo(x, y)}</h2>
      </div>
   )
}

export default Chapter10

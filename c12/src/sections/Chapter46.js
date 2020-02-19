import React from 'react'

const Chapter46 = () => {

   // Closures
   function greet(whattosay){
      return function(name){
         console.log(whattosay + " " + name)
      }
   }

   var myGreet = greet("Hello")

   myGreet("Mike")

   return (
      <div>
         
      </div>
   )
}

export default Chapter46

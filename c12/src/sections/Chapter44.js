import React from 'react'

const Chapter44 = () => {

   var firstname = "Michael";

   (function(name){
      var greeting = "Inside IIFE: Hello"  + name
      console.log(greeting)
   }(firstname))

   return (
      <div>
         
      </div>
   )
}

export default Chapter44

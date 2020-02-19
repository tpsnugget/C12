import React from 'react'

const Chapter45 = () => {

   var greeting = "Hola";

   (function(name){
      var greeting = "Hello"
      console.log(greeting + " " + name)
   }("Mike"))

   return (
      <div>
         
      </div>
   )
}

export default Chapter45

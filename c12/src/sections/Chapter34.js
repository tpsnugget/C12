import React from 'react'

const Chapter34 = () => {

   function greet(){
      console.log("Hi from the greet function")
   }

   greet.language = "English"

   greet.address = {
      street: "509 Timber Ln"
   }

   console.log("The greet function is", greet)
   console.log("greet.language is", greet.language)
   console.log("greet.address is", greet.address)
   greet()

   return (
      <div>
         
      </div>
   )
}

export default Chapter34

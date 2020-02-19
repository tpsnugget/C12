import React from 'react'

const Chapter33 = () => {

   var personObject = {
      firstname: "Mike",
      lastname: "Giebner"
   }

   var personJSON = JSON.stringify(personObject)

   console.log("Object Literal", personObject)
   console.log("JSON", personJSON)

   return (
      <div>
         
      </div>
   )
}

export default Chapter33

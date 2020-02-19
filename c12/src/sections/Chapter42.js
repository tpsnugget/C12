import React from 'react'

const Chapter42 = () => {

   // This causes an error as the JS syntax parser insers a ; after the return
   // statement, and therefore does not return the object as intended
   // function getPerson() {
   //    return
   //    {
   //       firstname: "Mike"
   //    }
   // }

   // This does not cause an error since the JS syntax parser sees the space followed
   // by the {
   function getPerson() {
      return {
         firstname: "Mike"
      }
   }

   console.log(getPerson())

   return (
      <div>

      </div>
   )
}

export default Chapter42

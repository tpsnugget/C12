import React from 'react'

const Chapter30 = () => {

   var person = {
      firstname: "Tony",
      address: {
         street: "Main Street",
         city: "Asheville",
         state: "NC"
      },
      printName() {
         return console.log("First name is", this.firstname)
      }
   }

   return (
      <div>
         <h2>{person.firstname}</h2>
         {person.printName()}
         {person.address.city}
      </div>
   )
}

export default Chapter30

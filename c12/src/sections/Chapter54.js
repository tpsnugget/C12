import React from 'react'

const Chapter54 = () => {

   var person = {
      firstname: "Default",
      lastname: "Default",
      getFullName: function(){
         return this.firstname + " " + this.lastname
      }
   }

   var john = {
      firstname: "Michael",
      lastname: "Giebner"
   }

   console.log(person.getFullName())

   // Don't EVER do the next line. For demo purposes only!!
   john.__proto__ = person

   console.log(john.getFullName())

   var jane = {
      firstname: "Jane"
   }

   // Don't EVER do the next line. For demo purposes only!!
   jane.__proto__ = john

   console.log(jane.getFullName())

   return (
      <div>
         
      </div>
   )
}

export default Chapter54

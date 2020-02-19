import React from 'react'

const Chapter57 = () => {

   const otherPerson = {
      firstname: "Sally"
   }

   function Person(firstname, lastname){
      this.firstname = firstname
      this.lastname = lastname
   }

   var mike = new Person("Mike", "Giebner")
   console.log("mike is", mike)

   var jack = new Person("Jack", "Smith")
   console.log("jack is", jack)

   console.log("Person.firstname is", Person.firstname)
   console.log("mike.firstname is", mike.firstname)
   console.log("otherPerson.firstname is", otherPerson.firstname)

   return (
      <div>
         
      </div>
   )
}

export default Chapter57

import React from 'react'

const Chapter57 = () => {

   function Person(firstname, lastname){
      this.firstname = firstname
      this.lastname = lastname
   }

   Person.prototype.getFullName = function(){
      return this.firstname + " " + this.lastname
   }

   var mike = new Person("Mike", "Giebner")
   console.log("mike is", mike)
   console.log("mike.getFullName() is", mike.getFullName())

   var jack = new Person("Jack", "Smith")
   console.log("jack is", jack)

   console.log("Person.firstname is", Person.firstname)
   console.log("mike.firstname is", mike.firstname)

   Person.prototype.getFormalFullName = function(){
      return this.lastname + ", " + this.firstname
   }

   console.log("mike.getFormalFullName() is", mike.getFormalFullName())

   return (
      <div>
         
      </div>
   )
}

export default Chapter57

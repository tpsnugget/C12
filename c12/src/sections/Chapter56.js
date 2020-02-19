import React from 'react'
import _ from "underscore"

const Chapter56 = () => {

   var person = {
      firstname: "Default",
      middlename: "Green",
      lastname: "Default",
      getFullName: function () {
         return this.firstname + " " + this.lastname
      }
   }

   var john = {
      firstname: "Michael",
      lastname: "Giebner"
   }

   // Don't EVER do the next line. For demo purposes only!!
   john.__proto__ = person

   for (var prop in john){
      console.log(prop + ": " + john[prop])
   }

   var jane = {
      address: "509 Timber Ln",
      getFormalFullName: function(){
         return this.lastname + ", " + this.firstname
      }
   }

   var jim = {
      firstname: "Jim, not Michael anymore",
      getFirstName: function(){
         return this.firstname
      }
   }

   // From underscore.js library
   _.extend(john, jane, jim)

   console.log("John is", john)

   return (
      <div>

      </div>
   )
}

export default Chapter56

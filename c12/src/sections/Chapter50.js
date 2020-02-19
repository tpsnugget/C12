import React from 'react'

const Chapter50 = () => {

   var person = {
      firstname: "John",
      lastname: "Doe",
      getFullName: function(){
         var fullname = this.firstname + " " + this.lastname
         return fullname
      }
   }

   var logName = function(lang1, lang2){
      console.log("Logged: " + this.getFullName())
   }.call(person)

   // logName()

   return (
      <div>
         
      </div>
   )
}

export default Chapter50

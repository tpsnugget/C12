import React from 'react'

const Chapter37 = () => {

   var a = "Global Object"

   var b = {
      name: "b",
      firstname: "Mike",
      c(){
         var self = this
         console.log("c function self is", self)
         self.firstname = "Stephen"
         console.log("c function self.firstname is", self.firstname)
         function d(){
            console.log("d function self is", self)
            console.log("d function self.firstname is", self.firstname)
            console.log("d function a is", a)
         }
         d()
      }
   }



   b.c()

   return (
      <div>
         
      </div>
   )
}

export default Chapter37

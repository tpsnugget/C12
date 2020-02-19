import React from 'react'

const Chapter36 = () => {

   // Copying a primitive is done by value
   var a = 3
   var b = a
   b = 5
   console.log("a is", a, "and b is", b)

   // Copying an object is done by reference
   var c = { name: "Mike" }
   var d = c
   d.name = "Stephen"
   console.log("c is", c.name, "and d is", d.name)

   return (
      <div>

      </div>
   )
}

export default Chapter36

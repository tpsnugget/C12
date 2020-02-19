import React from 'react'

const Chapter47 = () => {

   // More on closures
   function buildFunctions(){
      var arr = []

      for(var i = 0; i < 3; i++){
         arr.push( function(){
            console.log(i)
         })
      }
      return arr
   }

   var fs = buildFunctions()

   console.log("fs is", fs)
   fs[0]()
   fs[1]()
   fs[2]()

   return (
      <div>
         
      </div>
   )
}

export default Chapter47

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

import React from 'react'

const Closures = () => {

   // Example One
   // function init(){
   //    var name = "Mozilla"

   //    function displayName(){
   //       alert(name)
   //    }

   //    displayName()
   // }

   // init()

   // Example Two
   // function makeFunc(){
   //    var name = "Mozilla"

   //    function displayName(){
   //       alert(name)
   //    }

   //    return displayName
   // }

   // var myFunc = makeFunc()

   // myFunc()

   // Example Three
   // function makeAdder(x){
   //    return function(y){
   //       return x + y
   //    }
   // }

   // var add5 = makeAdder(5)
   // var add10 = makeAdder(10)

   // console.log(add5(2))
   // console.log(add10(2))

   // Module Pattern example
   // var counter = (function () {
   //    var privateCounter = 0

   //    function changeBy(val){
   //       privateCounter += val
   //    }
      
   //    return {
   //       increment: function(){
   //          changeBy(1)
   //       },
   //       decrement: function(){
   //          changeBy(-1)
   //       },
   //       value: function(){
   //          return privateCounter
   //       }
   //    }
   // })()

   // console.log("counter.value is", counter.value())
   // counter.increment()
   // counter.increment()
   // console.log("counter.value is", counter.value())
   // counter.decrement()
   // console.log("counter.value is", counter.value())

   // Closure Scope Chain
   var e = 10
   function sum(a){
      return function(b){
         return function(c){
            return function (d){
               return a + b + c + d + e
            }
         }
      }
   }

   console.log( sum(1)(2)(3)(4) )

   return (
      <div>

      </div>
   )
}

export default Closures

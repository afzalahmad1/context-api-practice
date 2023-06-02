import React, { useContext } from 'react'
import {data1,data2} from '../App'


/*
//Props drilling problem

export default function Child3({value}) {
  return (
    <div>
      <h1>My name is {value}</h1>
    </div>
  )
}
*/


 //(context api)   with consumer
/*
 export default function Child3() {
   return (
     <div>
       <data1.Consumer>
        {
            (name)=>{
                return(
                    <>
                      <data2.Consumer>
                        {
                            (gender)=>{
                                return(
                                    <h1>{name}, {gender}</h1>
                                )
                            }
                        }
                      </data2.Consumer>
                    </>
                )
            }
        }
       </data1.Consumer>
     </div>
   )
 }
 */




//(context api)  with useContext
 export default function Child3() {
   const name = useContext(data1); 
   const gender = useContext(data2)

   return (
     <div>
        <h1>{name}, {gender} </h1>
       
     </div>
   )
 }
 
 
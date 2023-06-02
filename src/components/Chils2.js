import React from 'react'
import Child3 from './Child3'


/*
//Props drilling problem

export default function Chils2({value}) {
  return (
    <div>
      <Child3  value={value}/>
    </div>
  )
}
*/


//(context api)

export default function Chils2() {
  return (
    <div>
      <Child3 />
    </div>
  )
}

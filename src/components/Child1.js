import React from 'react'
import Child2 from './Chils2'


/*
//Props drilling problem

export default function Child1({value}) {
  return (
    <div>
      <Child2  value={value}/>
    </div>
  )
}
*/

//(context api)
export default function Child1() {
  return (
    <div>
      <Child2 />
    </div>
  )
}


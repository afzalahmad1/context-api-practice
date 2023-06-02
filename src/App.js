import React,{createContext} from 'react'
import Child1 from './components/Child1'


/*
//Props drilling problem

export default function App() {

  const name = "Afzal"


  return (
    <div>
      <Child1 value={name}/>
    </div>
  )
}
*/



// solution of props drilling problem (context api)

const data1 = createContext() ;
const data2 = createContext();
function App() {
  const name = "Afzal"
  const gender ="Male"

  return (
    <div>
      <data1.Provider value={name}>
        <data2.Provider value={gender}>
           <Child1 />
        </data2.Provider>
      </data1.Provider>
    </div>
  )
}
export default App;
export {data1,data2};


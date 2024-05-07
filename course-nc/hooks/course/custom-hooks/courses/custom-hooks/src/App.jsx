
import { useEffect } from 'react'

import useHello from "./hooks/useHello"

function App() {

  // const UseHello = useHello()

  // useEffect(() => {
    
  //   UseHello

  // }, [])
  
  

  return (
    <>
      <div>
        <h2>CUSTOM HOOKS</h2>
        {useHello()}
      </div>
    </>
  )
}

export default App

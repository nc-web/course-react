
import { useEffect, useState } from 'react'

import useHello from "./hooks/useHello"

function App() {

  const [lsCounter, setLSCounter ] = useState(0)

  const addCounter = () => {
    setLSCounter(+ 1)
  }

  const removeCounter = () => {
    setLSCounter(- 1)
  }

  const resetCounter = () => {
    setLSCounter(0)
  }
  
  // const UseHello = useHello()

  // useEffect(() => {
    
  //   UseHello

  // }, [])
  
  
  return (
    <>
      <section>
        <header>
          <h1>CUSTOM HOOKS</h1>
        </header>

        <hr />

        <article>
          <h2>useHello</h2>
          <div>
            {useHello()}
            <h3>{useHello()}</h3>
          </div>
        </article>

        <hr />

        <article>
          <h2>useCounter</h2>

          <div>
            <p>{lsCounter}</p>
            <button>-</button>
            <button>Reset</button>
            <button>+</button>
          </div>

        </article>
        
      </section>
    </>
  )
}

export default App

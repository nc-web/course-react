
import { useState } from "react"

export default function Counter03() {

    const [count, setCount] = useState(0)

    function counterAdd() {
        setCount(count + 1)
    }

    function counterSub() {
        setCount(count - 1)
    }

    function countReset() {
        setCount(0)
    }

    return(
        <>
            <h2>Counter 03</h2>
            <h3>{count}</h3>
            <div>
                
                <button onClick={counterSub}>-</button>
                <button onClick={counterAdd}>+</button>
            </div>
            <div>
                <button onClick={countReset}>Reset</button>
            </div>
        </>
    )

}

import { useState } from "react"

export default function Counter03() {

    const [count, setCount] = useState(0)

    function counterAdd() {
        setCount(count + 1)
    }

    function counterSub() {
        setCount(count - 1)
    }

    function counterReset() {
        setCount(0)
    }

    return(
        <>
            <h2>COUNTER 03</h2>
            <h3>{count}</h3>
            <div>
                <button onClick={counterAdd}>+</button>
                <button onClick={counterSub}>-</button>
            </div>
            <div>
                <button onClick={counterReset}>reset</button>
            </div>
            
        </>
    )
}
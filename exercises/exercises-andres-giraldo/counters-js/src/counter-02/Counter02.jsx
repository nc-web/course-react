
import { useState } from "react"

export default function Counter02() {

    const [count, setCount] = useState(0)
    
    return(
        <>
            <div className="card">
                <h2>Counter 02</h2>
                <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </button>
            </div>
        </>
    )
}
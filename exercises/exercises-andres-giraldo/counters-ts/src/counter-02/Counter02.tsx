
import { useState } from "react"

export default function Counter02() {

    const [count, setCount] = useState(0)

    return(
        <>
            <h2>Counter 02</h2>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </button>
                <p>
                Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
        </>
    )
}
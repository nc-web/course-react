
import { useState } from 'react'

// Components
import LineChart01 from './react-chartjs-2/course-nc/line-charts/line-chart-01/LineChart01'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LineChart01 />
    </>
  )
}

export default App

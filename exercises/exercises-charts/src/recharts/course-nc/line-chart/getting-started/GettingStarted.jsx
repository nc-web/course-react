
import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
  {name: 'Page A', uv: 100, pv: 1400, amt: 2400},
  {name: 'Page B', uv: 150, pv: 1400, amt: 2800}, 
  {name: 'Page C', uv: 180, pv: 1400, amt: 2800},
  {name: 'Page D', uv: 80, pv: 1400, amt: 2800},
  {name: 'Page E', uv: 280, pv: 1400, amt: 2800},
  {name: 'Page E', uv: 320, pv: 1400, amt: 2800},
];

const GettingStarted = () => {
  return (
    <>
      <h2>LINE CHART</h2>
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
    </>
  )
}

export default GettingStarted
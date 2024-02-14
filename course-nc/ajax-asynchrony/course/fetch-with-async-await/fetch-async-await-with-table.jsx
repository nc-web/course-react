
import { useState, useEffect } from 'react'

const FetchPromisesWithTable = () => {
  const [data, setData] = useState([])

  useEffect(async () => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/users'
      const dataAPI = await fetch(url)
      const dataJson = await dataAPI.json()
      console.log(dataJson)
      setData(dataJson)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <h3> FETCH ASYNC AWAIT WITH TABLE </h3>
      <table>
        <thead>
          <th>ID</th>
          <th>USER</th>
          <th>NAME</th>
          <th>EMAIL</th>
        </thead>
        <tbody>
          {
            data.map(record => (
              <>
                <tr>
                  <td> {record.id} </td>
                  <td> {record.username} </td>
                  <td> {record.name} </td>
                  <td> {record.email} </td>
                </tr>
              </>
            ))
          }
        </tbody>
      </table>

    </>
  )
}

export default FetchPromisesWithTable

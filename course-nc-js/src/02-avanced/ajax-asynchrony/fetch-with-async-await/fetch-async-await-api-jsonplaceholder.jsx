
import { useState, useEffect } from 'react'

const FetchReactAsync = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    apiData()
  }, [])

  const apiData = async () => {
    try {
      const api = 'https://jsonplaceholder.typicode.com/users'
      const result = await fetch(api)
      const getResult = await result.json()
      setData(getResult)
    } catch (error) {
      console.error(error)
    }
  }

  console.log(data)
  return (
    <>
      <h3> FETCH REACT - ASYNC AWAIT </h3>
      {data.map(record => (
        <>
          <p key={record.id}> Id: {record.id}, Name: {record.name}, Username: {record.username} </p>
          <p> Email: {record.email} </p>
        </>

      ))}
    </>
  )
}

export default FetchReactAsync

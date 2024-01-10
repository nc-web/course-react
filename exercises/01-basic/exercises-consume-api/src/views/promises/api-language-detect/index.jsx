
import { useState, useEffect } from 'react'
import { Div, P } from 'nc-styles-react' 

const APIOpenWeather = () => {
  const [stateAPI, setStateAPI] = useState([])

  const encodedParams = new URLSearchParams()
  encodedParams.append('q', 'Dog Strong')

  useEffect(() => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '669a272678msh8b81fd22c306654p171bb3jsn0e867f817143',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      body: encodedParams
    }
    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/detect', options)
      .then(res => res.json())
      .then(data => setStateAPI(data.results))
      .then(res => console.log(res))
      .catch(err => console.error(`Error API: ${err}`))

    console.log(`State API: ${stateAPI}`)
  }, [])

  return (
        <>
          <Div>
            API LANGUAGE DETECT
              {
                stateAPI.map(x => (
                  <P key={x.confidence}>{x.language}</P>
                ))
              }
          </Div>
            
        </>
  )
}

export default APIOpenWeather


import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { Section, Header, Article, Div, Img, H5, P, Button } from 'nc-styles-react'

// Icons
import { mdiApi, mdiArrowLeftCircle } from '@mdi/js'

const APIOpenWeather = () => {
  const [stateCity, setStateCity] = useState('Cali')
  const [stateLocation, setStateLocation] = useState({})
  const [stateAPI, setStateAPI] = useState([])

  const encodedParams = new URLSearchParams()
  encodedParams.append('location', 'Buga')

  const options = {
    id: Math.floor(Math.random() * 1000),
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '669a272678msh8b81fd22c306654p171bb3jsn0e867f817143',
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
    // body: encodedParams
  }

  useEffect(() => {
    dataLocation()
    dataForecasts()
  }, [])

  const dataLocation = () => {
    fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${stateCity}&format=json&u=f`, options)
      // .then(response => console.log(response.json()))
      .then(response => response.json())
      .then(data => setStateLocation(data.location))
  }

  const dataForecasts = () => {
    fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${stateCity}&format=json&u=f`, options)
      // .then(response => console.log(response.json()))
      .then(response => response.json())
      .then(data => setStateAPI(data.forecasts))
  }

  return (
        <>
          <Section>
            <Header textCenter colorGray800 marginY='1rem'>
            <Div>
              <Div displayGrid justifyContent='center' marginY='.5rem'>
                <Icon path={mdiApi} size='2.5rem' color='#2196F3' />
              </Div>
              <H5>YAHOO WEATHER</H5>
            </Div>
            <Div marginY='.5rem'>
              <P colorGray700>Type: REST API</P>
              <P colorGray700>Tecnology: Fetch - Promises</P>
              <P colorGray700>Web: https://rapidapi.com/apishub/api/yahoo-weather5/</P>
              <P colorBlue500>URL API: https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f</P>
            </Div>
            <Div>
              <Link to='/promises'>
                <Button button2 hover='background-color: #FBC02D'>
                  <Icon path={mdiArrowLeftCircle } size='2rem' color='#2196F3' />
                </Button>
              </Link>
            </Div>
          </Header>

          <Article>
          <H5>{stateLocation.city}</H5>
            <P>{stateLocation.region}</P>
            <P>{stateLocation.country}</P>
            <P>{stateLocation.timezone_id}</P>
            {
              stateAPI.map(x => (
                <Div key={x.id} displayFlex>
                  <P marginX='.5rem'>{x.day}</P>
                  <P marginX='.5rem'>{x.date}</P>
                  <P marginX='.5rem'>{x.text}</P>
                </Div>
              ))
            }
          </Article>
          </Section>
        </>
  )
}

export default APIOpenWeather

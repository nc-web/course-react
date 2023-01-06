
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { Section, Header, Article, Div, Img, H5, P, Button } from 'nc-styles-react'

// Icons
import { mdiApi, mdiArrowLeftCircle } from '@mdi/js'

const APIRickAndMorty = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    rickMortyAPI()
  }, [])

  async function rickMortyAPI () {
    const res = await fetch('https://rickandmortyapi.com/api/character/')
    const json = await res.json()
    console.log(json)
    setCharacters(json.results)
  }

  return (
    <>
      <Section padding='1rem'>
        <Header textCenter colorGray800 marginY='1rem'>
          <Div>
            <Div displayGrid justifyContent='center' marginY='.5rem'>
              <Icon path={mdiApi} size='2.5rem' color='#2196F3' />
            </Div>
            <H5>RICK & MORTY</H5>
          </Div>
          <Div marginY='.5rem'>
            <P colorGray700>Type: REST API</P>
            <P colorGray700>Tecnology: Fetch - Async Await</P>
            <P colorGray700>Web: https://rickandmortyapi.com/</P>
            <P colorBlue500>URL API: https://rickandmortyapi.com/api/character/</P>
          </Div>
          <Div>
            <Link to='/promises'>
              <Button button2 hover='background-color: #FBC02D'>
                <Icon path={mdiArrowLeftCircle } size='2rem' color='#2196F3' />
              </Button>
            </Link>
          </Div>
        </Header>
        <Article className='Characters'
          displayGrid
          gridTemplateColumnsAutoFill15
          gap='2rem'
          padding='1rem'
          >
          {
          characters.map(x => (
            <Div key={x.id} marginAuto padding='.8rem' borderRadius='.5rem' boxShadowBR1 background='linear-gradient(135deg, #BDBDBD, 30%, #757575)'>
              <Img src={x.image} alt='' width='12rem' borderRadius='.5rem' marginB='.5rem'/>
              <P textCenter colorWhite>{x.name}</P>
            </Div>
          ))
          }
        </Article>
      </Section>
    </>
  )
}

export default APIRickAndMorty


import { useState, useEffect } from 'react'
import { Div, Img, P } from 'nc-styles-react'

const APIRickAndMorty = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }, [])

  return (
    <>
      <Div padding='1rem'>
        <Div className='Characters'
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
        </Div>
      </Div>
    </>
  )
}

export default APIRickAndMorty

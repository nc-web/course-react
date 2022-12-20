
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
      <Div displayGrid jcCenter>
        <Div className='Characters' displayGrid jcCenter gtcAutoFit18>
          {
          characters.map(x => (
            <Div key={x.id}>
              <Img src={x.image} alt='' style={{ width: '150px' }} />
              <P>{x.name}</P>
            </Div>
          ))
          }
        </Div>
      </Div>
    </>
  )
}

export default APIRickAndMorty

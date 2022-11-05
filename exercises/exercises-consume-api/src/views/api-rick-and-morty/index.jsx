
import React, { useState, useEffect } from 'react'

// Components Base
import Div from '@components/div'
import Img from '@components/img'
import P from '@components/p'

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
          {characters.map(character => (
            <Div key={character.id}>
              <Img src={character.image} alt='' style={{ width: '150px' }} />
              <P>{character.name}</P>
            </Div>
          ))}
        </Div>
      </Div>
    </>
  )
}

export default APIRickAndMorty

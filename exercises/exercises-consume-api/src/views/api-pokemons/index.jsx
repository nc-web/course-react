
import React, { useState, useEffect } from 'react'

// Components
import Div from '@components/div'
import H4 from '@components/h4'
import P from '@components/p'

const Pokemon = ({ avatar, name }) => {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption> {name} </figcaption>
    </figure>
  )
}

const APIPokemonsUseEffect = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const getPokemons = async (url) => {
      const res = await fetch(url)
      const json = await res.json()
      // console.log(json);

      json.results.forEach(async (el) => {
        const res = await fetch(el.url)
        const json = await res.json()

        // console.log(json);
        const pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default
        }

        setPokemons((pokemons) => [...pokemons, pokemon])
      })
    }

    getPokemons('https://pokeapi.co/api/v2/pokemon/')

    return () => {
      console.log('Limpiando')
    }
  }, [])

  return (
    <>
      <Div padding='1rem'>
        <Div displayGrid jcCenter>
          <H4 textPink500> API Pokemon useEffect - Fetch </H4>
        </Div>

        <Div displayGrid jcCenter aiCenter gtcAutoFit18>
          {
            pokemons.length === 0
              ? (
                <P> Cargando ... </P>
              )
              : (
                pokemons.map((el) => (
                  <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
                ))
              )
          }
        </Div>
      </Div>
    </>
  )
}

export default APIPokemonsUseEffect

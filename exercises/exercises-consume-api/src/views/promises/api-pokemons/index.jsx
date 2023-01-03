import { useState, useEffect } from 'react'
import { Div, Figure, Img, Figcaption, H4, P } from 'nc-styles-react'

const Pokemon = ({ avatar, name }) => {
  return (
    <Div displayGrid gridTemplateColumn15Fill>
      <Figure>
        <Img src={avatar} width='12rem' alt={name} />
        <Figcaption> {name} </Figcaption>
      </Figure>
    </Div>
  )
}

const APIPokemons = () => {
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
      <Div padding="1rem">
        <Div displayGrid jcCenter>
          <H4 textPink500> API Pokemon - Fetch useEffect</H4>
        </Div>

        <Div displayGrid jcCenter aiCenter gtcAutoFit18>
          {
          pokemons.length === 0 ? (
            <P> Cargando ... </P>
          ) : (
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

export default APIPokemons

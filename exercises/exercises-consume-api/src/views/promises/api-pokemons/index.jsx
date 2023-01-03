
import { useState, useEffect } from 'react'
import { Div, Figure, Img, Figcaption, H4, P } from 'nc-styles-react'

const Pokemon = ({ avatar, name }) => {
  return (
    <Div marginAuto padding='.5rem' borderRadius='.5rem' boxShadowBR1 background='linear-gradient(135deg, #BDBDBD, 30%, #757575)'>
      <Figure>
        <Img src={avatar} width='11rem' alt={name} />
        <Figcaption textCenter colorWhite> {name} </Figcaption>
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
        <Div textCenter>
          <H4 textPink500> API Pokemon - Fetch useEffect</H4>
        </Div>

        <Div
          displayGrid
          gridTemplateColumnsAutoFill15
          jcCenter
          gap='2rem'
          padding='1rem'>
          {
          pokemons.length === 0
            ? (
            <P> Cargando ... </P>
              )
            : (
                pokemons.map(x => (
              <Pokemon key={x.id} name={x.name} avatar={x.avatar} />
                ))
              )
          }
        </Div>
      </Div>
    </>
  )
}

export default APIPokemons

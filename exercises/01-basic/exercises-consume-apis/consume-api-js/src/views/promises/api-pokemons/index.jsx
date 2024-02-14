
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { Section, Header, Div, Figure, Img, Figcaption, H5, P, Button } from 'nc-styles-react'

// Icons
import { mdiApi, mdiArrowLeftCircle } from '@mdi/js'

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
      <Section padding="1rem">
        <Header textCenter colorGray800 marginY='1rem'>
          <Div>
            <Div displayGrid justifyContent='center' marginY='.5rem'>
              <Icon path={mdiApi} size='2.5rem' color='#2196F3' />
            </Div>
            <H5>POKEMONS</H5>
          </Div>
          <Div marginY='.5rem'>
            <P colorGray700>Type: REST API</P>
            <P colorGray700>Tecnology: Fetch - Promises</P>
            <P colorGray700>Web: https://pokeapi.co/</P>
            <P colorBlue500>URL API: https://pokeapi.co/api/v2/pokemon/</P>
          </Div>
          <Div>
            <Link to='/promises'>
              <Button button2 hover='background-color: #FBC02D'>
                <Icon path={mdiArrowLeftCircle} size='2rem' color='#2196F3' />
              </Button>
            </Link>
          </Div>
        </Header>

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
      </Section>
    </>
  )
}

export default APIPokemons

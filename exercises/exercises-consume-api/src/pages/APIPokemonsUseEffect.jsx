
import { useState, useEffect } from 'react'

// Layouts
import LayoutDashboard from '@layouts/LayoutDashboard'

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
    );
}

const APIPokemonsUseEffect = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {

        const getPokemons = async (url) => {
            let res = await fetch(url),
                json = await res.json();
            //console.log(json);

            json.results.forEach(async (el) => {
                let res = await fetch(el.url),
                    json = await res.json();

                //console.log(json);
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default,
                };

                setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        };

        getPokemons("https://pokeapi.co/api/v2/pokemon/");

        return () => {
            console.log('Limpiando')
        }

    }, [])

    return (
        <>
            <LayoutDashboard>
                <Div>
                    <Div displayGrid jcCenter>
                        <H4 textPink500> API Pokemon useEffect - Fetch </H4>
                    </Div>

                    <Div displayGrid jcCenter>
                        {
                            pokemons.length === 0 ? (
                                <P> Cargando </P>
                            ) : (
                                pokemons.map((el) => (
                                    <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
                                ))
                            )
                        }
                    </Div>
                </Div>
            </LayoutDashboard>

        </>
    )
}

export default APIPokemonsUseEffect

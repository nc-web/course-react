
import { } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Ul, Div, H4, P } from 'nc-styles-react'

const Menu = () => {
  return (
        <>
            <Nav displayFlex jcSpaceBetween aiCenter>
                <Div><H4>EXERCISES CONSUME API</H4></Div>
                <Div>
                    <Ul><Link to='/'><P>Inicio</P></Link></Ul>
                    <Ul><Link to='/api-basic-photos'><P>API Basic Photos</P></Link></Ul>
                    <Ul><Link to='/api-pokemons'><P>API Pokemons</P></Link></Ul>
                    <Ul><Link to='/api-rick-and-morty'><P>API Rick & Morty</P></Link></Ul>
                </Div>
            </Nav>
        </>
  )
}

export default Menu

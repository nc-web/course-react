
import {} from 'react'
import { Nav, Div, Ul, H4, P } from 'nc-styles-js'

// Router
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
        <Nav displayFlex jcSpaceBetween aiCenter padding='0.8rem' bgColorGray600>
            <Div>
                <H4 colorWhite>EXERCISES CARDS</H4>
            </Div>
            <Div displayFlex jcCenter aiCenter>
                <Ul><Link to="/"><P colorWhite>Inicio</P></Link></Ul>
                <Ul><Link to="/card-jenny"><P colorWhite>Cards Jenny</P></Link></Ul>
                <Ul><Link to="/card-andres"><P colorWhite>Cards Andres</P></Link></Ul>
            </Div>
      </Nav>
    </>
  )
}

export default Menu

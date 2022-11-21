
import {} from 'react'

// Router
import { Link } from 'react-router-dom'

// NC Components Base
import Nav from '@components/nav'
import Ul from '@components/ul'
import Div from '@components/div'
import H4 from '@components/h4'
import P from '@components/p'

const Menu = () => {
  return (
    <>
        <Nav displayFlex jcSpaceBetween aiCenter padding='0.8rem' bgGray600>
            <Div>
                <H4 textWhite>EXERCISES CARDS</H4>
            </Div>
            <Div displayFlex jcCenter aiCenter>
                <Ul><Link to="/"><P textWhite>Inicio</P></Link></Ul>
                <Ul><Link to="/card-jenny"><P textWhite>Card Jenny</P></Link></Ul>
                <Ul><Link to="/card-andres"><P textWhite>Card Andres</P></Link></Ul>
            </Div>
      </Nav>
    </>
  )
}

export default Menu

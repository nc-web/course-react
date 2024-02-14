
import {} from 'react'
import { Link } from 'react-router-dom'
import { Nav, Div, H5, Ul, P } from 'nc-styles-react'

const NavDesktop = () => {
  return (
    <>
        <Nav displayFlex jcSpaceBetween aiCenter padding='.5rem' boxShadowBR1 bgColorBlue500 >
          <Div>
            <H5 colorWhite>TODO LIST</H5>
          </Div>

          <Div displayFlex jcCenter aiCener>
            <Ul><Link to='/'><P colorWhite>Home</P></Link></Ul>
            <Ul><Link to='/about-as'><P colorWhite>About As</P></Link></Ul>
          </Div>
      </Nav>
    </>
  )
}

export default NavDesktop


import {} from 'react'
import { Link } from 'react-router-dom'
import { Nav, Div, H4, Ul } from 'nc-styles-react'

const NavDesktop = () => {
  return (
    <>
        <Nav displayFlex jcSpaceBetween aiCenter>
          <Div>
            <H4>TODO LIST</H4>
          </Div>

          <Div displayFlex jcCenter aiCener>
            <Ul><Link to='/'>Home</Link></Ul>
            <Ul><Link to='/about-as'>About As</Link></Ul>
          </Div>
      </Nav>
    </>
  )
}

export default NavDesktop


import { } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Ul, Div, H5, P } from 'nc-styles-react'

const Menu = () => {
  return (
        <>
            <Nav>
                <Div displayFlex jcSpaceBetween aiCenter padding='1rem' bgColorBlue400 boxShadowBR1>
                    <Div>
                        <H5 colorWhite>EXERCISES CONSUME API</H5>
                    </Div>
                    <Div displayFlex jcSpaceBetween aiCenter>
                        <Ul><Link to='/'><P colorWhite>HOME</P></Link></Ul>
                        <Ul><Link to='/promises'><P colorWhite>PROMISES</P></Link></Ul>
                        <Ul><Link TO='/async-await' ><P>ASYNC AWAIT</P></Link></Ul>
                        <Ul><Link to='/axios' ><P>AXIOS</P></Link></Ul>
                    </Div>
                </Div>
            </Nav>
        </>
  )
}

export default Menu

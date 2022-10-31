
import { } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

// Global Styles
import '@assets/css/global.css'

// Components Base
import Nav from '@components/nav'
import Ul from '@components/ul'
import Li from '@components/li'
import Main from '@components/main'
import Footer from '@components/footer'
import Div from '@components/div'
import H6 from '@components/h6'
import P from '@components/p'
import Small from '@components/small'

// Pages
import Home from '@pages/Calculator'
import Credits from '@pages/Credits'

function App () {
  return (
    <>
      <Nav displayFlex jcSpaceBetween aiCenter padding='1rem' bgTeal500 boxShadowBR2>
        <Div>
          <H6 textWhite> BASIC CALCULATOR </H6>
        </Div>
        <Div displayFlex jcSpaceBetween aiCenter>
          <Ul><Link to='/'><P textWhite> Calculator </P></Link></Ul>
          <Ul><Link to='/credits'><P textWhite> Credits </P></Link></Ul>
        </Div>
      </Nav>
      <Main displayGrid jcCenter padding='1rem' bgGray300>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/credits' element={<Credits />} />
        </Routes>
      </Main>
      <Footer displayGrid jcCenter bgGray600 padding='1rem'>
        <P textCenter textWhite>NC</P>
        <Small textCenter textWhite>Newsoft Computer</Small>
      </Footer>
    </>
  )
}

export default App

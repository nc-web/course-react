
import { } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Nav, Ul, Main, Footer, Div, H6, P, Small } from 'nc-styles-react'

// Global Styles
import '@assets/css/global.css'

// Views
import Calculator01 from '@views/calculator-01/'
import Calculator02 from '@views/calculator-02/'

function App () {
  return (
    <>
      <Nav displayFlex jcSpaceBetween aiCenter padding='1rem' bgColorTeal500 boxShadowBR2>
        <Div>
          <H6 colorWhite> BASIC CALCULATOR </H6>
        </Div>
        <Div displayFlex jcSpaceBetween aiCenter>
          <Ul><Link to='/'><P colorWhite> Calculator 01</P></Link></Ul>
          <Ul><Link to='/calculator-02'><P colorWhite> Calculator 02 </P></Link></Ul>
        </Div>
      </Nav>
      <Main displayGrid jcCenter padding='1rem' bgGray300>
        <Routes>
          <Route path='/' element={<Calculator01 />} />
          <Route path='/calculator-02' element={<Calculator02 />} />
        </Routes>
      </Main>
      <Footer displayGrid jcCenter bgColorGray600 padding='1rem'>
        <P textCenter colorWhite>NC</P>
        <Small textCenter colorWhite>Newsoft Computer</Small>
      </Footer>
    </>
  )
}

export default App

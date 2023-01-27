
import { } from 'react'
import { Div } from 'nc-styles-react'

// Styles
import './assets/css/global.css'

// Components
// import CardsFooter01 from './views/cards/cards-footer-01/CardFooter-01'
// import CardFloat from './views/cards/card-float/CardFloat-01'
// import Card01 from './views/cards/card-basic/Card01'

// import Section from './views/section/SectionHeaderDesktop'
import SectionHeader from './views/section/SectionHeaderMobile'

function App () {
  return (
      <>
      <Div displayGrid margin='1rem'>
         {/* <Section/> */}
         <SectionHeader/>
      </Div>

        {/* <Card01 /> */}
        {/* <CardsFooter01 /> */}
        {/* <CardFloat /> */}

      </>
  )
}

export default App

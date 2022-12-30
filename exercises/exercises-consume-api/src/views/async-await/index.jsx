
import { } from 'react'
import { Section, Div, H4 } from 'nc-styles-react'

// Cards
import CardAPI01 from './cards/CardAPI01'
import CardAPI02 from './cards/CardAPI02'
import CardAPI03 from './cards/CardAPI03'

const Index = () => {
  return (
        <>
          <Section display='grid' justifyContent='center' padding='2rem' bgColorGray200>
            <Div marginT='1rem' marginB='2rem'>
              <H4 textAling='center' colorBlue600> EXERCISES ASYNC AWAIT API </H4>
            </Div>

            <Div display='grid' gtCol4 gap='1rem' justifyContent='center'>
              <CardAPI01 />
              <CardAPI02 />
              <CardAPI03 />
            </Div>
          </Section>
        </>
  )
}

export default Index

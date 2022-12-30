
import {} from 'react'
import { Section, Div, H4 } from 'nc-styles-react'

// Cards
import CardAPI01 from './cards/CardAPI01'
import CardAPI02 from './cards/CardAPI02'

const Index = () => {
  return (
        <>
          <Section display='grid' justifyContent='center' padding='2rem' bgColorGray200>
            <Div marginT='1rem' marginB='2rem'>
              <H4 textAling='center' colorBlue600> EXERCISES AXIOS API </H4>
            </Div>

            <Div display='grid' gtCol4 gap='1rem' justifyContent='center'>
              <CardAPI01 />
              <CardAPI02 />
            </Div>
          </Section>
        </>
  )
}

export default Index

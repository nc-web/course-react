
import {} from 'react'
import { Section, Div, H4 } from 'nc-styles-react'

// Cards
import CardAPI01 from './cards/CardAPI01'

const Index = () => {
  return (
    <>
      <Section display='grid' justifyContent='center' padding='2rem' bgColorGray200>
        <Div marginT='1rem' marginB='2rem'>
          <H4 textAling='center' colorBlue600> EXERCISES PROMISES API </H4>
        </Div>

        <Div display='grid' gridTemplateColumns='repeat(1, minmax(0, 1fr))' gap='1rem' justifyContent='center'>
          <CardAPI01 />
        </Div>
      </Section>
    </>
  )
}

export default Index

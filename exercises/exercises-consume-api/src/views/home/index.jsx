
import {} from 'react'
import { Section, Div, H4 } from 'nc-styles-react'

// Cards
import CardPromises from './cards/CardPromises'
import CardAsyncAwait from './cards/CardAsyncAwait'
import CardAxios from './cards/CardAxios'

function Index () {
  return (
    <>
      <Section display='grid' justifyContent='center' padding='2rem' bgColorGray200>
        <Div marginT='1rem' marginB='2rem'>
            <H4 textAling='center' colorBlue600> EXERCISES CONSUME API </H4>
        </Div>

        <Div display='grid' gtCol4 gap='1rem' justifyContent='center'>
          <CardPromises />
          <CardAsyncAwait />
          <CardAxios />
        </Div>
      </Section>
    </>
  )
}

export default Index

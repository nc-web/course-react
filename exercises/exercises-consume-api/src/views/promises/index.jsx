
import {} from 'react'
import { Section, Div, H4 } from 'nc-styles-react'

// Cards
import CardAPIRickMorty from './cards/CardAPIRickMorty'
import CardAPIPokemons from './cards/CardAPIPokemons'
import CardAPIOpenWeather from './cards/CardAPIOpenWeather'
import CardAPILanguageDetect from './cards/CardAPILanguageDetect'

const Index = () => {
  return (
    <>
      <Section display='grid' justifyContent='center' padding='2rem' bgColorGray200>
        <Div marginT='1rem' marginB='2rem'>
          <H4 textAling='center' colorBlue600> EXERCISES PROMISES API </H4>
        </Div>

        <Div display='grid' gtCol4 gap='1rem' justifyContent='center'>
          <CardAPIRickMorty />
          <CardAPIPokemons />
          <CardAPIOpenWeather />
          <CardAPILanguageDetect />
        </Div>
      </Section>
    </>
  )
}

export default Index

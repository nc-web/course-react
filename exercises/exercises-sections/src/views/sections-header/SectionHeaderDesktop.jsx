
import { } from 'react'
import { Section, Div, H2, P } from 'nc-styles-react'

// Cards
import Card01 from '../cards/cards-float/CardFloat'

const SectionHeaderDesktop = () => {
  return (
        <>
           <Section width="100%" padding='.625rem' borderRadius='4rem' background='linear-gradient(135deg, #FFEB3B, #FFF176 )'>
              <Div marginTop='.9rem'>
                <H2 textCenter colorGray700> Lorem Ipsum </H2>
                <P fontSize='1rem' textCenter colorGray600 marginTop='.5rem'> Lorem Ipsum passages, and more recently with desktop publishing </P>
              </Div>

              <Div displayGrid gridTemplateColumns='repeat(3,auto)' gap='2rem' jcCenter aiCenter>
                  <Div>
                      <Card01/>
                  </Div>

                  <Div>
                      <Card01/>
                  </Div>

                  <Div>
                      <Card01/>
                  </Div>
              </Div>
            </Section>
        </>
  )
}

export default SectionHeaderDesktop

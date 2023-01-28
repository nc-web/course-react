
import { } from 'react'
import { Section, Div, H2, P } from 'nc-styles-react'

// Cards
import Card01 from '../cards/cards-float/CardFloat'

const SectionMobile = () => {
  return (
        <>
            <Section width='100%' padding='.625rem' borderRadius='4rem' background='linear-gradient(130deg, #FFEB3B, #FFF176)'>
                <Div marginTop='1rem'>
                    <H2 textCenter colorGray600> Lorem Ipsum  </H2>
                    <P fontSize='1rem' textCenter colorGray700 marginTop='.5rem'> Lorem Ipsum passages, and more recently with desktop publishing </P>
                </Div>

                <Div displayGrid jcCenter>
                    <Div displayGrid gridTemplateColumns='100%' justifyContent='center' alignContent='center'>
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
                </Div>
            </Section>
        </>
  )
}

export default SectionMobile
